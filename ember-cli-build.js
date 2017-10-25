/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const nodeSass = require('node-sass'); // loads the version in your package.json

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        // 'node_modules/kpcc.style/'
      ],
      extension: 'sass',
      nodeSass: nodeSass // Workaround for ember-cli-sass bug https://github.com/aexmachina/ember-cli-sass/issues/117
    },
    fingerprint: {
      exclude: [
        'images/layers-2x.png',
        'images/layers.png',
        'images/marker-icon-2x.png',
        'images/marker-icon.png',
        'images/marker-shadow.png'
      ]
    },
    nodeModulesToVendor: [
      // 'node_modules/leaflet-timedimension/dist',
      // 'node_modules/iso8601-js-period/',
      // 'node_modules/leaflet-canvas-geojson/dist'
      'node_modules/phantomjs-polyfills/polyfills'
    ]
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  // app.import('vendor/iso8601.js');
  // app.import('vendor/leaflet.timedimension.src.js');
  // app.import('vendor/leaflet.timedimension.control.css');
  // app.import('vendor/leaflet-canvas-geojson.js');
  app.import('vendor/element-remove-polyfill.js');
  app.import('vendor/function-bind-polyfill.js');


  return app.toTree();
};
