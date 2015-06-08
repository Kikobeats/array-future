'use strict';

var staticMethods = require('./lib/static');
var instanceMethods = require('./lib/instance');

module.exports = (function() {

  Object.keys(instanceMethods).forEach(function(method) {
    if (!Array.prototype[method]) {
      Object.defineProperty(Array.prototype, method, {
        value: instanceMethods[method]
      });
    }
  });

  Object.keys(staticMethods).forEach(function(method) {
    if (!Array[method]) {
      Object.defineProperty(Array, method, {
        value: staticMethods[method]
      });
    }
  });

})();
