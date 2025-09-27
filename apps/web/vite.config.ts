import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@others/design-tokens': path.resolve(
        __dirname,
        '../../packages/design-tokens/src'
      ),
      '@others/types': path.resolve(__dirname, '../../packages/types/src'),
      '@others/validation': path.resolve(
        __dirname,
        '../../packages/validation/src'
      ),
      '@others/utils': path.resolve(__dirname, '../../packages/utils/src'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
