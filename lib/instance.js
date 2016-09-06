'use strict'

var isArray = require('./util').isArray

module.exports = {

  clear: function () {
    this.length = 0
    return this
  },

  clone: function () {
    return this.slice(0)
  },

  combination: function (size) {
    if (!size) return this
    if (size > this.length) return []

    var mask
    var index
    var result
    var results = []
    var total = Math.pow(2, this.length)

    for (mask = 0; mask < total; mask++) {
      result = []
      index = this.length - 1
      do {
        if ((mask & (1 << index)) !== 0) result.push(this[index])
      } while (index--)

      if (result.length >= size) results.push(result.reverse())
    }

    return results
  },

  compact: function () {
    return this.filter(function (elem) {
      return elem
    })
  },

  difference: function (arr) {
    if (!arr) return this
    return this.filter(function (elem) {
      return !arr.includes(elem)
    })
  },

  empty: function () {
    return this.length === 0
  },

  first: function () {
    return this[0]
  },

  includes: function (searchElement /*, fromIndex */) {
    var O = Object(this)
    var len = parseInt(O.length) || 0
    if (len === 0) return false
    var n = parseInt(arguments[1]) || 0
    var k

    if (n >= 0)
      k = n
    else {
      k = len + n
      if (k < 0) { k = 0 }
    }

    while (k < len) {
      if (searchElement === O[k] ||
         (searchElement !== searchElement && O[k] !== O[k])) return true
      k++
    }
    return false
  },

  intersect: function (arr) {
    if (!arr) return []
    return this.filter(function (elem) {
      return arr.includes(elem)
    })
  },

  last: function () {
    return this[this.length - 1]
  },

  max: function () {
    return Math.max.apply(null, this)
  },

  mean: function () {
    return this.sum() / this.length
  },

  median: function () {
    var self = this.clone(this).sort(function (a, b) {
      return a - b
    })

    return (self[(self.length - 1) >> 1] + self[self.length >> 1]) / 2
  },

  min: function () {
    return Math.min.apply(null, this)
  },

  replace: function (oldElem, newElem) {
    return this.map(function (elem) {
      if (elem === oldElem) return newElem
      return oldElem
    })
  },

  mode: function () {
    var count = []
    var max = 0
    var index = 0

    this.forEach(function (elem) {
      if (count[elem]) count[elem]++
      else count[elem] = 1

      if (index < count[elem]) {
        max = elem
        index = count[elem]
      }
    })

    return max
  },

  range: function() {
    return this.max() - this.min()
  },

  remove: function (elem) {
    if (!elem) return this
    var index = this.indexOf(elem)
    if (index === -1) return this
    this.splice(index, 1)
    return this
  },

  shuffle: function () {
    var currentIndex = this.length
    var temporaryValue
    var randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      --currentIndex
      temporaryValue = this[currentIndex]
      this[currentIndex] = this[randomIndex]
      this[randomIndex] = temporaryValue
    }

    return this
  },

  sum: function () {
    return this.reduce(function (prev, current) {
      return prev += current
    }, 0)
  },

  unique: function () {
    return this.reverse().filter(function (elem, index, arr) {
      return arr.indexOf(elem, index + 1) === -1
    }).reverse()
  },

  zip: function (/* ...args */) {
    var args = Array.prototype.slice.call(arguments)
    var result = []
    var allArrays = [this].concat(args).filter(isArray)
    var allLengths = allArrays.map(function (array) { return array.length })
    var highestLength = Math.max.apply(null, allLengths)
    var arrayPosition = function (index) {
      return allArrays.map(function (array) {
        return array[index]
      })
    }
    for (var i = 0; i < highestLength; ++i) result.push(arrayPosition(i))
    return result
  }
}
