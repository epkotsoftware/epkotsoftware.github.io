<?php
ini_set('display_errors', '1');
error_reporting(E_ALL);

const DB_DSN  = 'mysql:host=mysql; dbname=cri_sortable; charset=utf8mb4';
const DB_USER = 'root';
const DB_PASS = 'root';

$pdo = new PDO(DB_DSN, DB_USER, DB_PASS, [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
]);

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

    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');

    if ($name !== '') {
        $stmt = $pdo->prepare('INSERT INTO sortable (name, department_id, left_x, top_y) VALUES (:name, :department_id, 20, 20)');
        $stmt->execute([':name' => $name, ':department_id' => (int)$_POST['department_id']]);

        header('Location: index.php');
        exit;
    }
}

$stmt = $pdo->query(
    'SELECT s.*, g.department AS department_name
     FROM sortable AS s
     LEFT JOIN departments AS g ON s.department_id = g.id
     ORDER BY s.id'
);
$rows = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>メンバー配置</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="https://code.jquery.com/jquery-4.0.0.min.js"></script>
  <script src="https://code.jquery.com/ui/1.14.2/jquery-ui.min.js"></script>
  <script>
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
                    url : 'index.php',
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
  </script>
</head>
<body>

<header>
  <h1>メンバー配置</h1>
</header>

<main>
  <form method="post" action="" class="entry">
    <input type="text" name="name" placeholder="名前を入力" required>

    <select name="department_id">
      <option value="1">開発部</option>
      <option value="2">営業部</option>
    </select>

    <button type="submit">登録</button>
  </form>

  <div id="drag-area">
    <?php foreach ($rows as $row): ?>
      <div class="drag department<?= (int)$row['department_id'] ?>"
           data-id="<?= (int)$row['id'] ?>"
           style="left: <?= (int)$row['left_x'] ?>px; top: <?= (int)$row['top_y'] ?>px;">
        <span class="drag-id"><?= (int)$row['id'] ?></span>
        <?= htmlspecialchars($row['name']) ?>
        <span class="drag-department"><?= htmlspecialchars($row['department_name']) ?></span>
      </div>
    <?php endforeach; ?>
  </div>
</main>

</body>
</html>
