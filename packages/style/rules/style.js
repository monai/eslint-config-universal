'use strict';

module.exports = {
  extends: [
    'airbnb-base/rules/style',
  ],
  rules: {
    'no-use-before-define': ['error', { functions: false }],
  },
};
