module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard-with-typescript'
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
    'react/boolean-prop-naming': 'error'
  }
}
