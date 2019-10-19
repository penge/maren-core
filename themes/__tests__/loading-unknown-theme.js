/* global test,expect */
const path = require('path');
const { loadTheme } = require('../../');

test('loadTheme', () => {
  const themeLocation = path.join(__dirname, '..', 'theme-from-outer-space');
  const theme = loadTheme(themeLocation);

  expect(theme).toBeUndefined();
});
