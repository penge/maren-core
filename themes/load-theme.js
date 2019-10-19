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
  } catch (e) {
    return undefined; // template.js is required
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
