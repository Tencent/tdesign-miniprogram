module.exports = {
  rootDir: '../',
  verbose: true,
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/',
  moduleFileExtensions: ['js', 'ts'],
  moduleNameMapper: {
    '^tdesign-miniprogram/(.*)': '<rootDir>/packages/components/$1',
    '^tdesign-miniprogram': '<rootDir>/packages/components/index',
    '^@behaviors/(.*)': '<rootDir>/example/behaviors/$1',
  },
  testMatch: ['<rootDir>/packages/components/**/__test__/**/*.test.{js,ts}'],
  collectCoverageFrom: ['<rootDir>/packages/components/**/*.{js,ts}', '!**/__test__/**', '!**/_example/**'],
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageDirectory: '<rootDir>/test/unit/coverage',
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'TDesign-miniprogram Unit Test Report',
        outputPath: '<rootDir>/test/unit/report/test-report.html',
      },
    ],
  ],
  setupFiles: ['<rootDir>/script/test/setup.js'],
  coverageReporters: ['html', 'json-summary'],
  globals: {
    CONFIG_PREFIX: 't',
  },
  globalSetup: '<rootDir>/script/test/globalSetup.js',
  snapshotSerializers: ['miniprogram-simulate/jest-snapshot-plugin'],
};

