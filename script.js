const tools = [
  {
    id: "story",
    icon: "book",
    title: "AI Story Generator",
    category: "Creative writing",
    description: "Turn an idea into a structured original story.",
    inputLabel: "Idea or prompt",
    placeholder: "A lighthouse keeper receives a letter from the future...",
    options: [
      { id: "genre", label: "Genre", type: "select", values: ["Fantasy", "Sci-Fi", "Mystery", "Romance", "Thriller", "Literary", "Adventure"] },
      { id: "length", label: "Story Length", type: "select", values: ["Short", "Medium", "Long"] },
      { id: "style", label: "Writing Style", type: "select", values: ["Cinematic", "Poetic", "Minimal", "Humorous", "Dark", "Young Adult"] }
    ]
  },
  {
    id: "summarizer",
    icon: "align",
    title: "Text Summarizer",
    category: "Productivity",
    description: "Compress long text into summaries, bullets, and takeaways.",
    inputLabel: "Long text",
    placeholder: "Paste an article, meeting notes, research text, or report...",
    options: [
      { id: "depth", label: "Detail Level", type: "select", values: ["Brief", "Balanced", "Detailed"] }
    ]
  },
  {
    id: "email",
    icon: "mail",
    title: "Email Generator",
    category: "Communication",
    description: "Draft clear emails for professional situations.",
    inputLabel: "Email request",
    placeholder: "Ask my manager for two days of leave next week...",
    options: [
      { id: "emailType", label: "Email Type", type: "select", values: ["Professional", "Friendly", "Formal", "Apology", "Leave Request", "Job Application", "Thank You"] },
      { id: "tone", label: "Tone", type: "select", values: ["Clear and respectful", "Warm", "Confident", "Concise", "Diplomatic"] }
    ]
  },
  {
    id: "grammar",
    icon: "check",
    title: "Grammar Checker",
    category: "Editing",
    description: "Correct mistakes and rewrite text professionally.",
    inputLabel: "Text to improve",
    placeholder: "Paste text with grammar, clarity, or tone issues...",
    options: [
      { id: "rewriteMode", label: "Rewrite Mode", type: "select", values: ["Professional", "Simple", "Polished", "Persuasive", "Academic"] }
    ]
  },
  {
    id: "quiz",
    icon: "quiz",
    title: "Quiz Generator",
    category: "Learning",
    description: "Create 10 MCQs with answers and explanations.",
    inputLabel: "Topic",
    placeholder: "Photosynthesis for grade 8 students",
    options: [
      { id: "difficulty", label: "Difficulty", type: "select", values: ["Easy", "Medium", "Hard"] }
    ]
  },
  {
    id: "flashcards",
    icon: "cards",
    title: "Flashcard Generator",
    category: "Learning",
    description: "Generate compact question-answer study cards.",
    inputLabel: "Topic",
    placeholder: "JavaScript closures and lexical scope",
    options: [
      { id: "cardCount", label: "Cards", type: "select", values: ["8", "12", "16", "20"] },
      { id: "level", label: "Level", type: "select", values: ["Beginner friendly", "Intermediate", "Advanced"] }
    ]
  },
  {
    id: "code",
    icon: "code",
    title: "Code Explainer",
    category: "Development",
    description: "Explain logic, complexity, and improvement options.",
    inputLabel: "Code",
    placeholder: "Paste code here...",
    options: [
      { id: "audience", label: "Audience", type: "select", values: ["Beginner developer", "Intermediate developer", "Senior developer"] }
    ]
  },
  {
    id: "prompt",
    icon: "wand",
    title: "Prompt Improver",
    category: "Prompt engineering",
    description: "Upgrade rough prompts into detailed instructions.",
    inputLabel: "Prompt draft",
    placeholder: "Write a prompt for an AI that helps plan my weekly study schedule...",
    options: [
      { id: "target", label: "Target", type: "select", values: ["General AI assistant", "Image model", "Coding assistant", "Research assistant", "Writing assistant"] },
      { id: "promptStyle", label: "Style", type: "select", values: ["Detailed and structured", "Compact", "Chain-of-thought free", "Role-based", "JSON output"] }
    ]
  },
  {
    id: "resume",
    icon: "briefcase",
    title: "Resume Bullet Generator",
    category: "Career",
    description: "Create ATS-friendly bullets from role and project details.",
    inputLabel: "Role, project, and skills",
    placeholder: "Frontend Developer. Built a dashboard using HTML, CSS, JS. Improved page speed...",
    options: [
      { id: "role", label: "Target Role", type: "text", placeholder: "Frontend Developer" },
      { id: "skills", label: "Skills", type: "text", placeholder: "JavaScript, accessibility, APIs" },
      { id: "impact", label: "Impact Style", type: "select", values: ["Quantified when possible", "Concise", "Leadership focused", "Technical depth"] }
    ]
  }
];

