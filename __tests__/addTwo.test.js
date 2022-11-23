const fs = require('fs');
const path = require('path');
const addTwo = require('./addTwo.js'); 

describe('Want to increase value of input by 2', () => {
  it('adds 2 with the input', () => {
    expect(addTwo(4)).toBe(6);
  })
})