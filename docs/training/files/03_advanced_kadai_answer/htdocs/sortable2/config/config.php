<?php
ini_set('display_errors', '1');
error_reporting(E_ALL);

const DB_DSN  = 'mysql:host=mysql; dbname=cri_sortable; charset=utf8mb4';
const DB_USER = 'root';
const DB_PASS = 'root';

$pdo = new PDO(DB_DSN, DB_USER, DB_PASS, [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
]);
