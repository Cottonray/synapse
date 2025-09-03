module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    ['@emotion/babel-preset-css-prop', { sourceMap: false }],
  ],
  plugins: [
    'react-native-worklets/plugin',
  ],
};
