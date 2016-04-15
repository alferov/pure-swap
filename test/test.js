'use strict';
var chai = require('chai');
var expect = chai.expect;
var pureSwap = require('../index.js');
var initial = [1,2,3,4];
var expected = [1,4,3,2];
var indexToSwap = 1;
var indexToBeSwapped = 3;

describe('pure-swap', function() {
  describe('with valid arguments', function() {
    it('does not modify arguments', function() {
      pureSwap(initial, indexToSwap, indexToBeSwapped);
      expect(initial).to.be.deep.equal(initial);
    });

    it('works as expected', function() {
      var result = pureSwap(initial, indexToSwap, indexToBeSwapped);
      expect(result).to.be.deep.equal(expected);
      expect(result).to.be.an('array');
    });

    it('works as expected if indexToBeSwapped > indexToSwap', function() {
      var result = pureSwap(initial, indexToBeSwapped, indexToSwap);
      expect(result).to.be.deep.equal(expected);
    });
  });

  describe('with invalid arguments', function() {
    it('returns the same array if there are no arguments', function() {
      expect(pureSwap([])).to.be.deep.equal([]);
      expect(pureSwap([], null, null)).to.be.deep.equal([]);
    });

    it('throws an error if wrong arguments passed', function() {
      expect(pureSwap.bind(null, 'string'))
        .to.throw(/invalid argument/);
      expect(pureSwap.bind(null, [], 'hello', 'world'))
        .to.throw(/invalid argument/);
      expect(pureSwap.bind(null, [], -1, -2))
        .to.throw(/invalid argument/);
    });
  });
});
