'use strict'

var objectToString = Object.prototype.toString

module.exports = {
  isArray: Array.isArray || function (value) {
    return value && typeof value === 'object' &&
           value.length >= 0 && objectToString.call(value) === '[object Array]'
  }
}
