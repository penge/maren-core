# Maren Core

Maren is a theme based markdown renderer.
It renders markdown to html by using a theme.

Theme can be developed by any tools.
It is completely separated from Maren to allow
easy and rich customization.

## Install

```
npm install maren-core
```

## API

```js
const {
  render,
  loadTheme,
  basicTheme
} = require('maren-core');
```

### render

```js
/**
 * Render markdownString to html by using a theme.
 *
 * @param {string} markdownString - Markdown to render to html
 * @param {object} theme - Theme used to render Markdown
 * @param {object} theme.options
 * @param {array} theme.options.styles - Paths to css files
 * @param {array} theme.options.scripts - Paths to js files
 * @param {function} theme.beforeRender - Modify "data" to render
 * @param {function} theme.template - Template used to render html
 *
 * @return {string} Usually html, depends on template
 */
function render(markdownString, theme) { /* */ }
```

### loadTheme

```js
/**
 * Load theme from themeLocation.
 * Required file: themeLocation/template.js
 * Optional file: themeLocation/options.json
 *
 * @param {string} themeLocation - Absolute path to theme folder
 *
 * @return {object} Theme object { name, location, template, options }
 * @return {undefined} If theme not found
 */
function loadTheme(themeLocation) { /* */ }
```

### basicTheme

```js
console.log(basicTheme);
/*
{ name: 'basic',
  location: '.../maren-core/themes/basic',
  template: [Function],
  options: {} }
*/
```

## Theme

```js
const theme = {
  // required
  // should be compiled render function, but can be other
  template: data => data,

  // optional
  // can modify data in any way, don't forget to return new data
  beforeRender: data => {
    console.log(data);
    return data;
  },

  // optional
  // should contain minified and hashed styles and scripts
  options: {
    styles: ["styles-a8945f9ff83852c0da4d9b56dc0b50fd.css"],
    scripts: ["scripts-a73c5dd921d5f33f040f5f51890f04af.js"]
  },

  // if theme is not manually created, but loaded using loadTheme,
  // it will also have "name" and "location" like basicTheme
};
```

## Use

### Dummy theme

```js
const { render } = require('maren-core');

/* your markdown string */
const markdown = '# Article';

/* your theme */
const theme = {
  /* required */
  template: (data) => {
    /* template can render data using
       template library of choice
       (pug, ejs, handlebars, mustache, or other)
       or simply return data as is */
    return data;
  },

  /* not required */
  options: undefined,
  beforeRender: undefined
};

/* output depends on the theme */
const output = render(markdown, theme);

console.log(output);
/*
{ meta: { title: 'Article', toc: undefined },
  html: '<h1 id="article">Article</h1>\n',
  options: undefined }
*/
```

### Basic theme

```js
const { render, basicTheme } = require('maren-core');

/* your markdown string */
const markdown = '# Article';

/* output depends on the theme */
const output = render(markdown, basicTheme);

console.log(output);
/*
<html>...</html>
*/
```

## Tests

```
npm test
```
