'use strict'

const server = require('../local_modules/server.js');

test('Testing: should return something', () => {
  expect(server()).toBeUndefined();
});

test('Testing: should have a appId as argument', () => {
  expect(server()).toBeUndefined();
});

test('Testing: should have a jsKey as argument', () => {
  expect(server('test')).toBeUndefined();
});

test('Testing: should have a serverURL as argument', () => {
  expect(server('id', 'key')).toBeUndefined();
});

test('Testing: the arguments should be of type String', () => {
  expect(server('id', 1, 'url')).toBeUndefined();
});

test('Testing: should return a object', () => {
  expect(server('id', 'key', 'URL')).toBeDefined();
});
