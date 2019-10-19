const parse = require('./parse');

/**
 * Render markdownString to html by using a theme.
 *
 * @param {string} markdownString - Markdown to render to html
 * @param {object} theme - Theme used to render Markdown
 * @param {object} theme.options
 * @param {array} theme.options.styles - Paths to css files
 * @param {array} theme.options.scripts - Paths to js files
 * @param {function} theme.beforeRender - Modify "data" to render
 * @param {function} theme.template - Template used to render html
 *
 * @return {string} Usually html, depends on template
 */
function render(markdownString, theme) {
  const {
    options, // { scripts: [], styles: [] }
    beforeRender, // (data) => /* manipulate data and return new data */
    template // (data) => /* render data and return html */
  } = theme;

  const parsed = parse(markdownString);

  let data = {
    ...parsed, // meta, html
    options
  };

  if (beforeRender) {
    data = beforeRender(data);
  }

  const html = template(data);
  return html;
}

module.exports = render;
