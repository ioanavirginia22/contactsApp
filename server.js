// server.js

  // set up ========================
  var express  = require('express');
  var app      = express();                               // create our app w/ express

  // configuration =================

  app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users

  // listen (start app with node server.js) ======================================
  app.listen(8888);
  console.log("App listening on port 8888");
