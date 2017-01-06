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
