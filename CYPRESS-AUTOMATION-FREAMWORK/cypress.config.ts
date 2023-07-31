import { defineConfig } from "cypress";
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })


export default defineConfig({
  chromeWebSecurity: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  requestTimeout: 20000,
  defaultCommandTimeout: 20000,
  experimentalInteractiveRunEvents: true,
  retries: {
    runMode: 2,
    openMode: 0
  },
  video: true,
  videoUploadOnPasses: false,
  videoCompression: 8,

  env:{...process.env},

  e2e: {
    setupNodeEvents(on, config) {},
  }
});
