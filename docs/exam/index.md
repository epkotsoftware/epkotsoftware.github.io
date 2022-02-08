# 試験

「`helper.js`」ファイルを新規作成し、以下の仕様を満たす[same関数](#same関数)を定義してください。  
初めての方は、[参考資料](#参考資料)に学習用の動画・サイトのリンクがあります。  
また、[禁止事項](#禁止事項)には目を通すようお願い致します。

- 言語
  - JavaScript
- 成果物
  - index.html
    - same関数の動作確認用HTMLファイル
  - helper.js
    - same関数を定義したJavaScriptファイル（確認対象）

## インデックス

| No. |  |
| --- | --- |
| 1 | [same関数](#same関数) |
| 2 | [例](#例) |
| 3 | [提出について](#提出について) |
| 4 | [参考資料](#参考資料) |
| 5 | [禁止事項](#禁止事項) |

## same関数

### 説明

指定された2つの値が等しいかどうかを判断します。

### 関数名

`same`

### パラメータ(引数)

- `value1`
  - 比較する最初の値。
- `value2`
  - 比較する2番目の値。

### 戻り値(返り値)

指定した2つの値が完全一致した場合は `true(boolean)`、 そうでなければ `false(boolean)` を返します。

## 例

以下は、same関数の使用例です。

### value1 = 1、value2 = 1、戻り値 = true

```js
// same関数を実行
let result = same(1, 1);

// same関数の結果を確認
document.write("(" + (typeof result) + ") " + result); // (boolean) true
```

### value1 = 2、value2 = 2、戻り値 = true

```js
// same関数を実行
let result = same(2, 2);

// same関数の結果を確認
document.write("(" + (typeof result) + ") " + result); // (boolean) true
```

### value1 = '1'、value2 = '1'、戻り値 = true

```js
// same関数を実行
let result = same('1', '1');

// same関数の結果を確認
document.write("(" + (typeof result) + ") " + result); // (boolean) true
```

### value1 = 1、value2 = 2、戻り値 = false

```js
// same関数を実行
let result = same(1, 2);

// same関数の結果を確認
document.write("(" + (typeof result) + ") " + result); // (boolean) false
```

### value1 = 1、value2 = '1'、戻り値 = false

※ 以下のパターンは、型が違うため不一致とします。

```js
// same関数を実行
let result = same(1, '1');

// same関数の結果を確認
document.write("(" + (typeof result) + ") " + result); // (boolean) false
```

## 提出について

成果物については「htdocs」フォルダを新規作成し、その中に成果物のファイルを格納し  
ZIP圧縮を行い、担当者までメールでお送りください。  

## 参考資料

### サイト

- JavaScript入門
  - <https://www.javadrive.jp/javascript/>
  - JavaScriptのコードを別のファイルに記述する
    - <https://www.javadrive.jp/javascript/before/index4.html>
  - 関数を定義する
    - <https://www.javadrive.jp/javascript/function/index2.html>
  - 等価演算子
    - <https://www.javadrive.jp/javascript/ope/index12.html>
  - 論理値
    - <https://www.javadrive.jp/javascript/ini/index6.html#section3_4>
- 検索
  - 「ZIP圧縮」
    - <https://www.google.com/search?q=ZIP圧縮>

### 動画

- HTML講座
  - <https://www.youtube.com/playlist?list=PLwM1-TnN_NN457PTxsvNXxVxN8fkbYHKU>
- JavaScript講座
  - <https://www.youtube.com/playlist?list=PLwM1-TnN_NN7-zdRV8YsGUB82VVhfYiWW>

## 禁止事項

- 第三者に本ページのURL・スクリーンショット・記載内容を見せることを禁止する。
- 第三者に本課題の協力を求めることを禁止する。 ※ 研修は本課題レベルのスキルがある前提で進むため。
