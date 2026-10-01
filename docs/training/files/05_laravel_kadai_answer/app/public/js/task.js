$(function () {

    // Laravel は POST・PATCH・DELETE に CSRF トークンを要求する
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    // 完了ボタン。あとから追加された行にも効くよう、親に預けておく
    $('#task-list').on('click', '.done', function () {
        const item = $(this).closest('.task');
        const id   = item.data('id');
        const name = item.find('.task-name').text();

        // 押し間違いを防ぐ。いいえなら、ここで止まる
        if (!window.confirm('「' + name + '」を完了にします。よろしいですか？')) {
            return;
        }

        $.ajax({
            type: 'DELETE',
            url : '/task/' + id
        })
        .done(function () {
            item.remove();

            // 全部消えたら、空のときの表示に戻す
            if ($('#task-list .task').length === 0) {
                $('#task-list').append('<li class="empty">タスクはありません</li>');
            }
        })
        .fail(function (xhr) {
            console.log('失敗:', xhr.status);
            window.alert('完了にできませんでした。');
        });
    });

});
