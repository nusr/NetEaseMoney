const intentSize = 2;
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'react'],
  root: true,
  env: {
    commonjs: true,
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
      modules: true,
    },
    requireConfigFile: false,
    allowImportExportEverywhere: false,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',// 暂时关闭
    '@typescript-eslint/explicit-function-return-type': 'off',// 暂时关闭
    'import/prefer-default-export': 'off',
    'no-unused-vars': [
      'error',
    ],
    'react/jsx-uses-react': [
      'error',
    ],
    'react/jsx-uses-vars': [
      'error',
    ],
    'react/jsx-filename-extension': [
      'error',
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'no-unused-vars': 'error',
    'react/jsx-indent-props': ['error', intentSize],
    'react/jsx-indent': ['error', intentSize],
    indent: ['error', intentSize, {SwitchCase: 1}],
    '@typescript-eslint/indent': ['error', intentSize, {SwitchCase: 1}],
    '@typescript-eslint/prefer-interface': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
