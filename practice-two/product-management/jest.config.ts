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
    '@components/FilterMenu': '<rootDir>/src/components/FilterMenu',
    '@components/Form': '<rootDir>/src/components/Form',
    '@components/common/InputField':
      '<rootDir>/src/components/common/InputField',
    '@components/common/ImageUploader':
      '<rootDir>/src/components/common/ImageUploader',
    '@components/common/Logo': '<rootDir>/src/components/common/Logo',
    '@components/common/Navigation':
      '<rootDir>/src/components/common/Navigation',
    '@layouts/Header': '<rootDir>/src/layouts/Header',
    '@layouts/Footer': '<rootDir>/src/layouts/Footer',
    '@components/ErrorBoundary': '<rootDir>/src/components/ErrorBoundary',
    '@components/ProductItem': '<rootDir>/src/components/ProductItem',
    '@components/common/EmptyProduct':
      '<rootDir>/src/components/common/EmptyProduct',

    '@services/api-actions': '<rootDir>/src/services/api-actions',
    '@utils/api': '<rootDir>/src/utils/api',

    '@context/ProductContext/ProductContext.ts':
      '<rootDir>/src/context/ProductContext/ProductContext.ts',
    '@context/ProductContext/ProductContext':
      '<rootDir>/src/context/ProductContext/ProductContext',
    '@context/ProductContext/ProductProvider':
      '<rootDir>/src/context/ProductContext/ProductProvider',

    // Mock images
    '@assets/images/delete_Action.gif':
      '<rootDir>/src/assets/images/delete_Action.gif',
    '@assets/images/Image_not_available.webp':
      '<rootDir>/src/assets/images/Image_not_available.webp',
    '@assets/images/hero_img.webp': '<rootDir>/src/assets/images/hero_img.webp',
    '@assets/images/error-image.webp':
      '<rootDir>/src/assets/images/error-image.webp',
    '@assets/images/logo_website.webp':
      '<rootDir>/src/assets/images/logo_website.webp',
    '@assets/images/hero_img_320.webp':
      '<rootDir>/src/assets/images/hero_img_320.webp',
    '@assets/images/hero_img_480.webp':
      '<rootDir>/src/assets/images/hero_img_480.webp',
    '@assets/images/hero_img_768.webp':
      '<rootDir>/src/assets/images/hero_img_768.webp',
    '@assets/images/hero_img_992.webp':
      '<rootDir>/src/assets/images/hero_img_992.webp',

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
    '^.+\\.gif$': 'jest-transform-stub',
    // '^.+\\.tsx?$': [
    //   'ts-jest',
    //   {
    //     diagnostics: {
    //       ignoreCodes: [1343],
    //     },
    //     astTransformers: {
    //       before: [
    //         {
    //           path: 'node_modules/ts-jest-mock-import-meta',
    //           options: {
    //             metaObjectReplacement: {
    //               VITE_API_URL: 'https://64e2e996bac46e480e77e5a8.mockapi.io',
    //             },
    //           },
    //         },
    //       ],
    //     },
    //   },
    // ],
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
