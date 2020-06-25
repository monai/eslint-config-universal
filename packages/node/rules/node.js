'use strict';

module.exports = {
  extends: [
    'plugin:node/recommended',
    'airbnb-base/rules/node',
  ],
  rules: {
    'no-use-before-define': ['error', { functions: false }],
  },
};
