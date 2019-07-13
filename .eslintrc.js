module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'comma-dangle': 'off',
    'linebreak-style': 'off',
    'max-len': ["error", { "code": 120, 'ignoreRegExpLiterals': true }],
    'func-names': ["error", "as-needed", { "generators": "never" }],
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off'
  }
};
