/**
 * uniapp 相关包的共享 eslint 配置
 * 被以下包引用：
 * - packages/tdesign-uniapp
 * - packages/tdesign-uniapp-chat
 * - packages/uniapp-components
 * - packages/uniapp-pro-components
 */
module.exports = function createUniappEslintConfig(rootDir) {
  return {
    root: true,
    extends: ['eslint-config-light-vue3'],
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
    },
  };
};
