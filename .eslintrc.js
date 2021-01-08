module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'class-methods-use-this': 0,
    'no-restricted-properties': 0,
    'no-plusplus': 0,
  },
}
