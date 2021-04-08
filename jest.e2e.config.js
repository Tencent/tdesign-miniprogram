module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/',
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['<rootDir>/example/**/__test__/**/*.test.{js,ts}'],
  collectCoverageFrom: ['<rootDir>/example/**/*.{js,ts}', '!**/__test__/**'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/test/e2e/coverage',
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', {
      pageTitle: 'TDesign-miniprogram E2E Test Report',
      outputPath: './test/e2e/report/test-report.html',
    }],
  ],
  coverageReporters: ['html', 'text-summary'],
};
