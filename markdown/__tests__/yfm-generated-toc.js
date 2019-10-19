/* global test,expect */
const { render } = require('../../');

const markdownString = `---
toc: true
---
# A simple list

## Coffee

## Tea

### Black tea

### Green tea

## Milk
`;

const output = render(markdownString, {
  template: data => data
});

test('output', () => {
  expect(output).toEqual({
    meta: {
      title: 'A simple list',
      toc: [
        {
          content: 'Coffee',
          slug: 'coffee',
          lvl: 2, i: 1, seen: 0
        },
        {
          content: 'Tea',
          slug: 'tea',
          lvl: 2, i: 2, seen: 0
        },
        {
          content: 'Black tea',
          slug: 'black-tea',
          lvl: 3, i: 3, seen: 0
        },
        {
          content: 'Green tea',
          slug: 'green-tea',
          lvl: 3, i: 4, seen: 0
        },
        {
          content: 'Milk',
          slug: 'milk',
          lvl: 2, i: 5, seen: 0
        }
      ],
    },
    html: `<h1 id="a-simple-list">A simple list</h1>
<h2 id="coffee">Coffee</h2>
<h2 id="tea">Tea</h2>
<h3 id="black-tea">Black tea</h3>
<h3 id="green-tea">Green tea</h3>
<h2 id="milk">Milk</h2>
`,
    options: undefined
  });
});
