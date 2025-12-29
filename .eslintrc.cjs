module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'script',
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-unused-vars': ['warn', { args: 'none', ignoreRestSiblings: true }],
    'no-constant-condition': ['warn', { checkLoops: false }],
    'no-console': 'off',
    'no-prototype-builtins': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.js'],
      rules: {
      },
    },
  ],
};