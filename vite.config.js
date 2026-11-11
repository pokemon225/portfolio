import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
    svgr({ exportAsDefault: true }),
  ],
  define: {
    // Changes every build; appended to locale URLs so browsers never pair new
    // code with a cached translation.json (see src/i18n.js)
    __BUILD_ID__: JSON.stringify(Date.now().toString(36)),
  },
});
