# JavaScriptプログラミング編 課題(canvas)

## はじめに

こちらは実務ではほとんど使用しないものなので  
業務時間内では1日(8h)までとします、続けて学習したい場合は業務時間外にお願いします。  


## 課題

この課題の制限時間は2時間です。  
制限時間が過ぎたら解答を確認し、応用に進みましょう。

---

Canvas上に赤いボールを横に動かす画面を作りましょう。  
Canvasの端に到達したら、逆方向に移動させます。  

<iframe title="画面" src="./example-answer1/index.html"></iframe>

HTMLは以下のサンプルを参考にしてください。

- [サンプル](./sample1.html)

処理はrequestAnimationFrameメソッドなどを使い  
以下を繰り返し、コマ送りにしていくイメージです。

1. 座標計算
1. Canvasを消去
1. 赤いボールを描画

今回の課題に使える参考サイトをまとめました。

- 参考
  - `IIFE (即時実行関数式)`
    - <https://developer.mozilla.org/ja/docs/Glossary/IIFE>
  - `Document.getElementById()`
    - <https://developer.mozilla.org/ja/docs/Web/API/Document/getElementById>
  - `Window.requestAnimationFrame()`
    - <https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame>
  - `キャンバス API`
    - <https://developer.mozilla.org/ja/docs/Web/API/Canvas_API>
  - `<canvas>: グラフィックキャンバス要素 width`
    - <https://developer.mozilla.org/ja/docs/Web/HTML/Element/canvas#attr-width>
  - `CanvasRenderingContext2D`
    - <https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D>
  - `CanvasRenderingContext2D.clearRect()`
    - <https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/clearRect>
  - `CanvasRenderingContext2D.arc()`
    - <https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/arc>
  - `CanvasRenderingContext2D.fill()`  （`#ff0000` のように16進カラーコードの指定も可能）
    - <https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill>

requestAnimationFrameが難しい場合、setIntervalやsetTimeoutというメソッドもあります。  
実務ではアニメーションを利用することが少ないため、こちらを使うことが多いです。  

- `setInterval()`
  - <https://developer.mozilla.org/ja/docs/Web/API/setInterval>
- `setTimeout()`
  - <https://developer.mozilla.org/ja/docs/Web/API/setTimeout>

## 課題解答例

課題が出来たら解答例も見てみましょう。  

- 解答例
  - [HTML](./example-answer1/index.html)
  - [js/classes/index.js](./example-answer1/js/index.js)

## 応用

クラス化し、複数のボールを動かせるようにしましょう。  
今回は縦に移動する青ボールも追加し、ボタンを押すことでCanvas上のボールを  
追加できるようにしましょう。  

HTMLは以下のサンプルを参考にしてください。

- [サンプル](./sample2.html)

「赤ボール追加」ボタン、「青ボール追加」ボタンでユーザーがボールを追加できるようにします。  
赤ボールは横に、青ボールは縦に動くようにします。  
ボールを追加する場所は、Canvas上のランダムの位置に追加してください。  

RedBallクラス、BlueBallクラスを定義し、プロパティとして座標を持ちます。  
インスタンス毎に描画処理をさせるイメージです。  

画面の動きについては、応用解答例のHTMLを参照してください。

```js
// JavaScriptクラス構文
class クラス {
  constructor(コンストラクタ引数1, コンストラクタ引数2, ...コンストラクタ引数N) {
    this.パブリックプロパティ = xxx;
  }
  メソッド(引数1, 引数2, ...引数N) {
    // 処理
    return 戻り値;
  }
}
```

- 参考
  - `Element: click イベント`
    - <https://developer.mozilla.org/ja/docs/Web/API/Element/click_event>
  - `Math.random()`
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random>

## 応用解答例

課題が出来たら解答例も見てみましょう。  
アニメーションの開始・停止も出来る様にしています。  

- 解答例
  - [HTML](./example-answer2/index.html)
  - [js/classes/balls.js](./example-answer2/js/classes/balls.js)
  - [js/classes/canvas-controller.js](./example-answer2/js/classes/canvas-controller.js)
  - [js/classes/index.js](./example-answer2/js/index.js)
