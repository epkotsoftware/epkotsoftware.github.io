<?php
require_once __DIR__ . '/config/config.php';

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
  <script src="js/sort.js" defer></script>
</head>
<body>

<header>
  <h1>メンバー配置</h1>
</header>

<main>
  <form method="post" action="./function/insert.php" class="entry">
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
