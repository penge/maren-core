const yamlFront = require('yaml-front-matter');
const marked = require('marked');
const markdownToc = require('markdown-toc');

/**
 * Parse markdownString and return:
 * {
 *   meta: {
 *     title, // YFM; can override title; default is # from markdown
 *     toc,   // YFM; if true, return [{ content, slug, lvl }, ...]
 *     ...other, // YFM; any other fiels flow back
 *   },
 *   html // html of parsed markdown
 * }
 */
module.exports = markdownString => {
  const front = yamlFront.loadFront(markdownString);
  let {
    title,
    toc: showtoc,
    __content,
    ...other
  } = front;

  const tocJson = markdownToc(__content).json;

  // Use # as default title (must be first)
  if (!title) {
    const defaultTitle =
      tocJson[0] &&
      tocJson[0].lvl === 1 &&
      tocJson[0].content;
    title = defaultTitle || '';
  }

  // Set toc, but exclude first heading (in markdown as #)
  const toc = showtoc && tocJson.length > 1 && tocJson.splice(1);

  // Parse markdown to html
  const html = marked(__content);

  return {
    meta: {
      title,
      toc,
      ...other
    },
    html
  };
};
