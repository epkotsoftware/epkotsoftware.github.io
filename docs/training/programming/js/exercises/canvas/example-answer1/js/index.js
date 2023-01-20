(() => {
    // 要素取得
    const canvasBall = document.getElementById('canvasBall');
    const ctx = canvasBall.getContext('2d');

    let x = 32;
    let y = 32;
    let step = 6;
    let stepX = step;

    const frameRequestCallback = (timestamp) => {
        // 画面を初期化
        ctx.clearRect(0, 0, canvasBall.clientWidth, canvasBall.clientHeight);

        // _currentXを更新して横に動かす、壁にあたったら逆方向に移動
        const width = canvasBall.width;
        if (0 < stepX && width <= x) {
            stepX = -step;
        } else if (stepX < 0 && x <= 0) {
            stepX = step;
        }
        x += stepX;

        // 赤い円を描画
        ctx.beginPath();
        ctx.arc(x, y, 16, 0, Math.PI * 2);
        ctx.fillStyle = '#ff0000';
        ctx.fill();

        // 繰り返し
        requestAnimationFrame(frameRequestCallback);
    }
    // 開始
    requestAnimationFrame(frameRequestCallback);
})();
