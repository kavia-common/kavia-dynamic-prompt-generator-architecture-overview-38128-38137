import React from 'react';

/**
 * PUBLIC_INTERFACE
 * RetroBuildBadge
 * Subtle corner badge with retro scanline/pixel style.
 */
export default function RetroBuildBadge({ text = 'Retro Build', corner = 'tr' }) {
  /** This is a public function. */
  const pos = {
    tr: { top: 10, right: 10 },
    tl: { top: 10, left: 10 },
    br: { bottom: 10, right: 10 },
    bl: { bottom: 10, left: 10 },
  }[corner] || { top: 10, right: 10 };

  return (
    <div
      className="retro-badge"
      aria-label="Retro build badge"
      style={pos}
    >
      ▓ {text}
    </div>
  );
}
