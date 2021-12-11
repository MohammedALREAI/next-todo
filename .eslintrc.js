


module.exports = {
      ignore: ["node_modules", ".next"]

    parser: ['@typescript-eslint/parser',"next/babel"],
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
        'eslint:recommended',
    ],
    env: {
        node: true,
    },
    plugins: ['@typescript-eslint', 'better-styled-components',[
    "styled-components", { "ssr": true }],
        ["@babel/plugin-proposal-private-methods", { "loose": true }]

    
    ],

    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'better-styled-components/sort-declarations-alphabetically': 2,
        'prettier/prettier': [
            'error',
            {
                'endOfLine': 'auto',
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
