window.AI_TOOLBOX_PROMPTS = {
  story: ({ input, options }) => `
You are an original fiction writer. Generate a completely original story using the user's idea.

User idea:
${input}

Requirements:
- Genre: ${options.genre || "Best fit"}
- Story length: ${options.length || "Medium"}
- Writing style: ${options.style || "Cinematic"}
- No plagiarism, no copied characters, no copied plotlines.
- Use rich storytelling, specific imagery, and a satisfying arc.
- Return Markdown only.

Format:
# Story Title
## Genre
## Synopsis
## Characters
## Beginning
## Conflict
## Climax
## Ending
## Optional Sequel Hook
`,

  summarizer: ({ input, options }) => `
Summarize the text below for a busy reader.

Text:
${input}

Requirements:
- Detail level: ${options.depth || "Balanced"}
- Keep the meaning accurate.
- Do not invent facts.
- Return Markdown only.

Format:
# Summary
## Bullet Points
## Key Takeaways
`,

  email: ({ input, options }) => `
Write a polished professional email from the user's request.

Request:
${input}

Requirements:
- Email type: ${options.emailType || "Professional"}
- Tone: ${options.tone || "Clear and respectful"}
- Include a useful subject line.
- Keep it concise unless the request requires detail.
- Return Markdown only.

Format:
# Subject
## Email
`,

  grammar: ({ input, options }) => `
Improve the grammar, clarity, and professionalism of the text below.

Text:
${input}

Requirements:
- Rewrite mode: ${options.rewriteMode || "Professional"}
- Correct mistakes while preserving meaning.
- Explain the most important edits briefly.
- Return Markdown only.

Format:
# Improved Version
## Key Fixes
`,

  quiz: ({ input, options }) => `
Create a quiz about this topic:
${input}

Requirements:
- Generate exactly 10 multiple-choice questions.
- Difficulty: ${options.difficulty || "Medium"}
- Each question must have four options labeled A, B, C, and D.
- Include the correct answer and a one-sentence explanation.
- Return Markdown only.

Format:
# Quiz: [Topic]
## Questions
## Answer Key
`,

  flashcards: ({ input, options }) => `
Create study flashcards for this topic:
${input}

Requirements:
- Number of cards: ${options.cardCount || "12"}
- Level: ${options.level || "Beginner friendly"}
- Each flashcard needs a question and answer.
- Prefer concise, memorable explanations.
- Return Markdown only.

Format:
# Flashcards
## Cards
`,

  code: ({ input, options }) => `
Explain this code clearly:

\`\`\`
${input}
\`\`\`

Requirements:
- Audience: ${options.audience || "Intermediate developer"}
- Explain the logic.
- Explain time complexity and space complexity when applicable.
- Add practical improvement suggestions.
- Return Markdown only.

Format:
# Code Explanation
## What It Does
## Logic
## Complexity
## Suggestions
`,

  prompt: ({ input, options }) => `
Improve this prompt for an AI model:
${input}

Requirements:
- Target model/task: ${options.target || "General AI assistant"}
- Prompt style: ${options.promptStyle || "Detailed and structured"}
- Add context, role, constraints, output format, and quality criteria.
- Return Markdown only.

Format:
# Improved Prompt
## Why It Works
## Optional Variations
`,

  resume: ({ input, options }) => `
Generate ATS-friendly resume bullet points from the details below.

Details:
${input}

Requirements:
- Role: ${options.role || "Target role inferred from input"}
- Skills: ${options.skills || "Infer from input"}
- Impact style: ${options.impact || "Quantified when possible"}
- Use strong action verbs.
- Avoid exaggeration and do not invent numbers unless marked as examples.
- Return Markdown only.

Format:
# Resume Bullets
## ATS Keywords
## Tailoring Tips
`
};
