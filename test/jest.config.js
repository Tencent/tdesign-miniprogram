module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/',
  moduleFileExtensions: ['js', 'ts'],
  moduleNameMapper: {
    '^tdesign-miniprogram/(.*)': '../../components/$1',
    '^tdesign-miniprogram': '../../components/index',
    '^@behaviors/(.*)': '../../../example/behaviors/$1',
  },
  testMatch: ['../../components/**/__test__/**/*.test.{js,ts}'],
  collectCoverageFrom: ['../../components/**/*.{js,ts}', '!**/__test__/**', '!**/_example/**'],
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageDirectory: './unit/coverage',
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'TDesign-miniprogram Unit Test Report',
        outputPath: './unit/report/test-report.html',
      },
    ],
  ],
  setupFiles: ['../../../script/test/setup.js'],
  coverageReporters: ['html', 'json-summary'],
  globals: {
    CONFIG_PREFIX: 't',
  },
  globalSetup: '../../../script/test/globalSetup.js',
  snapshotSerializers: ['miniprogram-simulate/jest-snapshot-plugin'],
};
