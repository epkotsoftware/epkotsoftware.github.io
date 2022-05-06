# 株式会社エプコットソフトウェア ～ プログラミング編 JavaScript

他言語のプログラミング基礎が出来ていて、HTML・CSSの知識がある方を対象とした資料です。

## はじめに

JavaScriptは情報が多く出ており、誤った情報も多いため  
Mozillaの公式ウェブサイト(MDN)をメインに学習していきます。  
また、ライブラリ(jQuery等)・フレームワーク(Vue.js等)は本資料では学習対象外です。

- Wikipedia - MDN Web Docs
  - <https://ja.wikipedia.org/wiki/MDN_Web_Docs>
- MDN Web Docs
  - <https://developer.mozilla.org/>

## Internet Explorer

2022年6月16日にInternet Explorer(以下、IE)のサポート終了に伴い  
IE非対応だった機能が使えるようになります。  
しかし、既存のシステムでは古い手法が使われることが多いため

- Microsoft 社 Internet Explorer のサポート終了について
  - <https://www.ipa.go.jp/security/announce/ie_eos.html>

以下、IEで使えない機能の一部です。

- [`let`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/let) の挙動が異なる（IE11以前は使えない）
- [`String`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String) の一部メソッド(`trimEnd`、`trimStart`等)
- [`アロー関数式`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [`for...of`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...of)
- [`NodeList.prototype.forEach()`](https://developer.mozilla.org/ja/docs/Web/API/NodeList/forEach)
- [`クラス`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes)
- [`モジュール`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Modules)
- [`非同期関数`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/async_function)
- [`Fetch API`](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API)

## 動画

まずは動画で学習することをおすすめします。

- JavaScript講座
  - <https://www.youtube.com/playlist?list=PLwM1-TnN_NN7-zdRV8YsGUB82VVhfYiWW>
- 【JavaScript超入門講座】わずか50分で知識ゼロから基礎をマスター！
  - <https://youtu.be/QCjFPSO96RU>

## JavaScriptガイド

MDNのJavaScriptガイドです。  
こちらから現場に有用な情報をピックアップしていきます。

- JavaScript ガイド
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide>

### 入門編

一読しておきましょう。

- 入門編
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Introduction>

### 文法とデータ型

現在では、宣言に`var`はほとんど使われず、`const`、`let`を使用します。  
再代入しない場合は`const`を使い、再代入する場合は`let`を使います。

- 文法とデータ型
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Grammar_and_types>

### 制御フローとエラー処理

- 制御フローとエラー処理
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling>

### ループと反復処理

- ループと反復処理
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Loops_and_iteration>

#### オブジェクトのループ

- `for...in`
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...in>  
  **※ 配列のループには使用できないので注意**

```js
const object = { a: 1, b: 2, c: 3 };

for (const key in object) {
  console.log(`${key}: ${object[key]}`);
}
```

#### 配列のループ

- `for...of`
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...of>

```js
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
```

NodeList のループにも使用できます。

```js
const articleParagraphs = document.querySelectorAll('article > p');

for (const paragraph of articleParagraphs) {
  paragraph.classList.add('read');
}
```

#### 配列のループ(IE)

IE(Internet Explorer)にも対応させるには、`for...of`構文が使えないため、forを使います。

- for
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for>

```js
const array1 = ['a', 'b', 'c'];

for (var i = 0; i < array1.length; i++) {
  var element = array1[i];
  console.log(element);
}
```

配列であればforEachメソッドを使うことも出来ます。

- `Array.prototype.forEach()`
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach>

```js
const array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element)
});
```

### 関数

- 関数
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions>
- アロー関数式（IE非対応）
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions>

### 式と演算子

- 式と演算子
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators>

### 数値と日付

- 数値と日付
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Numbers_and_dates>

### テキスト処理

- テキスト処理
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Text_formatting>

### インデックス付きコレクション

- インデックス付きコレクション
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Indexed_collections>

### キー付きコレクション

- キー付きコレクション
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Keyed_collections>

### オブジェクトでの作業

- オブジェクトでの作業
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Working_with_Objects>

### オブジェクトモデルの詳細

- オブジェクトモデルの詳細
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Details_of_the_Object_Model>

### 学習対象外

現場ではあまり使われないため、学習対象外です。  
IEに対応していなかったり、ライブラリを使用していたりであまり使われない機能です。

- プロミスの使用
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Using_promises>
- イテレーターとジェネレーター
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators>
- メタプログラミング
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Meta_programming>
- JavaScript モジュール
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Modules>

## 要素を取得する

querySelector はjQueryのようにセレクタでDOM要素を取得することが出来る  
ID指定での取得の場合、`getElementById`を使用する方が2〜3倍ほどパフォーマンスが良かった(Google Chrome)

- `document.get 〜`
  - `document.getElementById(id)`
    - <https://developer.mozilla.org/ja/docs/Web/API/Document/getElementById>
  - `document.getElementsByClassName(names)`
    - <https://developer.mozilla.org/ja/docs/Web/API/Document/getElementsByClassName>
  - `document.getElementsByName(name)`
    - <https://developer.mozilla.org/ja/docs/Web/API/Document/getElementsByName>
  - `document.getElementsByTagName(name)`
    - <https://developer.mozilla.org/ja/docs/Web/API/Document/getElementsByTagName>
- `document.querySelector 〜`
  - `セレクターを使用した DOM 要素の特定`
    - <https://developer.mozilla.org/ja/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors>
    - `document.querySelector(selectors)`
      - <https://developer.mozilla.org/ja/docs/Web/API/Document/querySelector>
    - `document.querySelectorAll(selectors)`
      - <https://developer.mozilla.org/ja/docs/Web/API/Document/querySelectorAll>

```html
<body>
    <input type="text" id="inputName" name="name" value="テキストボックスの値">
    <script>
        const inputNameElement = document.querySelector('#inputName'); // id指定で要素を取得
        // getElementById を使う場合↓
        //   const inputNameElement = document.getElementById('inputName'); // id指定で要素を取得
        console.log(inputNameElement.value); // 「テキストボックスの値」
    </script>
</body>
```

## window

JavaScriptの最上位オブジェクトということを覚えておきましょう。  

- window.window
  - <https://developer.mozilla.org/ja/docs/Web/API/Window/window>

よく使う`console`オブジェクトや`alert`メソッドも`window`オブジェクトのメンバになっています。

```js
window.console.log('message');
window.alert('message');
```

以下を実行するとwindowオブジェクトの内容がデベロッパーツールで見れます。

```js
console.log(window);
```

## 即時実行関数式

JavaScriptでグローバルスコープの関数・変数が増えていくと管理が困難になります。  
グローバルスコープの汚染を防ぐため、IIFEが使われます。  

- IIFE (即時実行関数式)
  - <https://developer.mozilla.org/ja/docs/Glossary/IIFE>

```js
let message = 'outer';
(function () {
    let message = 'inner'; // 関数内のみ有効
})();
alert(message); // outer
```

## タイマー

- `setTimeout()`
  - <https://developer.mozilla.org/ja/docs/Web/API/setTimeout>
- `clearTimeout(timeoutID)`
  - <https://developer.mozilla.org/ja/docs/Web/API/clearTimeout>
- `setInterval()`
  - <https://developer.mozilla.org/ja/docs/Web/API/setInterval>
- `clearInterval(intervalID)`
  - <https://developer.mozilla.org/ja/docs/Web/API/clearInterval>

## イベント

- イベントへの入門
  - <https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events>
- EventTarget.addEventListener()
  - <https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener>

## API

実業務ではAPIの呼び出しを行うことが多いため  
以下も覚えておきましょう。

- Fetch の使用
  - <https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch>
- `jQuery.post()`
  - <https://api.jquery.com/jquery.post/>

## template

APIで取得した情報を`<table>`で表示させるパターンは多いため、参考にしてください。  
`<template>`はIE非対応のため、現場で使用経験はありませんが、今後は増えていくと予想しています。

- `<template>: コンテンツテンプレート要素`
  - <https://developer.mozilla.org/ja/docs/Web/HTML/Element/template>
- テンプレートとスロットの使用
  - <https://developer.mozilla.org/ja/docs/Web/Web_Components/Using_templates_and_slots>
