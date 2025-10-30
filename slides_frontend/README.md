# Slides Frontend — Dynamic Prompt Generator Architecture

Ocean Professional themed React app to present the architecture slides for Kavia’s Dynamic Prompt Generator.

## Quickstart

- Install dependencies: `npm install`
- Start development server: `npm start` (defaults to http://localhost:3000)
- Run tests: `npm test`
- Create production build: `npm run build`

The app is a standard Create React App setup using react-scripts. No server-side code is included.

## Usage

After starting the dev server, the presentation UI opens with a central 16:9 viewer and navigation controls. Use the arrow keys or the on-screen buttons to move through the seeded slide deck. On small screens the thumbnail strip is hidden automatically to preserve space. The header includes shortcuts to open the keyboard help and an environment inspector (dev only), as well as a theme toggle.

- Navigate with buttons beneath the viewer or via keyboard shortcuts.
- Toggle theme with the “Theme” button in the header. Your preference is stored in localStorage.
- Open the keyboard shortcut help with “Shortcuts” in the header or by pressing “?”.
- In development, click “Env” in the header to inspect current REACT_APP_* values.

## Keyboard Shortcuts

The app supports accessible keyboard navigation and a help overlay:

- Navigation:
  - Left Arrow: Previous slide
  - Right Arrow: Next slide
  - Space: Next slide
  - Shift + Space: Previous slide
  - Home: First slide
  - End: Last slide
- Help:
  - ?: Toggle help overlay
  - Esc: Close help overlay

These are implemented in src/hooks/useKeyNavigation.js and displayed via src/components/KeyboardShortcutsHelp.jsx.

## Environment Variables

Environment is centrally read via src/utils/env.js and exposes sane defaults for all variables. The app respects the following REACT_APP_* variables:

- REACT_APP_API_BASE: Base path for any API usage (string; default empty)
- REACT_APP_BACKEND_URL: Backend URL if applicable (string; default empty)
- REACT_APP_FRONTEND_URL: Public frontend URL (string; default empty)
- REACT_APP_WS_URL: WebSocket endpoint (string; default empty)
- REACT_APP_NODE_ENV: Node environment (defaults to process.env.NODE_ENV or “development”)
- REACT_APP_NEXT_TELEMETRY_DISABLED: Disable telemetry (string flag; default "1")
- REACT_APP_ENABLE_SOURCE_MAPS: Enable source maps in builds (string flag; default "true")
- REACT_APP_PORT: Dev server port (string; default "3000")
- REACT_APP_TRUST_PROXY: Trust proxy setting (string flag; default "false")
- REACT_APP_LOG_LEVEL: Desired log level (string; default "info")
- REACT_APP_HEALTHCHECK_PATH: Healthcheck path (string; default "/healthz")
- REACT_APP_FEATURE_FLAGS: JSON string of feature flags (default "{}")
- REACT_APP_EXPERIMENTS_ENABLED: Experimental features toggle (string flag; default "false")

Create a .env file in slides_frontend root to override values. Never commit secrets. Example:

```env
REACT_APP_NODE_ENV=development
REACT_APP_PORT=3000
REACT_APP_FEATURE_FLAGS={"newControls":true,"labs":"on"}
REACT_APP_EXPERIMENTS_ENABLED=true
```

The getEnv() function parses REACT_APP_FEATURE_FLAGS into an object at __FEATURE_FLAGS and sets __isDev to true when REACT_APP_NODE_ENV is not “production”. In development, the Env panel lists current values for inspection.

## Theming and Customization

The Ocean Professional theme is implemented with CSS custom properties in src/styles/tokens.css, applied to the document and switched via a data-theme attribute.

- Light and dark themes are defined using CSS variables for surface, background, text, border, gradient, button styles, and badge styles.
- toggleTheme() flips the data-theme attribute between “light” and “dark” and persists the setting in localStorage.
- initTheme() initializes theme based on saved preference or system color scheme.
- getThemeTokens() reads current computed tokens for use in JavaScript.

To customize:
1) Adjust color tokens in src/styles/tokens.css (e.g., --color-primary, --color-secondary).
2) Extend component tokens like --btn-bg and --badge-bg for different visual styles.
3) If you add new theme variants, ensure data-theme selectors provide overrides and initTheme() sets an appropriate initial value.

## Slide Data Structure

Slides are defined as plain objects in src/data/slides.js. The viewer supports a simple title + bullets + optional callout structure.

Shape:
```js
{
  id: string,            // unique identifier
  title: string,         // slide title
  bullets?: string[],    // optional bullet points
  callout?: string       // optional highlighted callout text
}
```

Example:
```js
export const slides = [
  {
    id: 'example-1',
    title: 'Sample Slide',
    bullets: [
      'First point',
      'Second point',
    ],
    callout: 'A highlighted note or takeaway',
  },
  {
    id: 'example-2',
    title: 'Another Slide',
    bullets: [],
  }
];
```

Rendering:
- SlideViewer (src/components/SlideViewer.jsx) renders the current slide’s title, bullet list if present, and a callout region when provided.
- SlideThumbnailStrip shows a compact preview with the title and first bullet, and allows quick navigation.
- ProgressBar reflects progress across the deck, updated by the current index.

## Animations and Reduced Motion

Animations are defined in src/utils/animations.css. The main viewer applies a subtle horizontal slide-in animation class (“slide-h”). When the user prefers reduced motion, usePrefersReducedMotion() disables animations via CSS @media (prefers-reduced-motion: reduce). This ensures motion sensitivity accessibility.

## Preview and Deployment

Local preview:
- Start: `npm start` then open http://localhost:3000.
- The development server hot-reloads changes in src/.

Production build:
- Run `npm run build` to generate an optimized build in build/.
- Serve the build directory with any static file server (e.g., Nginx, Vercel, Netlify, GitHub Pages).
- If behind a proxy, ensure the public path is correctly served from the site root.

Environment handling in production:
- CRA inlines REACT_APP_* variables at build time. Rebuild if you change .env values for production.
- For runtime toggles, prefer feature flags in REACT_APP_FEATURE_FLAGS and rebuild if necessary.

## Project Structure

- src/styles/tokens.css — theme tokens (colors, radius, shadows, gradients)
- src/utils/animations.css — fade/slide animations with reduced-motion support
- src/theme.js — theme initialization, toggling, and token accessors
- src/hooks/ — custom hooks (keyboard navigation, reduced motion)
- src/components/ — SlideViewer, SlideNavigator, SlideDeckHeader, ProgressBar, Thumbnails, Tooltip, Retro badge, ThemeToggle, KeyboardShortcutsHelp
- src/data/slides.js — seeded architecture slides for the Dynamic Prompt Generator
- src/utils/env.js — environment parsing and defaults for REACT_APP_* keys
- src/index.js / src/App.js — app bootstrapping, layout, and state

## Accessibility

The UI implements focus-visible rings, ARIA roles and labels for navigation and progress, live region announcements for the slide index, and modal semantics for the keyboard help dialog. Keyboard navigation supports all core actions, and reduced motion preferences are respected.

## Features

- Central 16:9 slide viewer with modern, minimal UI
- Ocean Professional theme (blue primary, amber accents) with dark mode
- Keyboard navigation: ← → Space (Shift+Space prev) Home End
- Help overlay: press “?” (close with Esc)
- Theme toggle and subtle Retro build badge
- Responsive layout with thumbnail strip hidden on small screens
- Reduced motion support (prefers-reduced-motion)
- Dev-only Env panel (header “Env” button)
