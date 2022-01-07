# プログラミング

## 課題1

指定した3つの値が完全一致した場合は true  
それ以外の場合は false を返すHelperクラス・メソッドを作成してください。  

### kadai01.php

```php
<?php
require_once("app/Helper.php");
use App\Helper;

echo "<h2>TRUEパターン</h2>";
var_dump(Helper::same(1, 1, 1)); // bool(true)
echo "<br>";
var_dump(Helper::same(2, 2, 2)); // bool(true)
echo "<h2>FALSEパターン</h2>";
var_dump(Helper::same(1, 1, 2)); // bool(false)
echo "<br>";
var_dump(Helper::same(1, 2, 1)); // bool(false)
echo "<br>";
var_dump(Helper::same(2, 1, 1)); // bool(false)
echo "<br>";
var_dump(Helper::same(2, 2, '2')); // bool(false)
echo "<br>";
var_dump(Helper::same(2, '2', 2)); // bool(false)
echo "<br>";
var_dump(Helper::same('2', 2, 2)); // bool(false)
echo "<br>";
```

## 課題2

レコードを格納した配列をTSV(文字列)に変換するクラス・メソッドを作成してください。  
ブラウザで表示確認する際はコンテキストメニューの「ページのソースを表示」で確認してください。  

### 仕様

- 改行コードは「LF」
- 連想配列内の順番は保障しない。

| No. | TSVカラム | カラム名 | 備考 |
| :---: | --- | --- | --- |
| 1 | id | albums.id |  |
| 2 | name | albums.name |  |
| 3 | note | albums.note |  |
| 4 | track_names | tracks.name | 「.」区切りで連結して出力する |

### kadai02.php

```php
<?php
require_once("app/AlbumHelper.php");

// 多次元配列
$albums = [
    [
        "id" => 1,
        "name" => "ALBUM01",
        "note" => "NOTE01",
        "tracks" => [
            ["id" => 101, "name" => "TRACK0101"],
            ["id" => 102, "name" => "TRACK0102"],
            ["id" => 103, "name" => "TRACK0103"],
        ],
    ],
    [
        "id" => 2,
        "name" => "ALBUM02",
        "note" => "NOTE02",
        "tracks" => [
            ["id" => 201, "name" => "TRACK0201"],
        ],
    ],
    [
        "id" => 3,
        "note" => "NOTE03",
        "name" => "ALBUM03",
        "tracks" => [
            ["id" => 301, "name" => "TRACK0301"],
            ["name" => "TRACK0302", "id" => 302],
            ["id" => 303, "name" => "TRACK0303"],
        ],
    ],
];
// 実行・レスポンス出力
echo App\AlbumHelper::albumsToTsvString($albums);
```

### 出力例

```tsv
// 1	ALBUM01	NOTE01	TRACK0101,TRACK0102,TRACK0103
// 2	ALBUM02	NOTE02	TRACK0201
// 3	ALBUM03	NOTE03	TRACK0301,TRACK0302,TRACK0303
```
