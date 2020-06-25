module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '^color-mode$': './src/utils/colorMode.native',
          '^config$': './src/utils/config.native',
        },
      },
    ],
  ],
};
