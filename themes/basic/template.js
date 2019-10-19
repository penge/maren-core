const tocToHtml = require('toc-to-html');
const styles = require('./styles');

module.exports = data => {
  const { meta, html } = data;
  const { title, toc } = meta;

  const tocHtml = tocToHtml(toc, { id: 'toc' });

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title || ''}</title>
    <link href="data:," rel="icon">
    <style>${styles}</style>
  </head>
  <body${toc ? ' class="toc"' : ''}>
    <div id="sidebar">${tocHtml}</div>
    <div id="main">${html}</div>
  </body>
</html>
`;
};
