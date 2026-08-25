<?php

class AppController extends Connect
{
    /** 新しいメンバーを登録する */
    public function insertSortable(string $name, int $departmentId): void
    {
        $stmt = $this->pdo->prepare(
            'INSERT INTO sortable (name, department_id, left_x, top_y)
             VALUES (:name, :department_id, 20, 20)'
        );
        $stmt->execute([
            ':name'      => $name,
            ':department_id' => $departmentId,
        ]);
    }

    /** ドラッグした位置を保存する */
    public function updateSortable(int $id, int $left, int $top): void
    {
        $stmt = $this->pdo->prepare(
            'UPDATE sortable
             SET left_x = :left, top_y = :top
             WHERE id = :id'
        );
        $stmt->execute([
            ':left' => $left,
            ':top'  => $top,
            ':id'   => $id,
        ]);
    }
}
