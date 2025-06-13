import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default defineConfig(() =>
  mergeConfig(
    viteConfig,
    defineConfig({
      test: {
        globals: true,
        environment: 'jsdom',
        server: {
          deps: {
            inline: ['react-strict-dom']
          }
        }
      }
    })
  )
);
