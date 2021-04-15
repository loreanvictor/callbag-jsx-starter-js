<div align="center">

<img width="156px" src="https://raw.githubusercontent.com/loreanvictor/callbag-jsx/2dce75006b1046ae28edfb8f4ba4af164b167f56/docs/assets/callbag-jsx.svg"/>

<br><br>

# Starter project for [`callbag-jsx`](https://github.com/loreanvictor/callbag-jsx)

</div>

<br><br>

[Use this template](https://github.com/loreanvictor/callbag-jsx-starter-js/generate) and clone your repo (if you haven't already).

Useful commands:
```bash
npm i             # 👉  install dependencies
```
```bash
npm start         # 👉  start dev server
                  # --> entry file is src/index.jsx
                  # --> served on localhost:3000
```
```bash
npm run build     # 👉  build your app
                  # --> build files in dist/
```
```bash
npm test          # 👉  run tests
                  # --> test root is src/test/index.ts
```

👉 Don't forget to [read the docs](https://loreanvictor.github.io/callbag-jsx/).

<br><br>

## Stack

- [Babel](https://babeljs.io/) for transpilation
  - [`@babel/plugin-transform-react-jsx`](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx) for JSX
  - [`@babel/plugin-proposal-pipeline-operator`](https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator) for `|>` operator support
  - Configuration in `.babelrc`

- [Snowpack](https://www.snowpack.dev) for dev server
  - [`@snowpack/plugin-babel`](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-babel#readme) for making Snowpack use Babel plugins
  - Configuration in `snowpack.config.js`

- [Webpack](https://webpack.js.org) for production bundling
  - Configuration in `webpack.config.js`

- [ESLint](https://eslint.org) for linting
  - [ESLint Plugin React](https://github.com/yannickcr/eslint-plugin-react) for JSX support
  - Configuration in `.eslintrc`

- [Mocha](https://mochajs.org/#configuring-mocha-nodejs) & [Chai](https://www.chaijs.com) for testing
  - [`@babel/register`](https://babeljs.io/docs/en/babel-register) for binding Babel and Mocha
