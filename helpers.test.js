const { findMean, findMedian, findMode } = require('./helpers')

describe('findMean', function () {
   test('find mean of an empty array', function () {
      expect(findMean([])).toEqual(0)
   })
   test('find mean of an array of numbers', function () {
      expect(findMean([1, -2, 4])).toEqual(1)
   })
})

describe('findMedian', function () {
   test('find median of an even set', function () {
      expect(findMedian([1, -2, 3, 4])).toEqual(2)
   })
   test('find median of an odd set', function () {
      expect(findMedian([1, -2, 3])).toEqual(1)
   })
})

describe("#findMode", function () {
   it("finds the mode", function () {
      expect(findMode([1, 1, 1, 2, 2, 3])).toEqual(1)
   })
})
