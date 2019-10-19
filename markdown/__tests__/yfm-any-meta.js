/* global test,expect */
const { render } = require('../../');

const markdownString = `---
type: 'profile'
id: 2811
name: 'Derek Worthen'
age: 127
contact: { email: 'email@domain.com', address: 'some location' }
pets: [ 'cat', 'dog', 'bat' ]
---
# Derek Worthen
`;

const output = render(markdownString, {
  template: data => data
});

test('output', () => {
  expect(output).toEqual({
    meta: {
      title: 'Derek Worthen',
      toc: undefined,
      type: 'profile',
      id: 2811,
      name: 'Derek Worthen',
      age: 127,
      contact: {
        email: 'email@domain.com',
        address: 'some location'
      },
      pets: [
        'cat',
        'dog',
        'bat'
      ],
    },
    html: `<h1 id="derek-worthen">Derek Worthen</h1>
`,
    options: undefined
  });
});
