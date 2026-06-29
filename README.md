# AI Toolbox

AI Toolbox is a production-ready static AI web application built with HTML, CSS, and vanilla JavaScript. It provides nine focused AI utilities inside a premium responsive SaaS-style interface.

## Features

- AI Story Generator
- Text Summarizer
- Email Generator
- Grammar Checker
- Quiz Generator
- Flashcard Generator
- Code Explainer
- Prompt Improver
- Resume Bullet Generator
- Gemini and OpenRouter support
- Centralized API configuration in `config.js`
- Copy, clear, regenerate, loading state, toasts, typing animation, auto-resizing textarea, and character counter
- Keyboard shortcuts: `Ctrl + Enter` to generate and `Ctrl + Shift + C` to copy output
- Responsive layout, semantic HTML, ARIA labels, high contrast, SEO metadata, Open Graph tags, and favicon
- Deploys directly to Vercel with no build step

## Screenshots

Add screenshots after deployment:

- `assets/images/home-screen.png`
- `assets/images/workspace-screen.png`
- `assets/images/mobile-screen.png`

## Installation

Open the folder directly in a browser or serve it with any static server.

```text
AI-Toolbox/
  index.html
  style.css
  script.js
  config.js
  prompts.js
  README.md
  assets/
    icons/
    images/
```

## API Setup

The app supports Gemini and OpenRouter.

1. Open the app.
2. Click the key icon in the top navigation.
3. Choose Gemini or OpenRouter.
4. Paste your API key.
5. Save settings.

The key is stored only in the current browser using `localStorage`. For a private deployment, you can also set a default provider, model, and key in `config.js`.

## Deployment

Deploy directly on Vercel:

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Use default static deployment settings.
4. No framework preset, build command, database, or server is required.

## Folder Structure

```text
AI-Toolbox/
  index.html       Main document and app layout
  style.css        Responsive premium UI theme
  script.js        Tool switching, UX state, Markdown rendering, shortcuts
  config.js        Provider config and reusable generateContent function
  prompts.js       Tool-specific prompt templates
  README.md        Project documentation
  assets/
    icons/         Local SVG icons and favicon
    images/        Open Graph preview asset
```

## Future Scope

- Export generated output as PDF or Markdown
- Add prompt history
- Add saved favorite outputs
- Add streaming responses when provider support is enabled
- Add import and export for local settings

## License

MIT License
