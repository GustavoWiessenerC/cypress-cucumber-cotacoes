const { defineConfig } = require("cypress");
const { getConfigurationByFile } = require("./cypress/config/config-by-file.js");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  video: true,
  e2e: {
    specPattern: "cypress/e2e/step-definitions/*.feature",
    async setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      const file = config.env.configFile || "app-qa";
      return config, getConfigurationByFile(file);
    },
  },
});


