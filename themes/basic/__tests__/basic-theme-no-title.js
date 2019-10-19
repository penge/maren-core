/* global test,expect */

/*
  If there is no # in Markdown or "title" in its YFM,
  <title></title> should be empty.
*/

const { render, basicTheme } = require('../../../');
const basicThemeStyles = require('../styles.js');

const markdownString = 'Hello, this is a test.';

const output = render(markdownString, basicTheme);

test('output', () => {
  expect(output).toBe(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link href="data:," rel="icon">
    <style>${basicThemeStyles}</style>
  </head>
  <body>
    <div id="sidebar"></div>
    <div id="main"><p>Hello, this is a test.</p>
</div>
  </body>
</html>
`);
});
