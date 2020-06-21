# eslint-config-vuetify
> An opinionated eslint config for vue+typescript.

### 💿 Install
```bash
yarn add @hans/eslint-config -D
# OR
npm install @hans/eslint-config --save-dev
```

### 🚀 Usage
#### 基本eslint
Create an .eslintrc.js in the root directory of your project, then copy the following content into it:
```js
module.exports = {
    extends: [
        '@hans/eslint-config',
    ],
    env: {
        // Your environments (which contains several predefined global variables)
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // Your global variables (setting to false means it's not allowed to be reassigned)
        //
        // myGlobal: false
    },
    rules: {
        // Customize your rules
    }
};
```

#### vue
> vue-cli4
Create an .eslintrc.js in the root directory of your project, then copy the following content into it:
```js
module.exports = {
    extends: [
        '@hans/eslint-config',
        '@hans/eslint-config/vue',
    ],
    env: {
        // Your environments (which contains several predefined global variables)
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // Your global variables (setting to false means it's not allowed to be reassigned)
        //
        // myGlobal: false
    },
    rules: {
        // Customize your rules
    }
};
```

#### typescript
Create an .eslintrc.js in the root directory of your project, then copy the following content into it:
```js
module.exports = {
    extends: [
        '@hans/eslint-config',
        '@hans/eslint-config/typescript',
    ],
    env: {
        // Your environments (which contains several predefined global variables)
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // Your global variables (setting to false means it's not allowed to be reassigned)
        //
        // myGlobal: false
    },
    rules: {
        // Customize your rules
    }
};
```