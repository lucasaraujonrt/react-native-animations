module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileMock.js',
    '\\.(css|less)$': '<rootDir>/fileMock.js',
  },
  transform: {
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  setupFiles: ['./fileMock.js'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileMock.js',
    '\\.(css|less)$': '<rootDir>/fileMock.js',
  },
};
