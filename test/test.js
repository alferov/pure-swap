'use strict';
var chai = require('chai');
var expect = chai.expect;
var pureSwap = require('../index.js');
var initial = [1,2,3,4];
var expected = [1,4,3,2];
var indexToSwap = 1;
var indexToBeSwapped = 3;
var result;

describe('pure-swap', function() {
  describe('with valid arguments', function() {

    beforeEach(function() {
      result = pureSwap(initial, indexToSwap, indexToBeSwapped);
    });

    it('does not modify passed object', function() {
      expect(initial).to.be.deep.equal(initial);
    });

    it('returns an expected value', function() {
      expect(result).to.be.deep.equal(expected);
      expect(result).to.be.an('array');
    });
  });

  describe('with invalid arguments', function() {
    it('returns the same array if there are no other arguments', function() {
      expect(pureSwap([])).to.be.deep.equal([]);
      expect(pureSwap([], null, null)).to.be.deep.equal([]);
    });

    it('throws an error if wrong arguments passed', function() {
      expect(pureSwap.bind(null, 'string'))
        .to.throw(/invalid argument/);
      expect(pureSwap.bind(null, [], 'hello', 'world'))
        .to.throw(/invalid argument/);
    });
  });

});
