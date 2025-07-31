const fs = require('node:fs');
const path = require('node:path');

const md = require('markdown-it')();

// 预编译正则表达式
const VALUE_TO_MUSTACHE_REGEX = /\*\*(value.*?)\*\*/g;

// 缓存模板内容
let cachedVueTemplate = null;

/**
 * 获取 Vue SFC 模板
 * @returns {*}
 */
const getVueTemplate = () => {
  if (!cachedVueTemplate) {
    const sfcTplPath = path.resolve(__dirname, './sfc.tpl');
    cachedVueTemplate = fs.readFileSync(sfcTplPath, 'utf8');
  }
  return cachedVueTemplate;
};

/**
 * 转换 value.xxx 为 {{ value || '--' }} 形式
 * @param mdHtml
 * @returns {*}
 */
const transformValueToMustache = (mdHtml) => {
  return mdHtml.replace(VALUE_TO_MUSTACHE_REGEX, (match, p1) => {
    return `{{${p1}}}`;
  });
};

/**
 * 编译 Markdown 为 Vue SFC
 * @param mdHtml
 * @returns {*}
 */
const compileToVueSFC = (mdHtml) => {
  try {
    // 将 Markdown 中粗体的 value.xxx 换成 {{ value || '--' }} 形式
    const mdContent = transformValueToMustache(mdHtml);
    // 处理 Markdown 内容转换成 HTML
    const html = md.render(mdContent);
    const template = getVueTemplate();
    // 将 html 包装成 Vue SFC
    return template.replace('__markdown_html__', html);
  } catch (error) {
    console.error('Failed to compile markdown to Vue SFC:', error);
    throw error;
  }
};

module.exports = function (rawMdContent) {
  // md 编译为 Vue SFC
  return compileToVueSFC(rawMdContent);
};
