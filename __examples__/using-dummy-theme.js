// const { render } = require('maren-core');
const { render } = require('../');

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
