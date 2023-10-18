module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  env: { es6: true },
  extends: ['@yurychang', '@yurychang/typescript'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['simple-import-sort', 'import'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
};