const iconPaths = {
  book: "M5 4.5A2.5 2.5 0 0 1 7.5 2H20v17H7.5A2.5 2.5 0 0 0 5 21.5v-17Zm0 0A2.5 2.5 0 0 1 7.5 2M5 21.5A2.5 2.5 0 0 0 7.5 24H20v-3H7.5A2.5 2.5 0 0 0 5 21.5Z",
  align: "M4 5h16v2H4V5Zm0 4h12v2H4V9Zm0 4h16v2H4v-2Zm0 4h10v2H4v-2Z",
  mail: "M3 5h18v14H3V5Zm2.4 2 6.6 5 6.6-5H5.4ZM19 9.5l-7 5.2-7-5.2V17h14V9.5Z",
  check: "m9.2 16.6-4.1-4.1L3.7 14l5.5 5.5L21 7.7 19.6 6.3 9.2 16.6Z",
  quiz: "M4 3h16v18H4V3Zm2 2v14h12V5H6Zm2 2h8v2H8V7Zm0 4h8v2H8v-2Zm0 4h5v2H8v-2Z",
  cards: "M5 5h12v14H5V5Zm2 2v10h8V7H7Zm4-4h8v14h-2V5h-6V3Z",
  code: "m8.7 16.6-1.4 1.4L1.3 12l6-6 1.4 1.4L4.1 12l4.6 4.6Zm6.6 0 4.6-4.6-4.6-4.6L16.7 6l6 6-6 6-1.4-1.4ZM13.8 4l-2.1 16h-2l2.1-16h2Z",
  wand: "m4 20 11.2-11.2-2-2L2 18l2 2Zm13.3-13.3 2-2L17.3 2l-2 2 2 2.7ZM19 10l1-2 1 2 2 1-2 1-1 2-1-2-2-1 2-1ZM8 3l1-2 1 2 2 1-2 1-1 2-1-2-2-1 2-1Z",
  briefcase: "M9 4h6l1 3h5v13H3V7h5l1-3Zm1.5 3h3l-.3-1h-2.4l-.3 1ZM5 9v3h14V9H5Zm14 5h-6v2h-2v-2H5v4h14v-4Z",
  arrow: "m13 5 7 7-7 7-1.4-1.4 4.6-4.6H4v-2h12.2l-4.6-4.6L13 5Z",
  spark: "m12 2 2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2Zm7 13 1 2.8 2.8 1-2.8 1-1 2.8-1-2.8-2.8-1 2.8-1 1-2.8ZM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z",
  copy: "M8 7h12v14H8V7Zm2 2v10h8V9h-8ZM4 3h12v2H6v10H4V3Z",
  close: "m6.4 5 12.7 12.7-1.4 1.4L5 6.4 6.4 5Zm11.3 0 1.4 1.4L6.4 19.1 5 17.7 17.7 5Z",
  refresh: "M20 6v6h-6l2.3-2.3A6 6 0 1 0 17 15h2.2A8 8 0 1 1 18 8.2L20 6Z",
  key: "M14 14.9A6 6 0 1 1 15.4 13H23v2h-2v2h-2v-2h-5ZM6 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  github: "M12 .8A11.2 11.2 0 0 0 8.5 22.6c.6.1.8-.2.8-.6v-2.1c-3.4.7-4.1-1.4-4.1-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.7 4 18.7 4.3 18.7 4.3c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2V22c0 .4.2.7.8.6A11.2 11.2 0 0 0 12 .8Z",
  moon: "M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z",
  save: "M4 3h14l2 2v16H4V3Zm2 2v14h12V6l-1-1H6Zm2 0h8v5H8V5Zm2 9h4v3h-4v-3Z"
};

const iconAliases = {
  clear: "close",
  "sparkle-large": "spark"
};

