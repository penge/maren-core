/* global test,expect */

/*
  If Markdown contains "toc: true" in its YFM,
  theme should render toc as an html list.
*/

const { render, basicTheme } = require('../../../');
const basicThemeStyles = require('../styles.js');

const markdownString = `---
toc: true
---
# My article

## A

## B

## C
`;

const output = render(markdownString, basicTheme);

const expectedToc = ''
+ '<ul id="toc">'
  + '<li><a href="#a">A</a></li>'
  + '<li><a href="#b">B</a></li>'
  + '<li><a href="#c">C</a></li>'
+ '</ul>';

const expectedHtml = `<h1 id="my-article">My article</h1>
<h2 id="a">A</h2>
<h2 id="b">B</h2>
<h2 id="c">C</h2>
`;

test('output', () => {
  expect(output).toBe(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My article</title>
    <link href="data:," rel="icon">
    <style>${basicThemeStyles}</style>
  </head>
  <body class="toc">
    <div id="sidebar">${expectedToc}</div>
    <div id="main">${expectedHtml}</div>
  </body>
</html>
`);
});
