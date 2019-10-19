/* global test,expect */
const path = require('path');
const { loadTheme } = require('../../');

test('loadTheme', () => {
  const themeLocation = path.join(__dirname, '..', 'dummy');
  const theme = loadTheme(themeLocation);

  // 4 = name, location, template, options
  expect(Object.keys(theme).length).toBe(4);

  expect(theme.name).toBe('dummy');
  expect(theme.location).toMatch(/maren-core\/themes\/dummy$/);
  expect(typeof theme.template).toBe("function");
  expect(theme.options).toEqual({
    styles: ["styles-a8945f9ff83852c0da4d9b56dc0b50fd.css"],
    scripts: ["scripts-a73c5dd921d5f33f040f5f51890f04af.js"]
  });
});
