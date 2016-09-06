'use strict'

module.exports = {

  range: function (start, stop, step) {
    if (stop == null) {
      stop = start || 0
      start = 0
    }

    step = step || 1
    var length = Math.max(Math.ceil((stop - start) / step), 0)
    var range = Array(length)

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start
    }

    return range
  }
}
