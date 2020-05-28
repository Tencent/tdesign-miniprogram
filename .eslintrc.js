module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // 启用默认核心规则
  extends: ['@tencent/eslint-config-tencent'],
  plugins: ['@typescript-eslint', 'prettier'],
  // add your custom rules here
  rules: {
    // 非开发模式禁用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // 允许调用指定的首字母大写的函数时没有 new 操作符
    'new-cap': ['error', { capIsNewExceptions: ['App', 'Page', 'Component'] }],
  },
  // 配置小程序内全局函数，避免报错
  globals: {
    require: true,
    Page: true,
    wx: true,
    App: true,
    getApp: true,
    getCurrentPages: true,
    Component: true,
    getRegExp: true,
  },
};
