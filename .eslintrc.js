const compileTimeConfiguration = require('./script/config.js');

// 配置小程序内全局函数，避免报错
const globals = {
  require: true,
  Page: true,
  wx: true,
  App: true,
  getApp: true,
  getCurrentPages: true,
  Component: true,
  getRegExp: true,
  Behavior: true,
};

// 配置编译时配置，避免报错
Object.keys(compileTimeConfiguration).forEach((key) => {
  globals[key] = true;
});

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
    jest: true,
  },
  // 启用默认核心规则
  extends: ['eslint-config-airbnb-base', 'eslint-config-prettier'],
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  // add your custom rules here
  rules: {
    // 非开发模式禁用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // 允许调用首字母大写的函数时没有 new 操作符
    'new-cap': 'off',
    // 在工具库中允许变量以下划线开头
    'no-underscore-dangle': 'off',
    // 在工具库中允许参数重新赋值
    'no-param-reassign': 'off',
    'number-leading-zero': 'off',
    // 在类属性和方法上关闭需要显式的可访问性修饰符
    '@typescript-eslint/explicit-member-accessibility': 'off',
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'import/no-unresolved': 0,
    'import/no-named-as-default': 0,
    'import/extensions': 0,
    'import/export': 0,
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/no-dynamic-require': 0,
    'object-shorthand': 0,
    'no-shadow': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'consistent-return': 0,
    'no-return-assign': 0,
    'func-names': 0,
    'class-methods-use-this': 0,
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-undef': 0,
    'no-proto': 0,
  },
  globals,
  overrides: [
    {
      files: ['script/**'],
      rules: {
        // node 环境下支持 require
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
    {
      files: ['example/**', '**/_example/**'],
      rules: {
        'no-console': 0,
      },
    },
  ],
};
