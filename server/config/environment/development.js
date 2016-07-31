'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: process.env.MONGOLAB_BLUE_URI || 'mongodb://localhost/me-dev'
   // uri:'mongodb://khursani:1261995s@ds021915.mlab.com:21915/internapp'
  },

  // Seed database on startup
  seedDB: false

};
