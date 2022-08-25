'use strict';

module.exports = {
  extends: [
    'airbnb-base/rules/style',
  ],
  rules: {
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': ['error', { functions: false }],
  },
};
