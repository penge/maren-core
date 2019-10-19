/* global test,expect */
const { render } = require('../../');

const markdownString = `---
title: 'Derek'
---
# Derek Worthen
`;

const output = render(markdownString, {
  template: data => data
});

test('output', () => {
  expect(output).toEqual({
    meta: {
      title: 'Derek',
      toc: undefined,
    },
    html: `<h1 id="derek-worthen">Derek Worthen</h1>
`,
    options: undefined
  });
});
