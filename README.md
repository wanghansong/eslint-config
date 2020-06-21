# eslint-config-vuetify
> An opinionated eslint config for vue+typescript.
基于vue-cli4

### 💿 Install
```bash
yarn add vue-typescript-eslint-config -D
# OR
npm install vue-typescript-eslint-config --save-dev
```

### 🚀 Usage
Create an .eslintrc.js in the root directory of your project, then copy the following content into it:
```js
module.exports = {
    extends: [
        'vue-typescript-eslint-config',
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
