module.exports = {
    
    'extends': 'eslint:recommended',
    'overrides': [
      {
        'files': ['**/*/*.test.js'],
        'plugins': ['jest'],
        'extends': ['plugin:jest/recommended'],
        'rules': { 'jest/prefer-expect-assertions': 'off' }
      }
    ],
    'parserOptions': {
      'ecmaVersion': 'latest',
      'sourceType': 'module'
    },
    'rules': {}
  }