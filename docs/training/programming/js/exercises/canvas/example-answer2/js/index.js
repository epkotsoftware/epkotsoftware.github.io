(() => {
    // 要素取得
    const canvasBall = document.getElementById('canvasBall');
    const buttonAddRedBall = document.getElementById('buttonAddRedBall');
    const buttonAddBlueBall = document.getElementById('buttonAddBlueBall');
    const buttonStart = document.getElementById('buttonStart');
    const buttonStop = document.getElementById('buttonStop');

    // Controller
    const canvasController = new CanvasController(canvasBall);

    // Button onclickイベント
    buttonStart.addEventListener('click', (ev) => {
        canvasController.start();
    });
    buttonStop.addEventListener('click', (ev) => {
        canvasController.stop();
    });
    buttonAddRedBall.addEventListener('click', (ev) => {
        canvasController.addRedBall();
    });
    buttonAddBlueBall.addEventListener('click', (ev) => {
        canvasController.addBlueBall();
    });
})();
