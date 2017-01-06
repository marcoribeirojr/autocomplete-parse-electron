'use strict'

const query = require('../local_modules/query.js');

test('Testing: Should return something', () => {
  expect(query()).toBeUndefined();
});

test('Testing: Should have two arguments', () => {
  expect(query('test')).toBeUndefined();
});

test('Testing: The first argument should be a String', () => {
  expect(query(1)).toBeUndefined();
});

test('Testing: The second argument should be a Object', () => {
  expect(query('test', 1)).toBeUndefined();
});

test('Testing: Correct calleds returns instance of object', () => {
  let queryClass = class{
    constructor(){}
  };
  let someObject = {
    Query : queryClass
  }
  expect(query('test', someObject)).toBeInstanceOf(someObject.Query);
});
