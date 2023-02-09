/**
 * 在代码提交前检查
 * lint-staged 校验暂存区的文件
 */
module.exports = {
  'src/**/*.{js,ts,tsx,jsx,vue}': ['yarn lint:eslint', 'prettier --write'],
  'src/**/*.{css,less,scss}': ['prettier --write'],
  'src/**/*.{md,json}': ['prettier --write']
}
