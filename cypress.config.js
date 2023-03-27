const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'reports/my-test-output-[hash].xml',
      toConsole: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
