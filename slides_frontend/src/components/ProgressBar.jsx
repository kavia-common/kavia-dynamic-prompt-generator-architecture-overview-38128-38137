import React from 'react';

/**
 * PUBLIC_INTERFACE
 * ProgressBar
 * Visual indicator of slide progress from 0..1
 */
export default function ProgressBar({ value }) {
  /** This is a public function. */
  const clamped = Math.max(0, Math.min(1, Number(value) || 0));
  return (
    <div className="progress-wrap" aria-label="Slide progress">
      <div
        className="progress-bar"
        style={{ transform: `scaleX(${clamped})` }}
        aria-valuenow={Math.round(clamped * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
      />
    </div>
  );
}
