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
    '@assets/images/delete_Action.gif':
      '<rootDir>/src/assets/images/delete_Action.gif',
    '@assets/icons/Location_Icon.svg':
      '<rootDir>/src/assets/icons/Location_Icon.svg',
    '@assets/icons/Telephone_Icon.svg':
      '<rootDir>/src/assets/icons/Telephone_Icon.svg',
    '@assets/icons/Fax_Icon.svg': '<rootDir>/src/assets/icons/Fax_Icon.svg',
    '@assets/icons/Email_Icon.svg': '<rootDir>/src/assets/icons/Email_Icon.svg',

    '@assets/icons/facebook_link_icon.svg':
      '<rootDir>/src/assets/icons/facebook_link_icon.svg',
    '@assets/icons/twitter_link_icon.svg':
      '<rootDir>/src/assets/icons/twitter_link_icon.svg',
    '@assets/icons/instagram_link_icon.svg':
      '<rootDir>/src/assets/icons/instagram_link_icon.svg',
    '@assets/icons/linkedin_link_icon.svg':
      '<rootDir>/src/assets/icons/linkedin_link_icon.svg',
    '@constants': '<rootDir>/src/constants',

    '@assets/icons/TV_Icon.svg': '<rootDir>/src/assets/icons/TV_Icon.svg',
    '@assets/icons/Phone_Icon.svg': '<rootDir>/src/assets/icons/Phone_Icon.svg',
    '@assets/icons/Laptop_Icon.svg':
      '<rootDir>/src/assets/icons/Laptop_Icon.svg',
    '@assets/icons/Refrigerator_Icon.svg':
      '<rootDir>/src/assets/icons/Refrigerator_Icon.svg',
    '@assets/icons/Air_Conditioner_Icon.svg':
      '<rootDir>/src/assets/icons/Air_Conditioner_Icon.svg',
    '@components/FilterMenu/FilterLink':
      '<rootDir>/src/components/FilterMenu/FilterLink',

    '@assets/images/Image_not_available.webp':
      '<rootDir>/src/assets/images/Image_not_available.webp',
    '^@constants': '<rootDir>/src/constants',
  },
  transform: {
    '^.+\\.css$': 'jest-transform-stub',
    '^.+\\.svg$': 'jest-transform-stub',
    '^.+\\.webp$': 'jest-transform-stub',
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
