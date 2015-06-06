'use strict';

var methods = require('./lib/methods');

module.exports = (function() {
  Object.keys(methods).forEach(function(method) {
    Object.defineProperty(Array.prototype, method, {
      enumerable: false,
      get: methods[method]
    });
  });
})();
