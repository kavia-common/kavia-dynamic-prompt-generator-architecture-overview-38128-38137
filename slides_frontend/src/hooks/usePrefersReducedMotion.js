import { useEffect, useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * usePrefersReducedMotion
 * Returns boolean if user prefers reduced motion.
 */
export function usePrefersReducedMotion() {
  /** This is a public function. */
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const run = () => setReduced(!!mq.matches);
    run();
    mq.addEventListener?.('change', run);
    return () => mq.removeEventListener?.('change', run);
  }, []);
  return reduced;
}
