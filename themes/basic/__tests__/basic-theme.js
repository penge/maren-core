/* global test,expect */

/*
  Theme should:
  - render "meta.title" in <title></title>
  - render "html" in <div id="main"></div>
*/

const { render, basicTheme } = require('../../../');
const basicThemeStyles = require('../styles.js');

const markdownString = `# Maren

Maren is a theme based markdown renderer.

Visit [Maren](https://maren.io).
`;

const output = render(markdownString, basicTheme);

test('output', () => {
  expect(output).toBe(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maren</title>
    <link href="data:," rel="icon">
    <style>${basicThemeStyles}</style>
  </head>
  <body>
    <div id="sidebar"></div>
    <div id="main"><h1 id="maren">Maren</h1>
<p>Maren is a theme based markdown renderer.</p>
<p>Visit <a href="https://maren.io">Maren</a>.</p>
</div>
  </body>
</html>
`);
});
