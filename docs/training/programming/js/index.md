# 株式会社エプコットソフトウェア ～ プログラミング編 JavaScript

他言語のプログラミング基礎が出来ていて、HTML・CSSの知識がある方を対象とした資料です。

## 目次

| No. |  |
| :---: | --- |
| 1 | [はじめに](#はじめに) |
| 2 | [Internet Explorer](#internet-explorer) |
| 3 | [動画](#動画) |
| 4 | [JavaScriptガイド](#javascriptガイド) |
| 5 | [要素を取得する](#要素を取得する) |
| 6 | [window](#window) |
| 7 | [即時実行関数式](#即時実行関数式) |
| 8 | [タイマー](#タイマー) |
| 9 | [イベント](#イベント) |
| 10 | [API](#api) |
| 11 | [template](#template) |
| 12 | [JavaScript高速化について](#javascript高速化について) |
| 13 | [WebAPI](#webapi) |
| 14 | [コーディングスタイル](#コーディングスタイル) |
| 15 | [JavaScript課題](#javascript課題) |

## はじめに

JavaScriptは情報が多く出ており、誤った情報や古くなってしまった情報も多いため  
Mozillaの公式ウェブサイト(MDN)をメインに学習していきます。  
また、ライブラリ(jQuery等)・フレームワーク(Vue.js等)は本資料では学習対象外です。  
見ることは少なそうですが、「HTML Living Standard」を策定しているWHATWGのリンクも載せておきます。  

- Wikipedia - MDN Web Docs
  - <https://ja.wikipedia.org/wiki/MDN_Web_Docs>
- MDN Web Docs
  - <https://developer.mozilla.org/>
- Wikipedia - Web Hypertext Application Technology Working Group
  - <https://ja.wikipedia.org/wiki/Web_Hypertext_Application_Technology_Working_Group>
- Web Hypertext Application Technology Working Group (WHATWG)
  - <https://whatwg.org/>

## Internet Explorer

2022年6月16日Internet Explorer(以下、IE)のサポート終了に伴い  
IE非対応だった機能が使えるようになります。  
しかし、既存のシステムでは古い手法が使われることが多いため注意が必要です。

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

アロー関数式を使うと少し短く書けます（IE非対応）。

- アロー関数式
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions>

```js
let message = 'outer';
(() => {
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

### 非同期処理

API(Web API)を実行する際は非同期処理を使用します。  
レスポンスによく使われるJSONについても学習しましょう。

- 動画
  - 【JavaScript入門 #8】WebAPIを叩いてみよう！async await構文を使うと簡単！【ヤフー出身エンジニアの入門プログラミング講座】
    - <https://youtu.be/QugDLcOo_EE>
  - JSONについてわかりやすく説明します
    - <https://youtu.be/us6xwYvThh4>
  - JavaScriptの非同期処理解説シリーズ
    - <https://www.youtube.com/playlist?list=PL3PnJ18ZwZneYxvTkTGMgCh07OoTYlYw->

#### 並列処理との違い

非同期処理というと並列処理・マルチスレッドという言葉も出てきますが  
JavaScript は基本的にシングルスレッドで動作し、同時に処理が実行されることはありません（後述の Web Workers API を使用する場合は除く）。  

`async function`を定義した場合、非同期関数となりますが  
自身で作成したJavaScriptはシングルスレッドで動作するため  
マルチスレッドでは出来ないDOM操作を行うことが出来ます。  

例えば、以下の処理で`test`関数を実行した場合、リクエスト処理自体は  
メインスレッド外で行われますが、それ以外の処理はメインスレッドで実行されます。  

```js
function test() {
  console.log('test A');
  testAsync();
  console.log('test B');
}
/**
 * @returns {Promise}  ※ 非同期(async)関数では暗黙的に戻り値がPromiseになります。
 */
async function testAsync() {
  console.log('testAsync A');

  const url = 'https://geocoding-api.open-meteo.com/v1/search?name=Tokyo';
  const p = fetch(url).then(r => r.json())
  console.log('testAsync B');
  const obj = await p;
  console.log('testAsync C');
}
```

上記コードの場合、await以降の処理（`testAsync C`）が  
`test`関数完了以降に実行されるように、処理の順番待ち状態になります。  
その為、処理`test B`が何分もかかるような重い処理であっても、`testAsync C`の処理は並列で行われることはなく  
必ず処理`test B`が終わった後に実行されるようになります。

```log
test A
testAsync A
testAsync B
test B
testAsync C
```

#### 別スレッドで処理を行うには

別スレッドで処理を行いたい場合は  
「Web Workers API」を使うことで実現可能です。  
実務で使用するのは稀で難しい話になってくるため、こういうものがあるという程度の理解で十分です。

- Web Workers API
  - <https://developer.mozilla.org/ja/docs/Web/API/Web_Workers_API>

`new Worker('xxx.js');` のようなコードがあった場合、`xxx.js`は  
別スレッド（ワーカースレッド）で行われる処理と認識してください。  
メインスレッド以外では、DOM操作を行うことが出来ないのでご注意ください。  

重い処理はサーバー側に任せることがほとんどで  
JavaScriptで時間がかかる処理は、DOM操作が必要なものが多く  
また、複雑なテストケースが増えてしまうため  
JavaScript経験が長い筆者でもWorkerが必要になったことは、一度もありません。

## template

APIで取得した情報を`<table>`で表示させるパターンは多いため、参考にしてください。  
`<template>`はIE非対応のため、現場で使用経験はありませんが、今後は増えていくと予想しています。

- `<template>: コンテンツテンプレート要素`
  - <https://developer.mozilla.org/ja/docs/Web/HTML/Element/template>
- テンプレートとスロットの使用
  - <https://developer.mozilla.org/ja/docs/Web/Web_Components/Using_templates_and_slots>

## JavaScript高速化について

JavaScriptに限らず、昔と違いセキュリティや可読性が重視されますので  
簡易的で大きくパフォーマンスが改善できるものをピックアップします。  

### script(defer属性)

以下が参考になります。

- `<script> タグに async / defer を付けた場合のタイミング`
  - <https://qiita.com/phanect/items/82c85ea4b8f9c373d684>
  - `HTML Standard - The script element`
    - <https://html.spec.whatwg.org/multipage/scripting.html#attr-script-async>

`defer`属性を使うことで、HTMLパースとJSファイルのダウンロードを並列で行い  
`DOMContentLoaded`イベント直前に、記載順通りにスクリプトを実行します。  
`defer`属性を使う場合、`head`要素内に`script`を記載するようにしましょう。  

`async`属性は広告表示等、独立したJSを実行するのに適しています。  
詳細については割愛しますが、`async`はデメリットが多いため  
`defer`属性の利用をお勧めします。

#### defer属性を使う際の注意点

以下のような`src`属性がない`script`要素（インラインスクリプト）には、
`defer`属性は効果がありません。

```html
  <!-- NG: deferの効果なし -->
  <script defer>
    console.log('インラインスクリプト');
  </script>
```

defer属性を指定したJSファイル実行後に、インラインスクリプトを実行したい場合は  
`DOMContentLoaded`イベントで処理を行うことで解決します。  

```html
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>API</title>
  <script defer src="main.js"></script><!-- main.js には console.log('main'); を記載 -->
  <script>
    // main.js 実行前
    console.log('インラインスクリプト');

    // DOMContentLoaded
    document.addEventListener('DOMContentLoaded', (event) => {
    // main.js 実行後
      console.log('DOMContentLoaded: インラインスクリプト');
    });
  </script>
</head>
```

ログ内容

```log
インラインスクリプト
main
DOMContentLoaded: インラインスクリプト
```

### Reflow

まず、JavaScript高速化で意識する必要があるのは  
DOMアクセスで発生するReflow(再フロー、リフロー)を抑える事です。  

- <https://developer.mozilla.org/ja/docs/Glossary/Reflow>

これは他の言語・プラットフォームでも同様で、時間のかかる画面表示更新を抑えることで高速化が可能になります。  

#### DocumentFragment

ループでDOM要素を大量に追加する際には、DocumentFragmentを使用するとReflowの抑制が出来ます。  

- Document.createDocumentFragment()
  - <https://developer.mozilla.org/ja/docs/Web/API/Document/createDocumentFragment>

例えば、`table`要素に`tr`要素を追加する必要がある時に
単純に追加してしまうと以下のような流れになります。

1. `table`要素に`tr`要素を追加
1. Reflow (自動)
1. `table`要素に`tr`要素を追加
1. Reflow (自動)
1. `table`要素に`tr`要素を追加
1. Reflow (自動)

DocumentFragmentを使うと以下の流れです。

1. `DocumentFragment`生成
1. `DocumentFragment`に`tr`要素を追加
1. `DocumentFragment`に`tr`要素を追加
1. `DocumentFragment`に`tr`要素を追加
1. `table`要素に`DocumentFragment`（3つの`tr`要素）を追加
1. Reflow (自動)

Reflowが抑えられ、追加する要素が増えるほど  
高速化が期待できます。

#### textContent

textContent を使用することでXSS対策が出来、Reflow抑制もできるので積極的に使いましょう。

- Node.textContent
  - <https://developer.mozilla.org/ja/docs/Web/API/Node/textContent>

## WebAPI

無料で使えるWebAPIです。  
JavaScriptのFetchAPIで利用が可能です。

- `【Open-Meteo】 Geocoding API`
  - <https://open-meteo.com/en/docs/geocoding-api>
  - 使用例
    - 「Tokyo」で検索
      - nameパラメータに「Tokyo」を指定します。 結果はJSONで返ってきます。
        - <https://geocoding-api.open-meteo.com/v1/search?name=Tokyo>
    - 「Yokohama」で検索
      - nameパラメータに「Yokohama」を指定します。 結果はJSONで返ってきます。
        - <https://geocoding-api.open-meteo.com/v1/search?name=Yokohama>
- `【Open-Meteo】 Weather Forecast API`
  - <https://open-meteo.com/en/docs>
  - 使用例
    - 「緯度: 35.75  経度: 139.75」で、現在の天気を検索
      - 以下のパラメータを指定します。 結果はJSONで返ってきます。
        - latitude: `35.75`
        - longitude: `139.75`
        - current_weather: `true`
        - timezone: `Asia/Tokyo`
      - <https://api.open-meteo.com/v1/forecast?latitude=35.75&longitude=139.75&current_weather=true&timezone=Asia/Tokyo>

以下は、「Geocoding API」をfetchで使った例です。

```js
// JavaScript
(async () => {
  // geocodeAsync関数(ユーザー定義)を呼び出し obj に結果を代入
  //   name = Tokyo で検索
  const obj = await geocodeAsync('Tokyo');
  console.log(obj);

  /**
   * Geocoding APIを呼び出します。
   * @param {string} name 名前
   * @returns {Promise}
   */
  function geocodeAsync(name) {
    // fetch メソッド  resource 引数
    const url = new URL('https://geocoding-api.open-meteo.com/v1/search');
    url.search =  new URLSearchParams({ name: name, language: 'ja', count: 100 });
    const resource = url.href;
    // fetch メソッド  init 引数
    const init = { method: 'GET' };

    // Promise.prototype.then メソッド  onFulfilled 引数
    /**
     * @param {Response} value
     * @returns {Promise}
     */
    const onFulfilled = (value) => {
      if (!value.ok) {
        // HTTPステータスコードが 200~299 以外の場合にエラー
        console.error('リクエスト失敗');
        throw new Error(value.status + ' (' + value.statusText + ')');
      }
      return value.json();
    };
    // Promise.prototype.then メソッド  onRejected 引数
    const onRejected = (reason) => {
      console.error('リクエスト失敗');
      throw reason;
    };

    // fetch メソッド実行
    return fetch(resource, init).then(onFulfilled, onRejected);
  }
})();
```

- 参考
  - `非同期関数`
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/async_function>
  - `URL`
    - <https://developer.mozilla.org/ja/docs/Web/API/URL>
  - `Fetch API`
    - <https://developer.mozilla.org/ja/docs/Web/API/Fetch_API>
  - `Promise.prototype.then()`
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then>
  - `Response`
    - <https://developer.mozilla.org/ja/docs/Web/API/Response>

## コーディングスタイル

筆者はJavaScriptにコーディングスタイルがあった現場は未経験（自社開発では独自のコーディングスタイルを自分で作成）  
ですが、コーディングスタイルの「Airbnb」は理由等も書かれており、  
納得できるものが多いので学習する上でも個人的にはおすすめです。  
MDNでも推奨しています。

- MDN JavaScript のコード例を整形するためのガイドライン
  - <https://developer.mozilla.org/ja/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript>
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

`for...of`は「bad」で`forEach`が「good」になっていますが、`break`、`continue`、`return`を使う場合  
`for...of`の方が良かったりするので、あくまでも記載されているケースの場合とお考えください。  
最近では`for...of`の処理速度も向上してきています。

- [Airbnb JavaScript Style Guide Iterators and Generators](https://github.com/airbnb/javascript#iterators-and-generators)

## JavaScript課題

- [JavaScript課題](./exercises/index.md)
