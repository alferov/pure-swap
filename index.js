'use strict';

var isUndefined = function (obj) {
  return typeof obj === 'undefined' || obj === null;
};

var isInteger = function (obj) {
  return obj % 1 === 0;
};

/**
 * pureSwap
 * A pure function to swap the position of two elements in the array
 *
 * @name pureSwap
 * @function
 *
 * @param {Array} array An array of data
 * @param {Number} indexToSwap An index of array element to swap
 * @param {Number} indexToBeSwapped An index of array element to be swapped
 *
 * @return {Array} Result of transformation
 */

module.exports = function pureSwap (array, indexToSwap, indexToBeSwapped) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an object but got an invalid argument');
  }

  if (isUndefined(indexToSwap) || isUndefined(indexToBeSwapped)) {
    return array;
  }

  if (!isInteger(indexToSwap) || !isInteger(indexToBeSwapped)) {
    throw new TypeError('Expected a number but got an invalid argument');
  }

  var max = Math.max(indexToSwap, indexToBeSwapped);
  var min = Math.min(indexToSwap, indexToBeSwapped);

  return Array.prototype.concat.call(
    array.slice(null, min),
    array[max],
    array.slice(min + 1, max),
    array[min],
    array.length > max ? array.slice(max + 1) : []
  );
};
