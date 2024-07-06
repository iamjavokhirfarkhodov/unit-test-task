import {expect} from 'chai'

import {NumbersValidator} from '../../app/NumbersValidator.js';

import {describe, it, beforeEach, afterEach} from 'mocha';

describe('Validate numbers', () => {
    let validator;
    beforeEach(() => {
        validator = new NumbersValidator();
    })
    afterEach(() => {
        validator = null;
    })
    it('Should return true if number is even', () => {
        expect(validator.isNumberEven(4)).to.be.true;
    })
    it('Should throw an error if string provided', () => {
        expect(() => validator.isNumberEven('string')).to.throw(Error, '[string] is not of type "Number" it is of type "string"');
    })

    it('Should array with even numbers', () => {
        let arr = [1, 2, 3, 4, 5, 6];
        let res = [2, 4, 6];
        expect(validator.getEvenNumbersFromArray(arr)).to.deep.equal(res);
    })
    it('Should throw an error if type is not array of numbers', () => {
        expect(() => validator.getEvenNumbersFromArray(['string'])).to.throw(Error, '[string] is not an array of "Numbers"');
    })
    it('Should be an array with all numbers', () => {
        expect(validator.isAllNumbers([1, 2, 3, 4, 5, 6])).to.be.true;
    })
    it('Should throw an error if not array', () => {
        expect(() => validator.isAllNumbers(123)).to.throw(Error, '[123] is not an array');
    })
    it('Should be a number', () => {
        expect(validator.isInteger(5)).to.be.true;
    })
    it('Should throw error if not a number', () => {
        expect(() => validator.isInteger('num')).to.throw(Error, '[num] is not a number');
    })
})