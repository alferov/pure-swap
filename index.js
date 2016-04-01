'use strict';

var isUndefined = function (obj) {
  return typeof obj === 'undefined';
};

/**
 * pureSwap
 * Pure function to swap the position of two elements in the array
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

  if (isUndefined(indexToSwap) || isUndefined(indexToBeSwapped)) {
    return array;
  }

  if (indexToBeSwapped < indexToSwap) {
    var tmp = indexToBeSwapped;
    indexToBeSwapped = indexToSwap;
    indexToSwap = tmp;
  }

  return Array.prototype.concat.call(
    array.slice(null, indexToSwap),
    array[indexToBeSwapped],
    array.slice(indexToSwap + 1, indexToBeSwapped),
    array[indexToSwap],
    array.slice(indexToBeSwapped + 1)
  );
};
