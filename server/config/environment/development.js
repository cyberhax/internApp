'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: process.env.MONGOLAB_BLUE_URI || 'mongodb://heroku_ptzb90lr:6vpampgkagjhtd4kdd07et550i@ds031975.mlab.com:31975/heroku_ptzb90lr' || 'mongodb://localhost/me-dev'
   // uri:'mongodb://khursani:1261995s@ds021915.mlab.com:21915/internapp'
  },

  // Seed database on startup
  seedDB: true

};
