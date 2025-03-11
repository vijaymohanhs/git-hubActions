const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    // excludeSpecPattern: [
    //   "**/ApiValidations.spec.cy.js",
    //   "**/Verify user can calculate the shipment quote from Malaysia  to India.spec.cy.js"
    // ],
    testIsolation: false,
    baseUrl: 'https://magento.softwaretestingboard.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
 
  viewportHeight: 960,
  viewportWidth: 1536,
  pageLoadTimeout :150000,
  
});
