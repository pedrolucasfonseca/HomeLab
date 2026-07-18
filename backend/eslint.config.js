const js = require('@eslint/js')
const globals = require('globals')

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            globals: globals.node,
            sourceType: 'commonjs',
        },
    },
    {
        files: ['**/*.test.js'],
        languageOptions: {
            globals: globals.jest,
        },
    },
]