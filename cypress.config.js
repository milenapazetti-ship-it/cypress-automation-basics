const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    setupNodeEvents(on, config) {
    },
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
  },
});