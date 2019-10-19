const path = require('path');

const render = require('./markdown/render');
const loadTheme = require('./themes/load-theme');
const basicTheme = loadTheme(path.join(__dirname, 'themes', 'basic'));

module.exports = {
  render,
  loadTheme,
  basicTheme
};
