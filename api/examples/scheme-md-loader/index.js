const path = require('path')

const md = require('markdown-it')()
const fs = require('fs')

const sfcTplPath = path.resolve(__dirname, './sfc.tpl')
const vueSFCTemplate = fs.readFileSync(sfcTplPath, 'utf8')

const compileToVueSFC = (mdHtml) => {
  return vueSFCTemplate.replace('__markdown_html__', mdHtml);
}

module.exports = function gengMdLoader (rawMdContent) {
  const mdHtml = md.render(rawMdContent)
  return compileToVueSFC(mdHtml)
};
