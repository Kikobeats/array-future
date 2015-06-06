'use strict';

var methods = require('./lib/methods');

module.exports = (function() {
  Object.keys(methods).forEach(function(method) {
    Array.prototype[method] = Array.prototype[method] || methods[method];
  });
})();
