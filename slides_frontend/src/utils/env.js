const defaultEnv = {
  REACT_APP_API_BASE: '',
  REACT_APP_BACKEND_URL: '',
  REACT_APP_FRONTEND_URL: '',
  REACT_APP_WS_URL: '',
  REACT_APP_NODE_ENV: process?.env?.NODE_ENV || 'development',
  REACT_APP_NEXT_TELEMETRY_DISABLED: '1',
  REACT_APP_ENABLE_SOURCE_MAPS: 'true',
  REACT_APP_PORT: '3000',
  REACT_APP_TRUST_PROXY: 'false',
  REACT_APP_LOG_LEVEL: 'info',
  REACT_APP_HEALTHCHECK_PATH: '/healthz',
  REACT_APP_FEATURE_FLAGS: '{}',
  REACT_APP_EXPERIMENTS_ENABLED: 'false',
};

/**
 * PUBLIC_INTERFACE
 * getEnv
 * Returns a sanitized map of REACT_APP_* variables with sensible defaults.
 */
export function getEnv() {
  /** This is a public function. */
  const keys = Object.keys(defaultEnv);
  const out = {};
  for (const k of keys) {
    const v = process?.env?.[k];
    out[k] = (v === undefined || v === null) ? defaultEnv[k] : String(v);
  }
  // parsed helpers
  try {
    out.__FEATURE_FLAGS = JSON.parse(out.REACT_APP_FEATURE_FLAGS || '{}');
  } catch {
    out.__FEATURE_FLAGS = {};
  }
  out.__isDev = (out.REACT_APP_NODE_ENV || '').toLowerCase() !== 'production';
  return out;
}

/**
 * PUBLIC_INTERFACE
 * useEnv
 * React-friendly read of env that memoizes the result.
 */
export function useEnv() {
  /** This is a public function. */
  return getEnv();
}
