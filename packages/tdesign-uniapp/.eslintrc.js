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
    // https://stackoverflow.com/questions/77792745/fatalerror-error-ts6046-argument-for-moduleresolution-option-must-be-nod
    tsconfigRootDir: __dirname,

    ecmaVersion: 'latest',
    extraFileExtensions: ['.vue'],
  },
  rules: {
    'vue/no-v-text-v-html-on-component': 0,
  },
};
