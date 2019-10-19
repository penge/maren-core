/* global test,expect */
const {
  render,
  loadTheme,
  basicTheme
} = require('../');

test('maren-core', () => {
  expect(typeof render).toBe('function');
  expect(typeof loadTheme).toBe('function');
  expect(typeof basicTheme).toBe('object');
});
