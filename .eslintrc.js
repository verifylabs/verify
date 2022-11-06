const nextConfig = require('eslint-config-next');
const config = require('./packages/config');
const path = require('path');

const resolveRoot = (dir = '') => path.resolve(__dirname, dir);

module.exports = {
  ...config,
  extends: [...config.extends, 'next/core-web-vitals'],
  plugins: [...config.plugins, ...nextConfig.plugins.filter((f) => f === 'import')],
  parserOptions: {
    ...config.parserOptions,
    tsConfigRootDir: resolveRoot(),
    project: [resolveRoot('./tsconfig.eslint.json'), resolveRoot('./**/**/tsconfig.json')],
  },
  rules: {
    ...config.rules,
    'import/no-cycle': 'off',
    'import/order': 'off',
  },
};