const elements = {
  toolsContainer: document.getElementById("toolsContainer"),
  toolTabs: document.getElementById("toolTabs"),
  workspaceTitle: document.getElementById("workspaceTitle"),
  activeCategory: document.getElementById("activeCategory"),
  activeToolName: document.getElementById("activeToolName"),
  activeToolDescription: document.getElementById("activeToolDescription"),
  mainInputLabel: document.getElementById("mainInputLabel"),
  mainInput: document.getElementById("mainInput"),
  charCount: document.getElementById("charCount"),
  optionsContainer: document.getElementById("optionsContainer"),
  form: document.getElementById("generatorForm"),
  generateButton: document.getElementById("generateButton"),
  copyButton: document.getElementById("copyButton"),
  clearButton: document.getElementById("clearButton"),
  regenerateButton: document.getElementById("regenerateButton"),
  outputContent: document.getElementById("outputContent"),
  emptyState: document.getElementById("emptyState"),
  statusText: document.getElementById("statusText"),
  toast: document.getElementById("toast"),
  themeToggle: document.getElementById("themeToggle"),
  settingsModal: document.getElementById("settingsModal"),
  keyButton: document.getElementById("keyButton"),
  heroKeyButton: document.getElementById("heroKeyButton"),
  providerSelect: document.getElementById("providerSelect"),
  apiKeyInput: document.getElementById("apiKeyInput"),
  modelInput: document.getElementById("modelInput"),
  saveSettingsButton: document.getElementById("saveSettingsButton"),
  clearKeyButton: document.getElementById("clearKeyButton"),
  providerPill: document.getElementById("providerPill")
};

let activeTool = tools[0];
let lastRequest = null;
let isGenerating = false;

function init() {
  renderToolGrid();
  renderToolTabs();
  hydrateIcons();
  switchTool(activeTool.id);
  hydrateSettings();
  bindEvents();
  updateProviderPill();
}

function renderToolGrid() {
  elements.toolsContainer.innerHTML = tools.map((tool) => `
    <article class="tool-card" data-tool-card="${tool.id}">
      <div class="tool-icon"><span class="icon ${tool.icon}" aria-hidden="true"></span></div>
      <h3>${tool.title}</h3>
      <p>${tool.description}</p>
      <button class="launch-btn" type="button" data-tool="${tool.id}">
        <span>Launch</span>
        <span class="icon arrow" aria-hidden="true"></span>
      </button>
    </article>
  `).join("");
  hydrateIcons(elements.toolsContainer);
}

function renderToolTabs() {
  elements.toolTabs.innerHTML = tools.map((tool) => `
    <button class="tool-tab" type="button" data-tab="${tool.id}">
      <span class="icon ${tool.icon}" aria-hidden="true"></span>
      <span>${tool.title}</span>
    </button>
  `).join("");
  hydrateIcons(elements.toolTabs);
}

function switchTool(toolId) {
  activeTool = tools.find((tool) => tool.id === toolId) || tools[0];

  elements.workspaceTitle.textContent = activeTool.title;
  elements.activeCategory.textContent = activeTool.category;
  elements.activeToolName.textContent = activeTool.title;
  elements.activeToolDescription.textContent = activeTool.description;
  elements.mainInputLabel.textContent = activeTool.inputLabel;
  elements.mainInput.placeholder = activeTool.placeholder;
  elements.mainInput.value = "";
  updateCounter();
  renderOptions(activeTool);
  clearOutput(false);

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === activeTool.id);
  });

  document.querySelectorAll("[data-tool-card]").forEach((card) => {
    card.classList.toggle("active", card.dataset.toolCard === activeTool.id);
  });
}

function renderOptions(tool) {
  elements.optionsContainer.innerHTML = tool.options.map((option) => {
    if (option.type === "text") {
      return `
        <label class="option-field">
          <span>${option.label}</span>
          <input type="text" data-option="${option.id}" placeholder="${option.placeholder || ""}">
        </label>
      `;
    }

    return `
      <label class="option-field">
        <span>${option.label}</span>
        <select data-option="${option.id}">
          ${option.values.map((value) => `<option value="${value}">${value}</option>`).join("")}
        </select>
      </label>
    `;
  }).join("");
}

