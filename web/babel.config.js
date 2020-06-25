module.exports = {
  presets: [
    '@babel/preset-typescript',
    'module:metro-react-native-babel-preset',
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-flow-strip-types',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    [
      'module-resolver',
      {
        alias: {
          '^react-native$': 'react-native-web',
          '^react-native-bootsplash$': './src/utils/bootsplash.web',
          '^sync-storage$': './src/utils/syncStorage.web',
          '^color-mode$': './src/utils/colorMode.web',
          '^config$': './src/utils/config.web',
        },
      },
    ],
  ],
};
