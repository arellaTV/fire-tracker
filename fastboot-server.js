'use strict';

const FastBootAppServer = require('fastboot-app-server');

let server = new FastBootAppServer({
  distPath: 'dist',
  gzip: true,
  host: '0.0.0.0',
  port: 4000
});

server.start();

