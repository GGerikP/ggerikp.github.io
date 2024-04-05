module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Use 'jsdom' for React projects
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // File extensions to process
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
      // other ts-jest specific configuration...
    }],
  },
  moduleNameMapper: {
    // Mocks file imports for images to return a string
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
