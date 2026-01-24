import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/mandastrong-studio-2025/', // This tells GitHub exactly where the app is
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
