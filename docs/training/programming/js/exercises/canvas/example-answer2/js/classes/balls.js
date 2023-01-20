class Ball {
  /**
   * (プロパティ) 対象のCanvas
   * @type {HTMLCanvasElement}
   */
  _canvas;
  /** (プロパティ)対象の二次元描画コンテキスト */
  /**
   *
   */
  _context;
  /** (プロパティ)現在のX座標 */
  _currentX;
  /** (プロパティ)現在のY座標 */
  _currentY;
  /** (プロパティ)ボールの半径 */
  _radius;
  /** (プロパティ)描画時の塗りつぶしスタイル */
  _fillStyle;

  /**
   * コンストラクタ
   * @param {CanvasRenderingContext2D} context
   * @param {string|CanvasGradient|CanvasPattern} fillStyle
   */
  constructor(context, fillStyle) {
    this._context = context;
    this._currentX = Math.floor(Math.random() * context.canvas.width); // ランダム
    this._currentY = Math.floor(Math.random() * context.canvas.height); // ランダム
    this._fillStyle = fillStyle;
  }

  /**
   * 更新（描画処理を行う）
   * @param {number} timestamp
   */
  update(timestamp) {
    // 継承先のクラスで実装
    // console.debug(timestamp);
  }

  draw() {
    const ctx = this._context;
    // 円を描画
    ctx.beginPath();
    ctx.arc(this._currentX, this._currentY, 16, 0, Math.PI * 2);
    ctx.fillStyle = this._fillStyle;
    ctx.fill();
  }
}

class RedBall extends Ball {
  _step;
  _stepX;

  /**
   * @param {CanvasRenderingContext2D} context
   */
  constructor(context) {
    super(context, "#ff0000");
    this._step = 6;
    this._stepX = this._step;
  }

  update(timestamp) {
    super.update(timestamp);

    // _currentXを更新して横に動かす、壁にあたったら逆方向に移動
    const width = this._context.canvas.width;
    if (0 < this._stepX && width <= this._currentX) {
      this._stepX = -this._step;
    } else if (this._stepX < 0 && this._currentX <= 0) {
      this._stepX = this._step;
    }
    this._currentX += this._stepX;

    // 描画(Ball::draw)
    this.draw();
  }
}

class BlueBall extends Ball {
  _step;
  _stepY;

  /**
   * @param {CanvasRenderingContext2D} context
   */
  constructor(context) {
    super(context, "#0000ff");
    this._step = 6;
    this._stepY = this._step;
  }

  update(timestamp) {
    super.update(timestamp);

    // _currentYを更新して縦に動かす、壁にあたったら逆方向に移動
    const height = this._context.canvas.height;
    if (0 < this._stepY && height <= this._currentY) {
      this._stepY = -this._step;
    } else if (this._stepY < 0 && this._currentY <= 0) {
      this._stepY = this._step;
    }
    this._currentY += this._stepY;

    // 描画(Ball::draw)
    this.draw();
  }
}
