const presets = ['module:metro-react-native-babel-preset'];
const plugins = [];

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.json'],
    alias: {
      '@': './src',
      '@images': './src/assets/images',
      '@hooks': './src/hooks',
      '@features': './src/features',
      '@navigation': './src/navigation'
    },
  },
]);

module.exports = {
  presets,
  plugins,
};
