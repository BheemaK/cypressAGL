const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html reports
  e2e: {
    defaultCommandTimeout: 20000,
    setupNodeEvents(on, config) {   
      this.screenshotOnRunFailure=true;   
      require('cypress-mochawesome-reporter/plugin')(on);

     //for html reports
      // implement node event listeners here
    },
  },
});


//module.exports = defineConfig({
  //reporter: 'cypress-mochawesome-reporter',
  //component: {
   // devServer: {
    //  framework: "react",
     // bundler: "webpack",
   // },
  //},

  //e2e: {
    //setupNodeEvents(on, config) {
      //require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    //},
 // },
//});
//module.exports = defineConfig({
 // reporter: 'cypress-mochawesome-reporter',
 // e2e: {
 // setupNodeEvents(on, config) {
  //require('cypress-mochawesome-reporter/plugin')(on);
  //},
 // },
  //});