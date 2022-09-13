function isProduction() {
  return process.env.NODE_ENV === 'production' ? 'error' : 'off';
}

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  plugins: ['vue', 'module-resolver'],
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  rules: {
    'default-case': 1,
    'max-len': ['error', { code: 180 }],
    'no-new': 0,
    'consistent-return': 1,
    'no-confusing-arrow': 1,
    indent: ['error', 2],
    'no-tabs': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    radix: [2, 'as-needed'],
    'class-methods-use-this': 0,
    'implicit-arrow-linebreak': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-console': ['warn', { allow: ['error'] }],
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'prefer-destructuring': ['warn', { object: true, array: true }],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
    radix: ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'function', next: 'function' },
      { blankLine: 'always', prev: 'multiline-expression', next: 'multiline-expression' },
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        multiline: 'never',
      },
    ],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/html-self-closing': 'off',
    'vue/require-default-prop': 'off',
    'no-debugger': isProduction(),
    'no-console': isProduction(),
    'no-alert': isProduction(),
    'array-bracket-newline': ['error', 'consistent'],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
  },
  globals: {
    ENV: true,
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: 'node_modules/@vue/cli-service/webpack.config.js',
      },
      alias: {
        map: [['@', './src']],
      },
    },
  },
};
