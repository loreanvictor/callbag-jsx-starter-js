<img width="156px" src="https://raw.githubusercontent.com/loreanvictor/callbag-jsx/2dce75006b1046ae28edfb8f4ba4af164b167f56/docs/assets/callbag-jsx.svg"/>

# Starter project for [`callbag-jsx`](https://github.com/loreanvictor/callbag-jsx)

1. [Use this template](https://github.com/loreanvictor/callbag-jsx-starter-js/generate)
1. Clone your repo and `cd` to it
1. Install dependencies: `npm i`
1. Start dev server: `npm start`
    1. Entry file is in `src/index.jsx`
    1. Dev version is served on `localhost:3000`
1. Build your app: `npm run build`
    1. Build files are in `dist/`

👉 Don't forget to [read the docs](https://loreanvictor.github.io/callbag-jsx/).

<br><br>

## Stack

- [Babel](https://babeljs.io/) for transpilation
  - [`@babel/plugin-transform-react-jsx`](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx) for JSX
  - [`@babel/plugin-proposal-pipeline-operator`](https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator) for `|>` operator support
  - Configuration in `.babelrc`

- [Webpack](https://webpack.js.org) for bundling and dev server
  - Configuration in `webpack.common.js`
  - Dev specific config in `webpack.dev.js`
  - Prod specific config in `webpack.prod.js`

- [ESLint](https://eslint.org) for linting
  - Configuration in `.eslintrc`
