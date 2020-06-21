module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style'],
            },
        ],
        // template中缩进
        'vue/html-indent': [2, 4, {
            attribute: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        }],
        // 每行最多属性个数
        'vue/max-attributes-per-line': [2, {
            singleline: 10,
            multiline: {
                max: 1,
                allowFirstLine: false,
            },
        }],
        // 组件name
        'vue/name-property-casing': ['error', 'kebab-case'],
        // 元素上属性命名格式
        'vue/attribute-hyphenation': ['error', 'never', {
            ignore: [],
        }],
        'vue/valid-v-for': 1,
        'vue/html-self-closing': ['error', {
            html: {
                void: 'any',
                normal: 'always',
                component: 'always',
            },
            svg: 'any',
            math: 'any',
        }],
        'vue/require-prop-types': 2, // props必须有类型
        'vue/require-default-prop': 2, // props必须有default
        'vue/no-confusing-v-for-v-if': 2, // v-for在v-if前面
    },
};
