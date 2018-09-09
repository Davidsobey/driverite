module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react/require-default-props': false,
    'react/forbid-prop-types': false,
    'class-methods-use-this': 0,
    'jsx-a11y/media-has-caption': 0,
  },
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  globals: {
    document: false,
  },
  parser: 'babel-eslint',
};
