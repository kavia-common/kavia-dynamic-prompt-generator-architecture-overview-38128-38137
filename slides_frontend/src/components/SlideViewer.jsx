import React, { useMemo } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

/**
 * PUBLIC_INTERFACE
 * SlideViewer
 * Renders the current slide in a 16:9 viewport with basic transitions.
 */
export default function SlideViewer({ slide, index }) {
  /** This is a public function. */
  const reduced = usePrefersReducedMotion();

  const content = useMemo(() => {
    if (!slide) return <div className="slide-content" />;
    return (
      <div className="slide-content">
        <div className="slide-title">{slide.title}</div>
        <div className="slide-body">
          {Array.isArray(slide.bullets) && slide.bullets.length > 0 && (
            <ul className="slide-list">
              {slide.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          {slide.callout && <div className="slide-callout">{slide.callout}</div>}
        </div>
      </div>
    );
  }, [slide]);

  return (
    <div
      className={`slide-viewport ${reduced ? '' : 'slide-h'}`}
      aria-label={`Slide ${index + 1}`}
    >
      {content}
    </div>
  );
}
