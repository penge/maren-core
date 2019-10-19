/* global test,expect */
const { render } = require('../../');

const markdownString = `# Maren

Maren is a theme based markdown renderer.

Visit [Maren](https://maren.io).
`;

const output = render(markdownString, {
  template: data => data,
  options: {
    styles: ["styles-a8945f9ff83852c0da4d9b56dc0b50fd.css"],
    scripts: ["scripts-a73c5dd921d5f33f040f5f51890f04af.js"]
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
    options: {
      styles: ["styles-a8945f9ff83852c0da4d9b56dc0b50fd.css"],
      scripts: ["scripts-a73c5dd921d5f33f040f5f51890f04af.js"]
    }
  });
});
