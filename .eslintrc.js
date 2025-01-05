module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/display-name': 'off',
    '@next/next/no-img-element': 'off'
  },
  ignorePatterns: ['node_modules/', '.next/', 'out/'],
  settings: {
    react: {
      version: 'detect'
    }
  }
} 