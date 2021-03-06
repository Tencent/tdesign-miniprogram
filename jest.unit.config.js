module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/',
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['<rootDir>/src/**/__test__/**/*.test.{js,ts}'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts}', '!**/__test__/**'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', {
      pageTitle: 'TDesign-miniprogram Unit Test Report',
      outputPath: './test/unit/report/test-report.html',
    }],
  ],
  coverageReporters: ['html', 'text-summary'],
};
