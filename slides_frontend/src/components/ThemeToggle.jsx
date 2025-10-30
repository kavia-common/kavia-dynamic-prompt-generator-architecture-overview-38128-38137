import React from 'react';
import { toggleTheme } from '../theme';

/**
 * PUBLIC_INTERFACE
 * ThemeToggle
 * Tactile theme toggle control.
 */
export default function ThemeToggle() {
  /** This is a public function. */
  return (
    <button
      className="btn btn-ghost"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      🌓 Theme
    </button>
  );
}
