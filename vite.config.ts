import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: { enabled: false },
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
        // Critical: exclude /pdfs/ from SW navigation interception.
        // Without this, the SW intercepts iframe requests for PDFs (treated as
        // 'navigate' requests), serves index.html and the React app renders
        // the Dashboard inside the PDF iframe.
        workbox: {
          navigateFallback: 'index.html',
          navigateFallbackDenylist: [
            /^\/pdfs\//,        // all PDF files
            /\.pdf$/,           // any .pdf by extension
          ],
          runtimeCaching: [
            {
              urlPattern: /\/pdfs\/.+\.pdf$/,
              handler: 'NetworkOnly', // never cache PDFs, always fetch from server
            },
          ],
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'], // don't precache PDFs
        },
        manifest: {
          name: 'NervioZen',
          short_name: 'NervioZen',
          description: 'Ecossistema Digital NervioZen',
          theme_color: '#0F172A',
          background_color: '#0F172A',
          display: 'standalone',
          orientation: 'portrait',
          icons: [
            {
              src: 'icon.svg',
              sizes: '192x192',
              type: 'image/svg+xml'
            },
            {
              src: 'icon.svg',
              sizes: '512x512',
              type: 'image/svg+xml'
            }
          ]
        }
      })
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
