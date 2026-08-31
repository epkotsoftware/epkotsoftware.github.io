$(function () {
    $('.drag').draggable({
        containment: '#drag-area',
        cursor: 'move',

        // ドラッグが終わったときに動く
        stop: function () {
            const id   = $(this).data('id');
            const left = $(this).position().left;
            const top  = $(this).position().top;

            $.ajax({
                type: 'POST',
                url : './function/update.php',
                data: { id: id, left: left, top: top }
            })
            .done(function () {
                console.log('保存しました');
            })
            .fail(function (xhr) {
                console.log('失敗:', xhr.status);
            });
        }
    });
});
