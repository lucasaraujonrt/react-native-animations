module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@mobile': './src',
        },
        extensions: [
          '.native.ts',
          '.native.tsx',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
