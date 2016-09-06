'use strict'

var staticMethods = require('./lib/static')
var instanceMethods = require('./lib/instance')

var pairs = [
  [require('./lib/static'), Array],
  [require('./lib/instance'), Array.prototype]
]

module.exports = (function () {
  pairs.forEach(function (pair) {
    var methods = pair[0]
    var src = pair[1]

    Object.keys(methods).forEach(function (method) {
      if (!src[method]) {
        Object.defineProperty(src, method, {
          value: methods[method]
        })
      }
    })
  })
})()
