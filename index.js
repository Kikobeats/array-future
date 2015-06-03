'use strict';

var methods = require('./methods');

module.exports = (function() {
  Object.keys(methods).forEach(function(method) {
    Array.prototype[method] = Array.prototype[method] || methods[method];
  });
})();
