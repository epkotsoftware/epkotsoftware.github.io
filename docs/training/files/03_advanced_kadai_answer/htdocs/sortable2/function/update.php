<?php
require_once __DIR__ . '/../config/config.php';

// Ajax から送られてきた座標を保存する
if (isset($_POST['id'])) {
    $stmt = $pdo->prepare(
        'UPDATE sortable
         SET left_x = :left, top_y = :top
         WHERE id = :id'
    );
    $stmt->execute([
        ':left' => (int)$_POST['left'],
        ':top'  => (int)$_POST['top'],
        ':id'   => (int)$_POST['id'],
    ]);
}
