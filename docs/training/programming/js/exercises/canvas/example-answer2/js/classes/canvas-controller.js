class CanvasController {

  /**
   * (プライベートプロパティ) Canvas
   * @type {HTMLCanvasElement}
   */
  #canvas;
  /**
   * (プライベートプロパティ) Context2D
   * @type {CanvasRenderingContext2D}
   */
  #context;
  /**
   * (プライベートプロパティ) requestAnimationFrame 戻り値のリクエストID
   * @type {number}
   */
  #requestID;
  /**
   * (プライベートプロパティ) ボール配列
   * @type {Ball[]}
   */
  #balls;

  /**
   * CanvasController コンストラクタ
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    this.#canvas = canvas;
    this.#context = canvas.getContext('2d');
    this.#requestID = null;
    this.#balls = [];
  }

  start() {
    this.stop();
    const frameRequestCallback = (timestamp) => {
        // 画面を初期化
        this.#context.clearRect(0, 0, this.#canvas.clientWidth, this.#canvas.clientHeight);
        // 各ボールインスタンスのupdateメソッド呼び出し
        for (const ball of this.#balls) {
            ball.update(timestamp);
        }
        // 繰り返し
        this.#requestID = requestAnimationFrame(frameRequestCallback);
    }
    // 開始
    this.#requestID = requestAnimationFrame(frameRequestCallback);
  }

  stop() {
    if (this.#requestID !== null) {
        // 停止
        cancelAnimationFrame(this.#requestID);
        this.#requestID = null;
    }
  }

  addRedBall(){
    this.#pushBall(new RedBall(this.#context));
  }
  addBlueBall(){
    this.#pushBall(new BlueBall(this.#context));
  }

  #pushBall(ball){
    this.#balls.push(ball);
    ball.update(0);
  }
}
