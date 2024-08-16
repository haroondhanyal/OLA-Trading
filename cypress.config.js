const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');



module.exports = defineConfig({
  projectId: 'sjnqhg',
  viewportWidth: 1280,
  viewportHeight: 880,

  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed
      return config; // Return the updated config object
    },
    specPattern: '**/*.cy.js',
    // baseUrl: 'https://ola.atlascleartrading.com/',
  },

  fixturesFolder: 'cypress/e2e/fixtures',
  video: true,
  videosFolder: 'cypress/e2e/videos',
  screenshotsFolder: 'cypress/e2e/screenshots',
  // pageLoadTimeout: 120000,
  screenshots: true,
  screenshotOnRunFailure: true,

  // reporter: 'mocha-allure-reporter',
  //   reporterOptions: {
  //     targetDir: 'allure-results'
  //   },
 

  
});