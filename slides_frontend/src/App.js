import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import './index.css';
import SlideViewer from './components/SlideViewer';
import SlideNavigator from './components/SlideNavigator';
import SlideDeckHeader from './components/SlideDeckHeader';
import ProgressBar from './components/ProgressBar';
import KeyboardShortcutsHelp from './components/KeyboardShortcutsHelp';
import SlideThumbnailStrip from './components/SlideThumbnailStrip';
import { slides as seedSlides } from './data/slides';
import { useKeyNavigation } from './hooks/useKeyNavigation';
import { initTheme } from './theme';
import { getEnv } from './utils/env';

// PUBLIC_INTERFACE
function App() {
  /** This is a public function. */
  const [index, setIndex] = useState(0);
  const [helpOpen, setHelpOpen] = useState(false);
  const [envOpen, setEnvOpen] = useState(false);

  useEffect(() => {
    initTheme();
  }, []);

  const slides = useMemo(() => seedSlides, []);
  const total = slides.length;

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(total - 1, i + 1));
  const goFirst = () => setIndex(0);
  const goLast = () => setIndex(total - 1);
  const goTo = (i) => setIndex(Math.max(0, Math.min(total - 1, i)));

  useKeyNavigation({
    onPrev: goPrev,
    onNext: goNext,
    onFirst: goFirst,
    onLast: goLast,
    onToggleHelp: () => setHelpOpen((v) => !v),
    onCloseHelp: () => setHelpOpen(false),
  });

  const progress = (index + 1) / total;
  const env = getEnv();

  return (
    <div className="container-app">
      <SlideDeckHeader
        onToggleHelp={() => setHelpOpen((v) => !v)}
        onToggleEnv={() => setEnvOpen((v) => !v)}
      />

      <main className="main-content" role="main">
        <section className="presentation">
          <div className="viewer-row">
            <div className="slide-stage">
              <SlideViewer slide={slides[index]} index={index} />
            </div>
            <div className="hidden-sm">
              <SlideThumbnailStrip
                slides={slides}
                current={index}
                onSelect={goTo}
              />
            </div>
          </div>

          <div className="controls-row">
            <SlideNavigator
              index={index}
              total={total}
              onPrev={goPrev}
              onNext={goNext}
              onFirst={goFirst}
              onLast={goLast}
            />
          </div>

          <ProgressBar value={progress} />
        </section>
      </main>

      <KeyboardShortcutsHelp open={helpOpen} onClose={() => setHelpOpen(false)} />

      {envOpen && env.__isDev && (
        <div className="env-panel">
          <div className="panel surface">
            <strong>Environment (dev only)</strong>
            <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>
              Values from process.env (REACT_APP_*)
            </div>
            <ul style={{ marginTop: 8, paddingLeft: 18 }}>
              {Object.keys(env)
                .filter((k) => k.startsWith('REACT_APP_'))
                .map((k) => (
                  <li key={k}>
                    <code>{k}</code>: <code>{String(env[k])}</code>
                  </li>
                ))}
            </ul>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
              <button className="btn btn-ghost" onClick={() => setEnvOpen(false)} aria-label="Close environment info">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
