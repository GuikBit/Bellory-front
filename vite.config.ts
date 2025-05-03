import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
          name: "Barbearia Bigode",
          short_name: "Bigode",
          description: "Descrição do seu PWA",
          start_url: "/",
          display: "standalone",
          // background_color: "#ffffff",
          // theme_color: "#ffffff",
          lang: "pt",
          scope: "/",
          icons: [
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png"
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable"
            }
          ],
          id: "Barbearia do Bigode",
          orientation: 'natural',
          categories: [
            "business",
            "lifestyle"
          ]
      },
    })
  ],
})
