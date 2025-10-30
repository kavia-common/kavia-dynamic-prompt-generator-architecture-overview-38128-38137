import React from 'react';

/**
 * PUBLIC_INTERFACE
 * KeyboardShortcutsHelp
 * Modal listing available keyboard shortcuts. Controlled via props.
 */
export default function KeyboardShortcutsHelp({ open, onClose }) {
  /** This is a public function. */
  if (!open) return null;
  return (
    <div className="help-modal-backdrop fade-enter-active" role="dialog" aria-modal="true" aria-label="Keyboard shortcuts help">
      <div className="help-modal">
        <header>
          <strong>Keyboard Shortcuts</strong>
          <button className="btn btn-ghost" onClick={onClose} aria-label="Close shortcuts help">✕</button>
        </header>
        <div className="content">
          <div>Navigate:</div>
          <div><kbd>←</kbd> Previous • <kbd>→</kbd> Next</div>
          <div><kbd>Space</kbd> Next • <kbd>Shift</kbd> + <kbd>Space</kbd> Previous</div>
          <div><kbd>Home</kbd> First • <kbd>End</kbd> Last</div>
          <div className="muted">Help:</div>
          <div><kbd>?</kbd> Open/Close this panel • <kbd>Esc</kbd> Close</div>
        </div>
      </div>
    </div>
  );
}
