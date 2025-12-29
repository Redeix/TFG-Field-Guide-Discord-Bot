module.exports = [
  {
    files: ["src/**/*.js"],
    ignores: [
      "node_modules/**",
      "assets/**",
      "probe/**",
      "dist/**",
      "build/**",
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      "no-undef": "off",
      "no-unused-vars": ["warn", { args: "none", ignoreRestSiblings: true }],
      "no-constant-condition": ["warn", { checkLoops: false }],
      "no-console": "off",
      "eqeqeq": "warn",
      "curly": ["warn", "multi-line"],
      "no-empty": ["warn", { allowEmptyCatch: true }],
      "no-useless-return": "warn",
      "no-fallthrough": "warn",
      "no-duplicate-case": "error",
    },
  },
];