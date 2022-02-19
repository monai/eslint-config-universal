'use strict';

module.exports = {
  env: {
    es2022: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base/rules/best-practices',
    'airbnb-base/rules/errors',
    'airbnb-base/rules/variables',
    'airbnb-base/rules/es6',
    'airbnb-base/rules/imports',
  ],
  globals: {},
};
