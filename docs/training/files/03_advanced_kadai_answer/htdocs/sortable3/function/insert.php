<?php
require_once __DIR__ . '/../Controller/Connect.php';
require_once __DIR__ . '/../Controller/AppController.php';

$name = trim($_POST['name'] ?? '');

if ($name !== '') {
    $app = new AppController();
    $app->insertSortable($name, (int)($_POST['department_id'] ?? 0));
}

// 登録が終わったら、呼び出し元の画面へ戻す
header('Location: ../index.php');
exit;
