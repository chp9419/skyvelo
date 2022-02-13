module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['airbnb', 'plugin:prettier/recommended', 'eslint:recommended'],
    // 'prettier/react'
    rules: {
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'no-alert': 'off',
        'dot-notation': 'off',
        'linebreak-style': ['error', 'windows'],
        indent: ['error', 4, { SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/no-array-index-key': 'off',
        'linebreak-style': 0,
    },
    overrides: [
        {
            files: ['./src/reducers/**/*.js', './src/module/**/*.js'],
            rules: {
                'default-param-last': 'off',
            },
        },
    ],
};
