 import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // REQUIRED for Vercel + Node 24
  base: '/',

  build: {
    target: 'es2020',
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true
  },

  server: {
    port: 5173
  },

  preview: {
    port: 4173
  },

  define: {
    // Fixes "process is not defined" + Node 24 issues
    'process.env': {}
  }
});

