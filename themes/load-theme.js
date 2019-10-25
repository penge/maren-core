const path = require('path');
const fs = require('fs');

/**
 * Load theme from themeLocation.
 * Required file: themeLocation/template.js
 * Optional file: themeLocation/options.json
 *
 * @param {string} themeLocation - Absolute path to theme folder
 *
 * @return {object} Theme object { name, location, template, options }
 * @return {undefined} If theme not found
 */
function loadTheme(themeLocation) {
  let name;
  let location = themeLocation;
  let template;
  let options = {};

  // Load template.js
  try {
    name = themeLocation.split(path.sep).pop();
    template = require(path.join(themeLocation, 'template.js'));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return undefined; // template.js is required
    }
    throw err; // template.js exists but is invalid
  }

  // Load options.json
  try {
    const raw = fs.readFileSync(path.join(themeLocation, 'options.json'));
    options = JSON.parse(raw);
  } catch (e) {
    // options.json is not necessary
  }

  const theme = {
    name,
    location,
    template,
    options
  };

  return theme;
}

module.exports = loadTheme;
