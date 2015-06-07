'use strict';

var methods = require('./lib');

module.exports = (function() {
  Object.keys(methods).forEach(function(method) {
    if (!Array.prototype[method]) {
      Object.defineProperty(Array.prototype, method, {
        value: methods[method]
      });
    }
  });
})();
