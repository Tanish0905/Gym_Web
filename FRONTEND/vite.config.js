import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Polyfill for structuredClone if it's not supported
if (typeof globalThis.structuredClone !== 'function') {
  globalThis.structuredClone = (obj) => JSON.parse(JSON.stringify(obj));
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
