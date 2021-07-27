const { override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy, disableEsLint } = require('customize-cra');
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

// fixBabelImports 按需加载antd组件
// addWebpackAlias 路径别名配置
/* 路径别名配置 */
module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint(),
  addWebpackAlias({
    '@': resolve('src'),
  }),
  /* antd组件按需加载 */
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
);