function bindEvents() {
  elements.toolsContainer.addEventListener("click", (event) => {
    const button = event.target.closest("[data-tool]");
    if (!button) return;
    switchTool(button.dataset.tool);
    document.getElementById("workspace").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  elements.toolTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-tab]");
    if (!button) return;
    switchTool(button.dataset.tab);
  });

  elements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    generateResponse();
  });

  elements.mainInput.addEventListener("input", () => {
    autoResizeTextarea();
    updateCounter();
  });

  elements.copyButton.addEventListener("click", copyOutput);
  elements.clearButton.addEventListener("click", () => clearOutput(true));
  elements.regenerateButton.addEventListener("click", () => {
    if (lastRequest) {
      generateResponse(lastRequest);
    } else {
      showToast("Generate something first.");
    }
  });

  elements.themeToggle.addEventListener("click", toggleTheme);
  elements.keyButton.addEventListener("click", openSettings);
  elements.heroKeyButton.addEventListener("click", openSettings);
  elements.providerSelect.addEventListener("change", hydrateModelInput);
  elements.saveSettingsButton.addEventListener("click", saveSettings);
  elements.clearKeyButton.addEventListener("click", clearSavedKey);

  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      generateResponse();
    }

    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === "c") {
      event.preventDefault();
      copyOutput();
    }
  });
}

async function generateResponse(previousRequest = null) {
  if (isGenerating) return;

  const request = previousRequest || buildRequest();
  if (!request) return;

  lastRequest = request;
  showLoader();

  try {
    const prompt = window.AI_TOOLBOX_PROMPTS[request.tool.id]({
      input: request.input,
      options: request.options
    });

    const response = await generateContent(prompt);
    await typeWriter(response);
    elements.statusText.textContent = "Complete";
    showToast("Generated successfully.");
  } catch (error) {
    handleError(error);
  } finally {
    hideLoader();
  }
}

function buildRequest() {
  const input = elements.mainInput.value.trim();

  if (!input) {
    showToast("Add input before generating.");
    elements.mainInput.focus();
    return null;
  }

  const options = {};
  elements.optionsContainer.querySelectorAll("[data-option]").forEach((field) => {
    options[field.dataset.option] = field.value.trim();
  });

  return { tool: activeTool, input, options };
}

async function typeWriter(markdown) {
  elements.emptyState.hidden = true;
  elements.outputContent.innerHTML = "";
  elements.outputContent.classList.add("typing");

  const tokens = markdown.split(/(\s+)/);
  let visible = "";

  for (const token of tokens) {
    visible += token;
    elements.outputContent.innerHTML = renderMarkdown(visible);
    await wait(10);
  }

  elements.outputContent.classList.remove("typing");
}

function copyOutput() {
  const text = elements.outputContent.textContent.trim();

  if (!text) {
    showToast("There is no output to copy.");
    return;
  }

  navigator.clipboard.writeText(text)
    .then(() => showToast("Output copied."))
    .catch(() => showToast("Copy failed. Select the output and copy manually."));
}

function clearOutput(showMessage) {
  elements.outputContent.innerHTML = "";
  elements.emptyState.hidden = false;
  elements.statusText.textContent = "Ready";
  lastRequest = null;

  if (showMessage) {
    elements.mainInput.value = "";
    updateCounter();
    autoResizeTextarea();
    showToast("Workspace cleared.");
  }
}

function showLoader() {
  isGenerating = true;
  elements.generateButton.classList.add("loading");
  elements.generateButton.disabled = true;
  elements.statusText.textContent = "Generating";
  elements.emptyState.hidden = true;
  elements.outputContent.innerHTML = `<div class="loader-line"><span></span><span></span><span></span></div>`;
}

function hideLoader() {
  isGenerating = false;
  elements.generateButton.classList.remove("loading");
  elements.generateButton.disabled = false;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => elements.toast.classList.remove("show"), 2800);
}

function handleError(error) {
  const message = navigator.onLine ? error.message : "Internet connection unavailable.";
  elements.statusText.textContent = "Error";
  elements.emptyState.hidden = true;
  elements.outputContent.innerHTML = `
    <div class="error-box">
      <h4>Generation failed</h4>
      <p>${escapeHtml(message || "Something went wrong. Try again.")}</p>
    </div>
  `;
  showToast(message || "Generation failed.");
}

function updateCounter() {
  elements.charCount.textContent = elements.mainInput.value.length.toLocaleString();
}

function autoResizeTextarea() {
  elements.mainInput.style.height = "auto";
  elements.mainInput.style.height = `${Math.min(elements.mainInput.scrollHeight, 420)}px`;
}

function toggleTheme() {
  const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
  document.body.dataset.theme = nextTheme;
  localStorage.setItem("aiToolboxTheme", nextTheme);
}

