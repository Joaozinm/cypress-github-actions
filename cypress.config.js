import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://react-app:5173",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      on("before:run", () => {
        return new Promise((resolve) => setTimeout(resolve, 5000));
      });
    },
  },
  video: true,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
});
