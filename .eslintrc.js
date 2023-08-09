module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'require-yield': 'off',
    'prefer-spread': 'off',
    '@typescript-eslint/ban-types': 'off',
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    'object-curly-spacing': [2, 'always'],
    quotes: [2, 'single', { avoidEscape: true }],
    'import/no-unresolved': ['error', { ignore: ['^@my-assets-core'] }],
    'no-restricted-imports': [2, { patterns: ['../../.*'] }],
    // 'import/named': 'error',
    // 'import/no-cycle': [1, { 'maxDepth': 1 }],
    semi: [2, 'always', { omitLastInOneLineBlock: true }],
    'no-multiple-empty-lines': 'error',
    curly: ['error', 'all'],
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],

    // import
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/export': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
  },
};

