module.exports = {
  rootDir: '../../../',
  verbose: true,
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/',
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['<rootDir>/example/**/__test__/**/*.test.{js,ts}'],
  collectCoverageFrom: ['<rootDir>/example/**/*.{js,ts}', '!**/__test__/**'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/packages/tdesign-miniprogram/test/e2e/coverage',
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'TDesign-miniprogram E2E Test Report',
        outputPath: '<rootDir>/packages/tdesign-miniprogram/test/e2e/report/test-report.html',
      },
    ],
  ],
  coverageReporters: ['html', 'text-summary'],
};
