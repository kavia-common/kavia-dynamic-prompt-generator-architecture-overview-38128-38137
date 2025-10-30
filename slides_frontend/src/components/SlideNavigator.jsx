import React from 'react';
import Tooltip from './Tooltip';

/**
 * PUBLIC_INTERFACE
 * SlideNavigator
 * Previous/Next/Home/End buttons and index display
 */
export default function SlideNavigator({ index, total, onPrev, onNext, onFirst, onLast }) {
  /** This is a public function. */
  return (
    <div className="controls-row" aria-label="Slide navigation">
      <div style={{ display: 'flex', gap: 8 }}>
        <Tooltip label="First (Home)">
          <button className="btn btn-ghost" onClick={onFirst} aria-label="First slide">⏮</button>
        </Tooltip>
        <Tooltip label="Previous (← / Shift+Space)">
          <button className="btn" onClick={onPrev} aria-label="Previous slide">← Prev</button>
        </Tooltip>
      </div>

      <div style={{ textAlign: 'center' }} aria-live="polite">
        <strong>{index + 1}</strong> / {total}
      </div>

      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
        <Tooltip label="Next (→ / Space)">
          <button className="btn" onClick={onNext} aria-label="Next slide">Next →</button>
        </Tooltip>
        <Tooltip label="Last (End)">
          <button className="btn btn-ghost" onClick={onLast} aria-label="Last slide">⏭</button>
        </Tooltip>
      </div>
    </div>
  );
}
