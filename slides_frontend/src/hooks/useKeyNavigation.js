import { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * useKeyNavigation
 * Handles slide navigation keys: ArrowLeft/Right, Home, End, Space.
 * Also toggles help modal with '?' and closes with Escape.
 */
export function useKeyNavigation({ onPrev, onNext, onFirst, onLast, onToggleHelp, onCloseHelp }) {
  /** This is a public function. */
  useEffect(() => {
    function handler(e) {
      const tag = (e.target?.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || e.isComposing) return;

      if (e.key === 'ArrowRight' || (e.code === 'Space' && !e.shiftKey)) {
        e.preventDefault();
        onNext && onNext();
      } else if (e.key === 'ArrowLeft' || (e.code === 'Space' && e.shiftKey)) {
        e.preventDefault();
        onPrev && onPrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        onFirst && onFirst();
      } else if (e.key === 'End') {
        e.preventDefault();
        onLast && onLast();
      } else if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        onToggleHelp && onToggleHelp();
      } else if (e.key === 'Escape') {
        onCloseHelp && onCloseHelp();
      }
    }

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onPrev, onNext, onFirst, onLast, onToggleHelp, onCloseHelp]);
}
