/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleDirectories: ['node_modules', 'src'],
  roots: ['src'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '@helpers': '<rootDir>/src/helpers/index.ts',
    '@components/commons/(.*)$': '<rootDir>/src/components/commons/$1',
    '@assets/images/error-image.png':
      '<rootDir>/src/assets/images/error-image.png',
    '@assets/images/delete-icon.gif':
      '<rootDir>/src/assets/images/delete-icon.gif',
    '@constants/modal': '<rootDir>/src/constants/modal.ts',
    '@constants/role': '<rootDir>/src/constants/role.ts',
    '@types': '<rootDir>/src/types/index.ts',
    '@components': '<rootDir>/src/components',
  },
  transform: {
    '^.+\\.css$': 'jest-transform-stub',
  },
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  clearMocks: true,
}
