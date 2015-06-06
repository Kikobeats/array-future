'use strict'
require('..')
should = require 'should'

describe 'Array Future ::', ->

  it 'average', ->
    [1, 2, 3].average().should.be.equal(2)

  it 'clear',  ->
    arr = [0, 1, 2, 3]
    arr.clear()
    arr.length.should.be.equal(0)

  it 'clone',  ->
    arr = [0, 1, 2, 3]
    arr2 = arr.clone()
    arr.toString().should.be.equal(arr2.toString())
    arr.push(4)
    arr.toString().should.not.be.equal(arr2.toString())

  it 'combination', ->
    solution = [[1, 2], [1, 3], [2, 3], [1, 2, 3]].toString()
    arr = [1, 2, 3].combination(2)
    arr.length.should.be.equal(4)
    arr.toString().should.be.equal(solution)

  it 'compact', ->
    ['','1','2',3,'4',undefined,'5'].compact().length.should.be.equal(6)

  it 'difference', ->
    [1, 2, 3].difference([2, 0, 5, 1]).toString().should.be.equal([3].toString())

  it 'empty', ->
    [].empty().should.be.equal true

  it 'first',  ->
    ['1', '2', '3'].first().should.be.equal('1')

  describe 'includes', ->
    it 'should identify that an element is in the array', ->
      ['1', '2', '3'].includes('1').should.be.equal(true)
    it 'should identify that an element isn\'t in the array', ->
      ['package.json'].includes('bower.json').should.be.equal(false)
    it 'should correctly identify NaN', ->
      [1, 2, NaN].includes(NaN).should.be.equal(true)
    it 'should treat -0 and +0 as equal', ->
      [1, 2, -0].includes(+0).should.be.equal(true)
    it 'should not identify elements that are indexed below fromIndex', ->
      [1, 2, 3].includes(1, 1).should.be.equal(false)

  it 'intersect', ->
    [1, 2, 3].intersect([2, 0, 5, 1]).toString().should.be.equal([1, 2].toString())

  it 'last', ->
    ['1', '2', '3'].last().should.be.equal('3')

  it 'replace', ->
    arr = [1, 2, 2, 3].replace(2, 4)
    arr[1].should.be.equal(4)
    arr[2].should.be.equal(4)

  it 'remove', ->
    [1, 2, 3].remove(2).toString().should.be.equal([1, 3].toString())

  it 'shuffle', ->
    [1, 2, 3].shuffle().length.should.be.equal(3);

  it 'sum', ->
    [1, 2, 3].sum().should.be.equal(6)

  it 'unique',  ->
    arr = ['0', '1', '0'].unique()
    arr[0].should.be.equal('0')
    arr[1].should.be.equal('1')
    arr.length.should.be.equal(2)

  it 'zip', ->
    firstArray = [1, 2, 3]
    notArray = 2
    secondArray = [1, 2, 3, 4]
    zippedArray = firstArray.zip notArray, secondArray
    zippedArray.length.should.be.equal(4)
    for item, index in zippedArray
      item.length.should.be.equal(2)
      should(item[0]).be.equal firstArray[index]
      should(item[1]).be.equal secondArray[index]
