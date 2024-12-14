module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|ts|tsx)$': 'ts-jest', // Transforms TypeScript files using ts-jest
  },
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'], // Extends Jest with custom matchers
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'], // Ignore these directories
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
