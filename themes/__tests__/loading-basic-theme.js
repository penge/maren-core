/* global test,expect */
const path = require('path');
const { loadTheme } = require('../../');

test('loadTheme', () => {
  const themeLocation = path.join(__dirname, '..', 'basic');
  const theme = loadTheme(themeLocation);

  // 4 = name, location, template, options
  expect(Object.keys(theme).length).toBe(4);

  expect(theme.name).toBe('basic');
  expect(theme.location).toMatch(/maren-core\/themes\/basic$/);
  expect(typeof theme.template).toBe("function");

  // basic theme doesn't have options.json
  expect(theme.options).toEqual({});
});
