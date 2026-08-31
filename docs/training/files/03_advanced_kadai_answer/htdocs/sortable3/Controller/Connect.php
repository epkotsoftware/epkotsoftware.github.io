<?php

class Connect
{
    private const DB_DSN  = 'mysql:host=mysql; dbname=cri_sortable; charset=utf8mb4';
    private const DB_USER = 'root';
    private const DB_PASS = 'root';

    protected PDO $pdo;

    public function __construct()
    {
        $this->pdo = new PDO(self::DB_DSN, self::DB_USER, self::DB_PASS, [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]);
    }
}

class SelectData extends Connect
{
    public function select(string $sql): array
    {
        return $this->pdo->query($sql)->fetchAll();
    }
}
