# 試験

## 試験内容

「`helper.js`」ファイルを新規作成し、仕様を満たす[same関数](#same関数)を定義してください。  
初めての方は、[参考資料](#参考資料)に学習用の動画・サイトのリンクがあります。  
また、[禁止事項](#禁止事項)には目を通すようお願いいたします。  
  
動作確認には[動作確認用HTMLファイル](#動作確認用htmlファイル)をお使いください。

- 言語
  - JavaScript
- 成果物
  - index.html
    - same関数の動作確認用HTMLファイル
  - helper.js
    - same関数を定義したJavaScriptファイル（確認対象）

## 禁止事項

- 第三者に本ページのURL・スクリーンショット・記載内容を見せることを禁止する。
- 第三者に本課題の協力を求めることを禁止する。 ※ 研修は本課題のスキルがある前提で進むため。

## 動作確認用HTMLファイル

- 以下のZIPファイルを解凍してお使いください。
  - [htdocs.zip](./htdocs.zip)

## same関数

same関数の仕様は以下になります。

### 説明

指定された3つの値が等しいかどうかを判断します。

### 関数名

`same`

### パラメータ(引数)

- `value1`
  - 比較する最初の値。
- `value2`
  - 比較する2番目の値。
- `value3`
  - 比較する3番目の値。

### 戻り値(返り値)

指定した3つの値が完全一致した場合は `true(boolean)`、 そうでなければ `false(boolean)` を返します。

## 例

以下は、same関数の使用例です。

### 戻り値がtrueになるパターン

```js
console.log(same(0, 0, 0));
console.log(same(1, 1, 1));
console.log(same('0', '0', '0'));
console.log(same('a', 'a', 'a'));
```

### 戻り値がfalseになるパターン

```js
console.log(same(0, 0, 1));
console.log(same(0, 1, 0));
console.log(same(1, 0, 0));
console.log(same(0, 0, '0'));
console.log(same(0, '0', 0));
console.log(same('0', 0, 0));
console.log(same('a', 'a', 'b'));
console.log(same('a', 'b', 'a'));
console.log(same('b', 'a', 'a'));
```

## 提出について

成果物については「htdocs」フォルダを新規作成し、その中に成果物のファイルを格納し  
ZIP圧縮を行い、担当者までメールでお送りください。  
**iCloudメールやGmail等では、そのまま添付しても送信できないためご注意ください。**  

- 提出前のチェックリスト
  - `index.html` の画面でエラーが出ていないか
  - `index.html` の画面で全パターン「OK」となっているか
  - `helper.js` に `console.log` 等の動作確認のためのコードが残っていないか
  - `helper.js` のTODOコメントが削除されているか  
  （基本的に成果物にはTODOをつけたコメントは残しません）
  - [same関数](#same関数) が仕様通りに定義出来ているか

### iCloudメールで送信する場合

ZIPファイルを添付しても届かないことがあるため  
iCloudファイル共有を利用して、リンクを送信してください。  

- [iCloudファイル共有を使ってほかのユーザとフォルダや書類を共有する](https://support.apple.com/ja-jp/guide/mac-help/mchl91854a7a/mac)

### ZIPファイルが添付出来ない場合

セキュリティ上の理由でファイルを添付出来ないことがあります
添付出来ない場合、ドライブを使用してご送付ください。

- [Gmail](https://mail.google.com/)
  - ZIPファイルを直接添付することが出来ないので  
   「ドライブを使用してファイルを挿入」で添付してください。

### 正常時の画面表示例

![result.png](./images/result.png)

## 参考資料

### エディタ

JavaScriptを書くには「メモ帳」などのアプリでも可能ですが  
「Visual Studio Code」がおすすめで、HTML講座動画内でも使われています。  
サブのエディタとして「サクラエディタ」等も良いです。  

- Visual Studio Code (ビジュアル スタジオ コード)
  - <https://azure.microsoft.com/ja-jp/products/visual-studio-code/>
- サクラエディタ
  - <https://sakura-editor.github.io/>

### サイト

- `現代の JavaScript チュートリアル`
  - <https://ja.javascript.info/>
- `HTML: HyperText Markup Language | MDN`
  - <https://developer.mozilla.org/ja/docs/Web/HTML>
- `JavaScript | MDN`
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript>
  - `入門編 - JavaScript | MDN`
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Introduction>
  - `文法とデータ型 - JavaScript | MDN`
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Grammar_and_Types>
  - `関数 - JavaScript | MDN`
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions>
  - `式と演算子 - JavaScript | MDN`
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators>

### 動画

- HTML講座
  - <https://www.youtube.com/playlist?list=PLwM1-TnN_NN457PTxsvNXxVxN8fkbYHKU>
- JavaScript講座
  - <https://www.youtube.com/playlist?list=PLwM1-TnN_NN7-zdRV8YsGUB82VVhfYiWW>

## 試験資料について

本試験資料はプログラミング言語公式サイトのAPIリファレンス等を参考に作成しています。

- 【C#】 `.NET API ブラウザー`
  - <https://docs.microsoft.com/ja-jp/dotnet/api/>
  - `Math.Max メソッド`
    - <https://docs.microsoft.com/ja-jp/dotnet/api/system.math.max#system-math-max(system-int32-system-int32)>
- 【PHP】 `PHPマニュアル`
  - <https://www.php.net/manual/ja/>
  - `max`
    - <https://www.php.net/manual/ja/function.max.php>
- 【JavaScript】 MDN Web Docs
  - <https://developer.mozilla.org/ja/>
  - `Math.max()`
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/max>
