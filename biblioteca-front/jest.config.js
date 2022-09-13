module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^Vue$': 'vue',
    '^src/(.*)$': '<rootDir>/src/$1',
    '\\.(css)$': 'identity-obj-proxy',
  },
  testMatch: ['**/src/**/*.test.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
  setupFiles: ['<rootDir>/tests/unit/setup'],
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  collectCoverageFrom: [
    'src/**/*/*.{js,vue}',
    '!src/**/*/*.routes.js',
    '!src/config/*.js',
    '!src/main.js',
    '!src/router/routes.js',
    '!src/router/index.js',
    '!src/__dev__/**',
    '!**/routes.js',
    '!**/__mocks__/**',
    '!**/node_modules/**',
  ],
};
