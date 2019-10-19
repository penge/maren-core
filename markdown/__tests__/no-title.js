/* global test,expect */

/*
  If there is no # as a first title in Markdown,
  and also no "title" in YFM,
  "meta.title" should be an empty string.
*/

const { render } = require('../../');

const markdownString = `There is no # as a first title.

## Category

### Subcategory

# Not first
`;

const output = render(markdownString, {
  template: data => data
});

test('output', () => {
  expect(output).toEqual({
    meta: {
      title: '',
      toc: undefined,
    },
    html: `<p>There is no # as a first title.</p>
<h2 id="category">Category</h2>
<h3 id="subcategory">Subcategory</h3>
<h1 id="not-first">Not first</h1>
`,
    options: undefined
  });
});
