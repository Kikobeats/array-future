'use strict';

module.exports = {

  contains: function(elem) {
    if (!elem) return false;
    return this.indexOf(elem) !== -1;
  },

  first: function() {
    return this[0];
  },

  last: function() {
    return this[this.length - 1];
  },

  average: function() {
    return this.sum() / this.length;
  },

  sum: function() {
    return this.reduce(function(prev, current) {
      return prev += current;
    }, 0);
  },

  unique: function() {
    return this.reverse().filter(function(elem, index, arr) {
      return arr.indexOf(elem, index + 1) === -1;
    }).reverse();
  },

  compact: function() {
    return this.filter(function(elem) {
      return (elem != null);
    });
  },

  replace: function(oldElem, newElem) {
    return this.map(function(elem) {
      if (elem === oldElem) return newElem;
      return oldElem;
    });
  },

  remove: function(elem) {
    if (!elem) return this;
    var index = this.indexOf(elem);
    if (index == -1) return this;
    this.splice(index, 1);
    return this;
  },

  clear: function() {
    this.length = 0;
    return this;
  },

  shuffle: function() {
    var currentIndex = this.length;
    var temporaryValue;
    var randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      --currentIndex;
      temporaryValue = this[currentIndex];
      this[currentIndex] = this[randomIndex];
      this[randomIndex] = temporaryValue;
    }

    return this;
  },

  combination: function(size) {
    var mask;
    var index;
    var result;
    var results = [];
    var total = Math.pow(2, this.length);

    for (mask = 0; mask < total; mask++) {
      result = [];
      index = this.length - 1;
      do
        if ((mask & (1 << index)) !== 0) result.push(this[index]);
      while
        (index--);
      if (result.length >= size) results.push(result.reverse());
    }

    return results;
  },

  intersect: function(arr) {
    return this.filter(function(elem) {
      return arr.contains(elem);
    });
  },

  difference: function(arr) {
    return this.filter(function(elem) {
      return !arr.contains(elem);
    });
  }
};
