// Dependencies
const server = require('./lib/server');
const workers = require('./lib/workers');

//Decloration of app
const app = {};

// Init functions
app.init = function() {
  server.init();
  workers.init();
};

// Execution of functions
app.init();

// Exportation of app
module.exports = app;