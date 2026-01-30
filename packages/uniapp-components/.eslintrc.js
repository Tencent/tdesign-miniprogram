module.exports = {
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
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,

    ecmaVersion: 'latest',
    extraFileExtensions: ['.vue'],
  },
  rules: {
    'vue/no-v-text-v-html-on-component': 0,
    'vue/component-name-in-template-casing': [
      2,
      'kebab-case',
      {
        registeredComponentsOnly: true,
      },
    ],
  },
};
