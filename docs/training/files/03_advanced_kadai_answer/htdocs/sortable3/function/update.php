<?php
require_once __DIR__ . '/../Controller/Connect.php';
require_once __DIR__ . '/../Controller/AppController.php';

// Ajax から送られてきた座標を保存する
if (isset($_POST['id'])) {
    $app = new AppController();
    $app->updateSortable((int)$_POST['id'], (int)$_POST['left'], (int)$_POST['top']);
}
