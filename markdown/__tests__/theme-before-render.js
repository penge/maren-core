/* global test,expect */
const { render } = require('../../');

const markdownString = `# Maren

Maren is a theme based markdown renderer.

Visit [Maren](https://maren.io).
`;

const output = render(markdownString, {
  template: data => data,

  // can modify data in any way, don't forget to return new data
  beforeRender: data => {
    const { meta, html, options } = data;
    const length = html.length;
    return {
      meta,
      html,
      options,
      length
    };
  }
});

test('output', () => {
  expect(output).toEqual({
    meta: {
      title: 'Maren',
      toc: undefined,
    },
    html: `<h1 id="maren">Maren</h1>
<p>Maren is a theme based markdown renderer.</p>
<p>Visit <a href="https://maren.io">Maren</a>.</p>
`,
    options: undefined,
    length: 126
  });
});
