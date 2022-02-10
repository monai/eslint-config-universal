'use strict';

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      generators: true,
    },
  },
  extends: [
    'plugin:node/recommended',
    'airbnb-base/rules/node',
  ],
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-use-before-define': ['error', { functions: false }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        cjs: 'never',
      },
    ],
  },
};
