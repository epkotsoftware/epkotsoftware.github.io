# 株式会社エプコットソフトウェア ～ PHPプログラミング編 基本的な構文

## 目次

| No. |  |
| :---: | --- |
| 1 | [PHPタグ](#phpタグ) |
| 2 | [PHPで画面を作る](#phpで画面を作る) |
| 3 | [PHP画面例](#php画面例) |
| 4 | [PHPマニュアル](#phpマニュアル) |

## PHPタグ

ここで紹介する以外にも短縮形のタグがありますが  
「`<?php ?>`」と「`<?= ?>`」を使います（公式でも推奨）。

| タグ | 名前 | 解説 |
| :---: | --- | --- |
| `<?php` | 開始タグ | PHPの開始タグ |
| `<?=` | echoタグ | `<?php echo` を短縮したもの |
| `?>` | 終了タグ | PHPの終了タグ、省略するケースあり |

### クラスを定義する場合

プログラミングでは、1クラス・1ファイルにするのが基本です。  
PHPコードしか含まないファイルの場合、終了タグ（`?>`）を省略します（公式でも推奨）。  
以下は「`Foo.php`」ファイルに「`Foo`」クラスを定義した例です。  

```php
<?php
namespace Vendor\Model;

class Foo
{
}
```

### 画面を作る場合

PHPフレームワークの「Laravel」のように  
PHP部分とHTML部分を極力分けることをおすすめします。

```php
<?php
// ここからPHP

// ここまでPHP
?>
<!-- ここからHTML -->
<!DOCTYPE html>
<html lang="ja">

<head>
    <title></title>
</head>

<body>

</body>

</html>
```

## PHPで画面を作る

### 値の埋め込み

単純にechoタグ(`<?= ?>`)を使うだけでも埋め込む事が出来ますが  
「`<`」、「`>`」などのHTMLに使われる記号をそのまま埋め込んでしまうと  
HTMLタグとして認識されてしまい、ページを改竄（かいざん）されてしまうこともあります。  
`htmlspecialchars`関数を使ってエスケープ処理を行います。  

```php
<?= htmlspecialchars(埋め込みたい文字列) ?>
```

さっそく試してみましょう。

```php
<?php
$heading1 = '<見出し>'; // 「`<`」、「`>`」が含まれる
?>
<h1><?= htmlspecialchars($heading1) ?></h1>
```

上記を実行すると以下のHTMLが生成されます。

```html
<h1>&lt;見出し&gt;</h1>
```

ブラウザで表示すると以下のように表示されます。

```txt
<見出し>
```

### 繰り返し処理

```php
<?php
$sports = ['サッカー', '野球', 'バスケットボール'];
?>
<table>
    <thead>
        <tr>
            <th>No.</th>
            <th>スポーツ</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($sports as $i => $sport) { ?>
            <tr>
                <td><?= $i + 1 ?></td>
                <td><?= htmlspecialchars($sport) ?></td>
            </tr>
        <?php } ?>
    </tbody>
</table>
```

以下のように出力されます（見やすくするためフォーマットしています）

```html
<table>
    <thead>
        <tr>
            <th>No.</th>
            <th>スポーツ</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>サッカー</td>
        </tr>
        <tr>
            <td>2</td>
            <td>野球</td>
        </tr>
        <tr>
            <td>3</td>
            <td>バスケットボール</td>
        </tr>
    </tbody>
</table>
```

ブラウザで表示すると以下のように表示されます。

<iframe title="テーブル" src="./html/table/index.html"></iframe>

## PHP画面例

`$data`変数には表示するための情報を全て格納しています。  
これは、PHPフレームワークのLaravelなどで  
ControllerからViewに連想配列を渡すのをイメージしています。  

extract関数を使って連想配列をそれぞれの変数に格納しています。  

```php
<?php
// ここからPHP

$data = [
    'subtitle' => 'サブタイトル',
    'h1' => '見出し１',
    'users' => [
        // 1レコード目
        [
            'id' => '101',
            'name' => 'NAME1',
            'roles' => [
                ['name' => 'ROLE1'],
                ['name' => 'ROLE2'],
            ],
        ],
        // 2レコード目
        [
            'id' => '102',
            'name' => '<NAME2>',
            'roles' => [],
        ],
    ]
];

// 連想配列のキーを変数名とし、値を変数に格納する（$subtitle, $h1, $users に格納）
extract($data);

// ここまでPHP
?>
<!-- ここからHTML -->
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <!-- titleタグ内のサブタイトルにPHPの処理を埋め込む（$subtitle変数の中身） -->
    <title>TEST - <?= htmlspecialchars($subtitle) ?></title>
</head>

<body>
    <header class="bg-dark">
        <nav class="navbar navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <!-- h1タグ内にPHPの処理を埋め込む（$h1変数の中身） -->
                    <h1><?= htmlspecialchars($h1) ?></h1>
                </a>
            </div>
        </nav>
    </header>
    <main class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>ROLE</th>
                </tr>
            </thead>
            <tbody>
                <!-- tbodyタグ内にPHPの処理を埋め込む（$users変数の中身） -->
                <?php foreach ($users as $i => $user) { ?>
                    <tr>
                        <td><?= $i + 1 ?></td>
                        <td><?= htmlspecialchars($user['id']) ?></td>
                        <td><?= htmlspecialchars($user['name']) ?></td>
                        <td>
                            <!-- 複雑なPHP処理を埋め込む -->
                            <?php
                            // ここからPHP
                            if ($user['roles'] === []) {
                                // echo で出力
                                echo 'なし';
                            } else {
                                foreach ($user['roles'] as $role) {
                                    // echo で出力
                                    echo htmlspecialchars($role['name']) , '<br>';
                                }
                            }
                            // ここまでPHP
                            ?>
                        </td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </main>
</body>

</html>
```

ブラウザで表示すると以下のように表示されます。

<iframe title="例" src="./html/example/index.html" style="height:300px;"></iframe>

## PHPマニュアル

資料作成で参考にしたPHPマニュアルのリンクです。

- `基本的な構文`
  - <https://www.php.net/manual/ja/language.basic-syntax.php>
  - `PHP タグ`
    - <https://www.php.net/manual/ja/language.basic-syntax.phptags.php>
- `htmlspecialchars`
  - <https://www.php.net/manual/ja/function.htmlspecialchars.php>
- `extract`
  - <https://www.php.net/manual/ja/function.extract.php>
- `制御構造に関する別の構文`
  - <https://www.php.net/manual/ja/control-structures.alternative-syntax.php>
