/**
 * uniapp 相关包的共享 eslint 配置
 * 被以下包引用：
 * - packages/tdesign-uniapp
 * - packages/tdesign-uniapp-chat
 * - packages/uniapp-components
 * - packages/uniapp-pro-components
 */
const path = require('path');

module.exports = function createUniappEslintConfig(rootDir) {
  const packagesDir = path.resolve(rootDir, '..');
  const uniappComponentsDir = path.join(packagesDir, 'uniapp-components');

  return {
    root: true,
    extends: ['eslint-config-light-vue3', 'plugin:prettier/recommended'],
    globals: {
      getCurrentPages: true,
      uni: true,
      globalThis: true,
      qq: true,
      weex: true,
      plus: true,
      getApp: true,
    },
    plugins: ['light'],
    parserOptions: {
      project: 'tsconfig.eslint.json',
      tsconfigRootDir: rootDir,

      ecmaVersion: 'latest',
      extraFileExtensions: ['.vue'],
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['@tdesign/uniapp', path.join(uniappComponentsDir, '')]],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.json', '.node'],
        },
      },
    },
    rules: {
      'vue/no-v-text-v-html-on-component': 0,
      'light/no-complex-style-class': 2,
      'vue/component-name-in-template-casing': [
        2,
        'kebab-case',
        {
          registeredComponentsOnly: true,
        },
      ],
      'import/namespace': 0,
      'import/order': 0,
      'import/default': 0,
      'import/no-duplicates': 0,
      'import/no-named-as-default': 0,
      'import/no-named-as-default-member': 0,
      '@typescript-eslint/indent': 0,
      'vue/html-closing-bracket-newline': 0,
      'vue/html-indent': 0,
      'vue/html-self-closing': 0,
      'vue/max-attributes-per-line': 0,
      'vue/singleline-html-element-content-newline': 0,
    },
  };
};
