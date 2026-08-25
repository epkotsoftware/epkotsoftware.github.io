<?php
require_once __DIR__ . '/../config/config.php';

$name = trim($_POST['name'] ?? '');

if ($name !== '') {
    $stmt = $pdo->prepare(
        'INSERT INTO sortable (name, department_id, left_x, top_y)
         VALUES (:name, :department_id, 20, 20)'
    );
    $stmt->execute([
        ':name'      => $name,
        ':department_id' => (int)($_POST['department_id'] ?? 0),
    ]);
}

// 登録が終わったら、呼び出し元の画面へ戻す
header('Location: ../index.php');
exit;
