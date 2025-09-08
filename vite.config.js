// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// 1) Convertimos import.meta.url en __filename y __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Apunta siempre a la misma carpeta de styled-components
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components')
    }
  },
  server: {
    allowedHosts: ['.tunnelmole.net']
  }
});
