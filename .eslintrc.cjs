module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard-with-typescript',
    'standard-jsx',
    'standard-react',
    'plugin:react/jsx-runtime'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    linkComponents: [
      { name: 'Link', linkAttribute: 'to' }
    ]
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.json',
      './tsconfig.node.json'
    ]
  },
  rules: {
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'export' }
    ]
  }
}
