module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "arrow-body-style": [
            2,
            "as-needed"
        ],
        "arrow-parens": [
            "error",
            "always"
        ],
        "class-methods-use-this": 0,
        "comma-dangle": [
            2,
            "always-multiline"
        ],
        "key-spacing":"off",
        "global-require": "off",
        "import/imports-first": 0,
        "import/newline-after-import": 0,
        "import/no-dynamic-require": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-named-as-default": 0,
        "import/no-unresolved": 2,
        "import/no-webpack-loader-syntax": 0,
        "import/prefer-default-export": 0,
        "no-nested-ternary": 0,
        "indent": [
            "error",
            4
        ],
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true,
                "allowTernary": true,
                "allowTaggedTemplates": true
            }
        ],
        "space-before-function-paren": [
            "error",
            "always"
        ],
        "operator-linebreak": 0,
        "jsx-a11y/aria-props": 2,
        "jsx-a11y/heading-has-content": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/label-has-for": 2,
        "jsx-a11y/mouse-events-have-key-events": 2,
        "jsx-a11y/role-has-required-aria-props": 2,
        "jsx-a11y/role-supports-aria-props": 2,
        "max-len": 0,
        "newline-per-chained-call": 0,
        "no-confusing-arrow": 0,
        "no-console": 1,
        "no-use-before-define": 0,
        "prefer-template": 2,
        "consistent-return": 0,
        "react/forbid-prop-types": 0,
        "react-hooks/exhaustive-deps": "error",
        "react-hooks/rules-of-hooks": "error",
        "react/jsx-first-prop-new-line": [
            2,
            "multiline"
        ],
        "react/jsx-filename-extension": 0,
        "react/jsx-no-target-blank": 0,
        "react/require-default-props": 0,
        "react/require-extension": 0,
        "react/self-closing-comp": 0,
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "react/sort-comp": 0,
        "no-return-assign": 0,
        "redux-saga/no-yield-in-race": 2,
        "redux-saga/yield-effects": 2,
        "require-yield": 0,
        "react/no-array-index-key": 0,
        "react/destructuring-assignment": 0,
        "react/jsx-one-expression-per-line": 0
    },
};