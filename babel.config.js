const presets = ['module:metro-react-native-babel-preset'];
const plugins = [];

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.json'],
    alias: {
      '@': './src',
      '@store': './src/store',
      '@images': './src/assets/images',
      '@hooks': './src/hooks',
      '@model': './src/model',
      '@features': './src/features',
      '@navigation': './src/navigation',
      "@components": "./src/components"
    },
  },
]);

module.exports = {
  presets,
  plugins,
};
