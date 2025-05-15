import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'public', // Set root to the public directory where index.html lives
  build: {
    outDir: '../dist', // Output relative to the root (public), so dist is in the project root
  },
});
