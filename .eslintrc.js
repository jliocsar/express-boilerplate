const fs = require('fs')

// 👀
const babelConfig = JSON.parse(fs.readFileSync('./.babelrc'))
const alias = Object.entries(babelConfig.plugins[0][1].alias)

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  env: {
    es2021: true,
    node: true,
  },
  plugins: ['prettier', 'import', 'node'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:node/recommended'],
  settings: {
    'import/resolver': { alias },
  },
  rules: {
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
    'node/no-missing-require': 'off',
    'node/no-missing-import': 'off',
    'no-unused-vars': 'off',
    // only allow imports resolve by `eslint-plugin-import`
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/no-extraneous-dependencies': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '~*/**',
            group: 'internal',
          },
        ],
      },
    ],
  },
}
