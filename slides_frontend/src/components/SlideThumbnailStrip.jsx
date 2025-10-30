import React from 'react';

/**
 * PUBLIC_INTERFACE
 * SlideThumbnailStrip
 * Horizontal thumbnails of slides – hidden on small screens via CSS.
 */
export default function SlideThumbnailStrip({ slides, current, onSelect }) {
  /** This is a public function. */
  return (
    <div className="surface" role="navigation" aria-label="Slide thumbnails">
      <div className="thumbnail-strip hidden-sm">
        {slides.map((s, i) => (
          <button
            key={s.id || i}
            className={`thumbnail ${i === current ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}: ${s.title}`}
            onClick={() => onSelect(i)}
            title={s.title}
          >
            <div style={{ padding: 8, fontSize: 11, textAlign: 'left' }}>
              <div style={{ fontWeight: 700, marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.title}</div>
              {Array.isArray(s.bullets) && s.bullets[0] && <div className="muted" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.bullets[0]}</div>}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
