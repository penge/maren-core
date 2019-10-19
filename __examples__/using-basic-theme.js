// const { render, basicTheme } = require('maren-core');
const { render, basicTheme } = require('../');

/* your markdown string */
const markdown = '# Article';

/* output depends on the theme */
const output = render(markdown, basicTheme);

console.log(output);
/*
<html>...</html>
*/
