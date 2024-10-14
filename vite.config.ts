/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import environment from 'vite-plugin-environment';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
        'process.env': JSON.stringify({
          DEV_MAIL: process.env.DEV_MAIL,
        })
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:4943',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    react(),
    environment('all', { prefix: 'CANISTER_' }),
    environment('all', { prefix: 'DFX_' }),
    environment('all', { prefix: 'DEV_' }),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'public/*'),
          dest: '.'
        },
      ]
    }),
  ],
});
