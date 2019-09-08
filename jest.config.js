module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  rootDir: __dirname,
  testMatch: ['**/src/**/*.test.ts?(x)'],
  setupFilesAfterEnv: ['<rootDir>/__mock__/jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/android/','/ios/'],
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    'src/pages/**/*.{ts,tsx}',
    'src/utils/**/*.{ts,tsx}',
    '!**/type/**/*.ts',
  ],
  "transformIgnorePatterns": ["node_modules/(?!(@react-native-community/async-storage/lib))"],
  moduleNameMapper: {
    '^.+\\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mock__/jest.fileMock.js',
  },
  // coverageThreshold: {
  //   global: {
  //     functions: 60,
  //     lines: 60,
  //     statements: 60,
  //     branches: 35,
  //   },
  // },
  testURL: 'http://localhost:8080',
}
