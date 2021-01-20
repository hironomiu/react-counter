# react-countup
React Hooksの導入、useStateをcountupアプリで理解用サンプルコード

![countup](./countup.gif)

## 環境
今回開発した環境

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
react-countup用のベースアプリを作成

```
$ npx create-react-app react-countup
```

## start
`http://localhost:3000/`でcountup Appを起動

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
├── × App.test.js
├── × index.css
├── index.js
├── × logo.svg
├── × reportWebVitals.js
└── × setupTests.js
```

## setup(add dir)
`component`毎に作成していくために`components`ディレクトリで管理する

```
$ cd src
$ mkdir components
```

## setup(modifi file)
`index.js``App.js`を以下に変更

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

## 参考
- [React公式:hooks-state](https://ja.reactjs.org/docs/hooks-state.html)

## ツール
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [React公式(英語)](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build)
- [React公式(日本語)](https://ja.reactjs.org/docs/optimizing-performance.html#use-the-production-build)
