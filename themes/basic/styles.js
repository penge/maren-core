module.exports = `
body {
  padding: 0;
  margin: 0;
  font-size: 120%;
}

body.toc #sidebar {
  background: #daeeff;
  position: fixed;
  width: 20%;
  height: 100%;
  overflow: scroll;
}

body.toc #main {
  float: right;
  width: calc(80% - 40px);
}

#main {
  padding: 20px;
  overflow-x: hidden;
}

a, a:visited {
  color: blue;
}

ul#toc {
  padding: 20px;
  margin: 0;
}

ul#toc ul {
  padding-left: 15px;
}

ul#toc, ul#toc ul {
  list-style-type: none;
}

p > code {
  background:gold;
}

pre {
  overflow-x:scroll;
}

pre code {
  background:aquamarine;
}
`;
