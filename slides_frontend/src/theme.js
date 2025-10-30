import './styles/tokens.css';

/**
 * PUBLIC_INTERFACE
 * getThemeTokens
 * Returns the current computed CSS custom properties for use in JS.
 */
export function getThemeTokens() {
  /** This is a public function. */
  const styles = getComputedStyle(document.documentElement);
  const read = (name, fallback = '') => styles.getPropertyValue(name)?.trim() || fallback;
  return {
    primary: read('--color-primary'),
    secondary: read('--color-secondary'),
    background: read('--color-background'),
    surface: read('--color-surface'),
    text: read('--color-text'),
    textMuted: read('--color-text-muted'),
    border: read('--color-border'),
    gradientSurface: read('--gradient-surface'),
    radius: {
      sm: read('--radius-sm'),
      md: read('--radius-md'),
      lg: read('--radius-lg'),
    },
    shadow: {
      sm: read('--shadow-sm'),
      md: read('--shadow-md'),
      lg: read('--shadow-lg'),
    }
  };
}

/**
 * PUBLIC_INTERFACE
 * toggleTheme
 * Toggles between light and dark data-theme at documentElement level.
 */
export function toggleTheme() {
  /** This is a public function. */
  const el = document.documentElement;
  const next = el.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  el.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  return next;
}

/**
 * PUBLIC_INTERFACE
 * initTheme
 * Initializes theme based on prior preference or system preference.
 */
export function initTheme() {
  /** This is a public function. */
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
}
