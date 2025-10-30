import React from 'react';
import ThemeToggle from './ThemeToggle';
import RetroBuildBadge from './RetroBuildBadge';

/**
 * PUBLIC_INTERFACE
 * SlideDeckHeader
 * App header with branding and quick actions.
 */
export default function SlideDeckHeader({ onToggleHelp, onToggleEnv }) {
  /** This is a public function. */
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="header-left">
          <div className="brand" aria-label="App brand">
            <span className="brand-dot" aria-hidden="true" />
            <span className="brand-title">Kavia Slides • Dynamic Prompt Generator</span>
          </div>
        </div>
        <div className="header-right">
          <button className="btn btn-ghost hidden-sm" onClick={onToggleHelp} aria-label="Open keyboard shortcuts">❔ Shortcuts</button>
          <button className="btn btn-ghost" onClick={onToggleEnv} aria-label="Toggle environment info">🧪 Env</button>
          <ThemeToggle />
        </div>
      </div>
      <RetroBuildBadge text="Retro v1" corner="tr" />
    </header>
  );
}
