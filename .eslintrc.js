module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  // Keep the prettier on the bottom
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['react', 'react-hooks', 'prettier', 'html'],

  rules: {
    //
    // https://nickymeuleman.netlify.app/blog/automagically-lint
    //

    quotes: ['error', 'single'],

    // we want to force semicolons
    semi: ['error', 'always'],

    // we use 2 spaces to indent our code
    indent: ['error', 2],

    // we want to avoid extraneous spaces
    'no-multi-spaces': ['error'],

    'no-console': ['warn'],

    // make prettier errors as warnings
    'prettier/prettier': [
      'warn',

      {
        semi: true,
        singleQuote: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
      },
    ],

    // These two create conflicts with prettier
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',

    'no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'none',
      },
    ],
  },
};
