import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aiGallery: resolve(__dirname, 'ai-gallery.html'),
        createGraphics: resolve(__dirname, 'create-graphics.html'),
        aiGallery: resolve(__dirname, 'ai-gallery.html'),
        services: resolve(__dirname, 'services/index.html'),
        aiVideos: resolve(__dirname, 'services/ai-videos.html'),
        socialAutomation: resolve(__dirname, 'services/social-automation.html'),
        aiWebsites: resolve(__dirname, 'services/ai-websites.html'),
        pricing: resolve(__dirname, 'pricing/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        privacy: resolve(__dirname, 'legal/privacy.html'),
        terms: resolve(__dirname, 'legal/terms.html')
      },
    },
  },
});