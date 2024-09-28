// eslint.config.js

module.exports = [
    {
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        globals: {
          // Define globals here
          window: 'readonly',
          document: 'readonly',
          navigator: 'readonly',
          console: 'readonly',
          // Add other globals as needed
        },
      },
      plugins: {
        '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      },
      rules: {
        // Possible Errors
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-duplicate-case': 'error',
        'no-empty': 'warn',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'warn',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-sparse-arrays': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'valid-typeof': 'error',
  
        // Best Practices
        'curly': ['error', 'all'],
        'eqeqeq': ['error', 'always'],
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-unused-vars': 'warn',
  
        // Variables
        'no-undef': 'error',
        'no-unused-vars': 'warn',
  
        // Stylistic Issues
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        'camelcase': ['warn', { 'properties': 'never' }],
        'comma-dangle': ['error', 'only-multiline'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'eol-last': ['error', 'always'],
        'func-call-spacing': ['error', 'never'],
        'indent': ['error', 2, { 'SwitchCase': 1 }],
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
        'keyword-spacing': ['error', { 'before': true, 'after': true }],
        'linebreak-style': ['error', 'unix'],
        'max-len': ['warn', { 'code': 80 }],
        'no-array-constructor': 'error',
        'no-lonely-if': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multiple-empty-lines': ['error', { 'max': 1 }],
        'no-new-object': 'error',
        'no-trailing-spaces': 'error',
        'object-curly-spacing': ['error', 'always'],
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['error', 'single', { 'avoidEscape': true }],
        'semi': ['error', 'always'],
        'semi-spacing': ['error', { 'before': false, 'after': true }],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'spaced-comment': ['error', 'always', {
          'line': {
            'markers': ['/'],
            'exceptions': ['-', '+'],
          },
          'block': {
            'markers': ['!'],
            'exceptions': ['*'],
            'balanced': true,
          },
        }],
  
        // ECMAScript 6
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-spacing': ['error', { 'before': true, 'after': true }],
        'no-confusing-arrow': ['error', { 'allowParens': true }],
        'no-duplicate-imports': ['error', { 'includeExports': true }],
        'no-var': 'error',
        'object-shorthand': ['error', 'always'],
        'prefer-arrow-callback': ['error', { 'allowNamedFunctions': false }],
        'prefer-const': ['error', {
          'destructuring': 'all',
        }],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'template-curly-spacing': ['error', 'never'],
      },
    },
  ];
  