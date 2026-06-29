window.AI_TOOLBOX_CONFIG = {
  defaultProvider: "openrouter",
  providers: {
    gemini: {
      name: "Gemini",
      apiKey: "",
      model: "gemini-1.5-flash",
      endpoint: "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={apiKey}"
    },
    openrouter: {
      name: "OpenRouter",
      apiKey: "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",
      model: "google/gemini-2.5-flash",
      legacyModels: ["google/gemini-flash-1.5", "google/gemini-1.5-flash"],
      endpoint: "https://openrouter.ai/api/v1/chat/completions",
      siteUrl: "https://ai-toolbox.local",
      appName: "AI Toolbox"
    }
  }
};

async function generateContent(prompt, options = {}) {
  const config = window.AI_TOOLBOX_CONFIG;
  const savedProvider = localStorage.getItem("aiToolboxProvider");
  const providerId = options.provider || savedProvider || config.defaultProvider;
  const provider = config.providers[providerId] || config.providers.gemini;
  const apiKey = localStorage.getItem(`aiToolboxKey:${providerId}`) || provider.apiKey;
  let model = localStorage.getItem(`aiToolboxModel:${providerId}`) || provider.model;

  if (provider.legacyModels?.includes(model)) {
    model = provider.model;
    localStorage.setItem(`aiToolboxModel:${providerId}`, model);
  }

  if (!apiKey) {
    throw new Error("API key missing. Open API settings and add a Gemini or OpenRouter key.");
  }

  if (providerId === "openrouter") {
    return callOpenRouter({ provider, apiKey, model, prompt });
  }

  return callGemini({ provider, apiKey, model, prompt });
}

async function callGemini({ provider, apiKey, model, prompt }) {
  const endpoint = provider.endpoint
    .replace("{model}", encodeURIComponent(model))
    .replace("{apiKey}", encodeURIComponent(apiKey));

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        temperature: 0.76,
        topP: 0.92,
        maxOutputTokens: 4096
      }
    })
  });

  if (!response.ok) {
    await throwApiError(response);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.map((part) => part.text).join("\n").trim();

  if (!text) {
    throw new Error("Invalid response from Gemini. Try again with a clearer prompt.");
  }

  return text;
}

async function callOpenRouter({ provider, apiKey, model, prompt }) {
  const response = await fetch(provider.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": provider.siteUrl,
      "X-Title": provider.appName
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "system",
          content: "You are a precise, helpful AI assistant inside AI Toolbox. Return clean Markdown."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.76,
      max_tokens: 4096
    })
  });

  if (!response.ok) {
    await throwApiError(response);
  }

  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content?.trim();

  if (!text) {
    throw new Error("Invalid response from OpenRouter. Try again with a clearer prompt.");
  }

  return text;
}

async function throwApiError(response) {
  let message = `API error ${response.status}.`;

  try {
    const data = await response.json();
    message = data?.error?.message || data?.message || message;
  } catch (error) {
    message = response.statusText || message;
  }

  if (response.status === 401 || response.status === 403) {
    throw new Error("API key rejected. Check the saved key and provider.");
  }

  if (response.status === 429) {
    throw new Error("Rate limit reached. Wait a moment and try again.");
  }

  throw new Error(message);
}
