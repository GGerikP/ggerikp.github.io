module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env : {
    browser: true,
    node: true,
    es2023: true,
    jest: true
  },
  ignorePatterns: ['build/*', 'node_modules/*', 'eslintrc.js'],
  rules: {
    // Possible Errors
    // 'no-console': 'warn',
    'no-debugger': 'error',

    // Best Practices
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'no-shadow': 'error',
    'no-empty': 'error',
    'no-use-before-define': 'error',
    'consistent-return': 'error',

    // Stylistic Issues
    'quotes': ['error', 'single'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'semi': ['error', 'always'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],

    // TypeScript-specific rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
