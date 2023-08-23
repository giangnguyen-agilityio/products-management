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
    '@constants': '<rootDir>/src/constants',
    '@components/FilterMenu/FilterLink':
      '<rootDir>/src/components/FilterMenu/FilterLink',
    '@components/Form': '<rootDir>/src/components/Form',
    '@services/api-actions': '<rootDir>/src/services/api-actions',
    '@stores/products/ProductContext.ts':
      '<rootDir>/src/stores/products/ProductContext.ts',
    '@stores/products/ProductContext':
      '<rootDir>/src/stores/products/ProductContext',

    // Mock images
    '@assets/images/delete_Action.gif':
      '<rootDir>/src/assets/images/delete_Action.gif',
    '@assets/images/Image_not_available.webp':
      '<rootDir>/src/assets/images/Image_not_available.webp',
    '@assets/images/hero_img.webp': '<rootDir>/src/assets/images/hero_img.webp',

    // Mock icons
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
    '@assets/icons/TV_Icon.svg': '<rootDir>/src/assets/icons/TV_Icon.svg',
    '@assets/icons/Phone_Icon.svg': '<rootDir>/src/assets/icons/Phone_Icon.svg',
    '@assets/icons/Laptop_Icon.svg':
      '<rootDir>/src/assets/icons/Laptop_Icon.svg',
    '@assets/icons/Refrigerator_Icon.svg':
      '<rootDir>/src/assets/icons/Refrigerator_Icon.svg',
    '@assets/icons/Air_Conditioner_Icon.svg':
      '<rootDir>/src/assets/icons/Air_Conditioner_Icon.svg',
    '@assets/icons/full_star_icon.svg':
      '<rootDir>/src/assets/icons/full_star_icon.svg',
    '@assets/icons/half_star_icon.svg':
      '<rootDir>/src/assets/icons/half_star_icon.svg',
    '@assets/icons/empty_star_icon.svg':
      '<rootDir>/src/assets/icons/empty_star_icon.svg',
    '@assets/icons/facebook_icon.svg':
      '<rootDir>/src/assets/icons/facebook_icon.svg',
    '@assets/icons/twitter_icon.svg':
      '<rootDir>/src/assets/icons/twitter_icon.svg',
    '@assets/icons/instagram_icon.svg':
      '<rootDir>/src/assets/icons/instagram_icon.svg',
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
