# react-countup

React Hooks の導入、useState を countup(+文字入力)アプリで理解用のサンプルコード

![countup](./countup.gif)

## 環境

開発環境のバージョン

```
$ node -v
v14.15.1
$ npm -v
6.14.8
$ npx -v
6.14.8
$ yarn -v
1.22.5
```

## create

react-countup 用のベースアプリを作成

```
$ npx create-react-app react-countup
```

## start

`http://localhost:3000/`で countup App を起動

```
$ yarn start
```

## setup(delete file)

`×`のファイルは今回は不要なので削除

```
$ tree src
src
├── × App.css
├── App.js
├── App.test.js
├── × index.css
├── index.js
├── × logo.svg
├── × reportWebVitals.js
└── setupTests.js
```

## setup(add dir)

`component`毎に作成していくために`components`ディレクトリで管理する

```
$ cd src
$ mkdir components
```

## setup(modifi file)

` index.js``App.js `を以下に変更

`src/index.js`

```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
```

`src/App.js` -> `src/components/App.js`

```
import React from 'react'

const App = () =>{
  return (
    <>
      hello
    </>
  )
}

export default App
```

## test

`src/App.test.js`,`

```
$ npm test
```

## Hooks ドキュメントお

- [React 公式:hooks-state](https://ja.reactjs.org/docs/hooks-state.html)

## ツール

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [React 公式(英語)](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build)
- [React 公式(日本語)](https://ja.reactjs.org/docs/optimizing-performance.html#use-the-production-build)

## FYI

`template`に`redux`を指定すると counter アプリが標準で動作

```
$ mkdir hoge
$ hoge hoge
$ npx create-react-app . --template redux
$ yarn start
```

![template-redux](./template-redux.png)
