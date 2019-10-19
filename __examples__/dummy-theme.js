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

console.log(theme);
/*
{ template: [Function: template],
  beforeRender: [Function: beforeRender],
  options:
   { styles: [ 'styles-a8945f9ff83852c0da4d9b56dc0b50fd.css' ],
     scripts: [ 'scripts-a73c5dd921d5f33f040f5f51890f04af.js' ] } }
*/
