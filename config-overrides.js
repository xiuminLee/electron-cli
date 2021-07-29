const { override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy, disableEsLint, adjustStyleLoaders } = require('customize-cra');
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
    /* 配置sass全局变量 */
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes("scss")) {
        rule.use.push({
            loader: require.resolve("sass-resources-loader"),
            options: {
                resources: "./src/common.module.scss" //这里是你自己放公共scss变量的路径
            }
        });
    }
})
);