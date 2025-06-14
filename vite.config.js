import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import lqip from 'vite-plugin-lqip';

export default defineConfig({
  plugins: [
    react(),
    lqip({
      include: [
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.png',
        '**/*.webp',
        '**/*.gif',
        '**/*.avif',
        '**/*.svg'
      ],
    }),
  ],
});
