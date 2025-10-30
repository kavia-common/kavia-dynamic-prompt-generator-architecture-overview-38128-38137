import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Tooltip
 * Simple hover/focus tooltip wrapper.
 */
export default function Tooltip({ label, children }) {
  /** This is a public function. */
  return (
    <span className="tooltip-wrapper" style={{ position: 'relative', display: 'inline-flex' }}>
      {children}
      <span
        role="tooltip"
        className="tooltip-label"
        style={{
          position: 'absolute',
          bottom: 'calc(100% + 6px)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--color-text)',
          color: 'var(--color-surface)',
          fontSize: 12,
          padding: '4px 8px',
          borderRadius: 6,
          whiteSpace: 'nowrap',
          opacity: 0,
          pointerEvents: 'none',
          transition: 'opacity .12s ease',
        }}
      >
        {label}
      </span>
      <style>{`
        .tooltip-wrapper:hover .tooltip-label,
        .tooltip-wrapper:focus-within .tooltip-label {
          opacity: .9;
        }
      `}</style>
    </span>
  );
}