function hydrateSettings() {
  const savedTheme = localStorage.getItem("aiToolboxTheme");
  if (savedTheme) {
    document.body.dataset.theme = savedTheme;
  }

  const provider = localStorage.getItem("aiToolboxProvider") || window.AI_TOOLBOX_CONFIG.defaultProvider;
  elements.providerSelect.value = provider;
  hydrateModelInput();
}

function hydrateModelInput() {
  const providerId = elements.providerSelect.value;
  const provider = window.AI_TOOLBOX_CONFIG.providers[providerId];
  let model = localStorage.getItem(`aiToolboxModel:${providerId}`) || provider.model;

  if (provider.legacyModels?.includes(model)) {
    model = provider.model;
    localStorage.setItem(`aiToolboxModel:${providerId}`, model);
  }

  elements.modelInput.value = model;
  elements.apiKeyInput.value = localStorage.getItem(`aiToolboxKey:${providerId}`) || provider.apiKey || "";
}

function openSettings() {
  hydrateSettings();
  if (typeof elements.settingsModal.showModal === "function") {
    elements.settingsModal.showModal();
  } else {
    elements.settingsModal.setAttribute("open", "");
  }
}

function saveSettings() {
  const providerId = elements.providerSelect.value;
  const key = elements.apiKeyInput.value.trim();
  const model = elements.modelInput.value.trim();

  localStorage.setItem("aiToolboxProvider", providerId);

  if (key) {
    localStorage.setItem(`aiToolboxKey:${providerId}`, key);
  }

  if (model) {
    localStorage.setItem(`aiToolboxModel:${providerId}`, model);
  }

  updateProviderPill();
  showToast("API settings saved.");
  elements.settingsModal.close();
}

function clearSavedKey() {
  const providerId = elements.providerSelect.value;
  localStorage.removeItem(`aiToolboxKey:${providerId}`);
  elements.apiKeyInput.value = "";
  updateProviderPill();
  showToast("Saved key removed.");
}

function updateProviderPill() {
  const providerId = localStorage.getItem("aiToolboxProvider") || window.AI_TOOLBOX_CONFIG.defaultProvider;
  const provider = window.AI_TOOLBOX_CONFIG.providers[providerId];
  const hasKey = Boolean(localStorage.getItem(`aiToolboxKey:${providerId}`) || provider.apiKey);
  elements.providerPill.textContent = `${provider.name} ${hasKey ? "ready" : "needs key"}`;
  elements.providerPill.classList.toggle("warning", !hasKey);
}

function renderMarkdown(markdown) {
  const codeBlocks = [];
  let html = escapeHtml(markdown).replace(/```([\s\S]*?)```/g, (_, code) => {
    const index = codeBlocks.length;
    codeBlocks.push(`<pre><code>${highlightCode(code.trim())}</code></pre>`);
    return `@@CODE_BLOCK_${index}@@`;
  });

  html = html
    .replace(/^### (.*)$/gm, "<h3>$1</h3>")
    .replace(/^## (.*)$/gm, "<h2>$1</h2>")
    .replace(/^# (.*)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/^\- (.*)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>")
    .replace(/\n{2,}/g, "</p><p>")
    .replace(/\n/g, "<br>");

  html = `<p>${html}</p>`
    .replace(/<p><h/g, "<h")
    .replace(/<\/h([1-3])><\/p>/g, "</h$1>")
    .replace(/<p><ul>/g, "<ul>")
    .replace(/<\/ul><\/p>/g, "</ul>");

  codeBlocks.forEach((block, index) => {
    html = html.replace(`@@CODE_BLOCK_${index}@@`, block);
  });

  return html;
}

function highlightCode(code) {
  return code.replace(/\b(const|let|var|function|return|if|else|for|while|class|async|await|try|catch|new|import|from)\b/g, "<span class=\"syntax-keyword\">$1</span>");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function hydrateIcons(root = document) {
  root.querySelectorAll(".icon").forEach((icon) => {
    if (icon.dataset.hydrated === "true") return;

    const iconName = [...icon.classList].find((className) => iconPaths[className] || iconAliases[className]);
    const path = iconPaths[iconName] || iconPaths[iconAliases[iconName]];

    if (!path) return;

    icon.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${path}"></path></svg>`;
    icon.classList.add("has-svg");
    icon.dataset.hydrated = "true";
  });
}

document.addEventListener("DOMContentLoaded", init);
