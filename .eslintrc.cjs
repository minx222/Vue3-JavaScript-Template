/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier'
  ],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-unused-vars': 2, // 变量未使用
    // switch语句强制default分支，也可添加 // no default 注释取消此次警告
    'default-case': 2,
    'no-console': 1, //禁止使用console
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-constant-condition': 2, //禁止在条件中使用常量表达式 if(true) if(1)
    'no-sparse-arrays': 2, //禁止稀疏数组， [1,,2]
    'no-var': 0, //禁用var，用let和const代替
    semi: 0, //语句强制分号结尾
    strict: 2, //使用严格模式
    // 关闭名称校验
    'vue/multi-word-component-names': 'off',
    'no-use-before-define': 'off'
  }
}
