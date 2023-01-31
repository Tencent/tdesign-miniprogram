/**
 * virtualHost 的开启和关闭对 dom 渲染会产生较大差异，且在单测中无法通过 selectComponent 获取子组件实例，
 * 故设置两个 jest 配置文件，区分 virtualHost 的两种状态。
 */

module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/',
  moduleFileExtensions: ['js', 'ts'],
  moduleNameMapper: {
    '^tdesign-miniprogram/(.*)': '<rootDir>/src/$1',
  },
  testMatch: ['<rootDir>/src/**/__test__/**/*.test.{js,ts}'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts}', '!**/__test__/**', '!**/_example/**'],
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageDirectory: '<rootDir>/test/unit/coverage',
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'TDesign-miniprogram Unit Test Report',
        outputPath: './test/unit/report/test-report.html',
      },
    ],
  ],
  setupFiles: ['<rootDir>/script/test/virtualHostSetup.js'],
  coverageReporters: ['html', 'json-summary'],
  globals: {
    CONFIG_PREFIX: 't',
  },
  globalSetup: '<rootDir>/script/test/globalSetup.js',
  snapshotSerializers: ['miniprogram-simulate/jest-snapshot-plugin'],
};
