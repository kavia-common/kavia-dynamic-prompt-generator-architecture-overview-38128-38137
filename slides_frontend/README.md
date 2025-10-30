# Slides Frontend — Dynamic Prompt Generator Architecture

Ocean Professional themed React app to present the architecture slides for Kavia’s Dynamic Prompt Generator.

## Quickstart

- Install: `npm install`
- Start dev server: `npm start` (http://localhost:3000)
- Build: `npm run build`
- Test: `npm test`

## Features

- Central 16:9 slide viewer with modern, minimal UI
- Ocean Professional theme (blue primary, amber accents)
- Keyboard navigation: ← → Space (Shift+Space prev) Home End
- Help overlay: press `?` (close with `Esc`)
- Theme toggle and subtle Retro build badge
- Responsive layout with thumbnail strip hidden on small screens
- Reduced motion support (prefers-reduced-motion)
- Dev-only Env panel (header “Env” button)

## Environment variables

The app reads the following REACT_APP_* variables via `src/utils/env.js`:

- REACT_APP_API_BASE, REACT_APP_BACKEND_URL, REACT_APP_FRONTEND_URL, REACT_APP_WS_URL
- REACT_APP_NODE_ENV, REACT_APP_NEXT_TELEMETRY_DISABLED, REACT_APP_ENABLE_SOURCE_MAPS
- REACT_APP_PORT, REACT_APP_TRUST_PROXY, REACT_APP_LOG_LEVEL, REACT_APP_HEALTHCHECK_PATH
- REACT_APP_FEATURE_FLAGS, REACT_APP_EXPERIMENTS_ENABLED

Create a `.env` file (do not commit secrets). See `.env.example` in the project root if provided. In development, click “Env” in header to inspect current values.

## Structure

- src/styles/tokens.css — theme tokens (colors, radius, shadows, gradient)
- src/utils/animations.css — fade/slide animations with reduced-motion support
- src/theme.js — theme init/toggle helpers
- src/hooks/ — custom hooks (keyboard, reduced motion)
- src/components/ — viewer, navigator, header, progress, thumbnails, etc.
- src/data/slides.js — seeded architecture slides
- public/manifest.json — theme colors align to tokens

## Accessibility

- Focus-visible rings, aria-labels, live regions for progress, modal semantics
- Keyboard shortcuts [?, Esc] for help modal

More documentation will be added in step 2.
