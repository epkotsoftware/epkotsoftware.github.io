$(function () {

    // Laravel は POST・PATCH・DELETE に CSRF トークンを要求する。
    // <meta name="csrf-token"> の値を、Ajax の全リクエストに自動で付ける
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('.drag').draggable({
        containment: '#drag-area',
        cursor: 'move',

        // ドラッグが終わったときに動く
        stop: function () {
            const id   = $(this).data('id');
            // position() は小数を返すことがある。
            // Laravel 側は integer を要求するので、整数にしてから送る
            const left = Math.round($(this).position().left);
            const top  = Math.round($(this).position().top);

            $.ajax({
                type: 'PATCH',
                url : '/sortable/' + id,
                data: { left: left, top: top }
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
