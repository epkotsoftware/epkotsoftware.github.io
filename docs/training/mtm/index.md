# 株式会社エプコットソフトウェア ～ プログラミング実践

## はじめに

本研修では現場での実装(プログラミング)を想定し  
プログラミングの基礎知識、検索力等を見ていきます。  
よって、わからない用語については検索することは許可します。  

## 休憩

- 1時間で10分休憩をとりましょう。

## 禁止事項

現場に入っていることを想定しているのと、検索力・読解力をみるため  
以下を禁止します。  

- ネット環境で閲覧出来ない情報
  - アナログノートの閲覧
  - 書籍の閲覧
  - ネットで非公開のメモ
- 動画の閲覧

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

レコードを格納した配列(array)をTSV(string)に変換するクラス・メソッドを作成してください。  
ブラウザで表示確認する際はコンテキストメニューの「ページのソースを表示」で確認してください。  

### 仕様

- 改行コードは「LF」
- 連想配列内の順番は保障しない。

| No. | TSVカラム | カラム名 | 備考 |
| :---: | --- | --- | --- |
| 1 | id | albums.id |  |
| 2 | name | albums.name |  |
| 3 | note | albums.note |  |
| 4 | track_names | tracks.name | 「,」区切りで連結して出力する |

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
1	ALBUM01	NOTE01	TRACK0101,TRACK0102,TRACK0103
2	ALBUM02	NOTE02	TRACK0201
3	ALBUM03	NOTE03	TRACK0301,TRACK0302,TRACK0303
```

## クラスについて理解を深める

- 静的クラス（PHPだとstaticメソッドのみを持つクラス）
  - Strクラス
    - <https://readouble.com/laravel/8.x/ja/helpers.html>
    - GitHub
      - <https://github.com/illuminate/support/blob/v8.78.1/Str.php>
- 動的クラス（new でインスタンスを生成するクラス）
  - Collectionクラス
    - <https://readouble.com/laravel/8.x/ja/collections.html>
    - GitHub
      - <https://github.com/illuminate/collections/blob/v8.78.1/Collection.php>
    - `collect`関数は内部的に「`new Collection($value)`」をしています。
      - <https://github.com/illuminate/collections/blob/v8.78.1/helpers.php#L15>

## プログラミング力を身につけるには

単純なプログラミング力を身につけるには  
競技プログラミングがおすすめです。  
ただ、これで上位に上がったからと言って実務で通用するわけではないので  
基礎が身につき、プログラミングのスピードが向上したら  
別の学習をする方が良いです。

- AtCoder
  - <https://atcoder.jp/>
  - 新規登録後、チュートリアルがあります。  
    使用経験はないですが、競技プログラミングで人気があるようです。
- paiza
  - <https://paiza.jp/challenges/info>
  - こちらはランク毎に問題が選べます。  
    以前、3年目の同僚がチャレンジし、Cランクだったので  
    Cランクで何問か解けるようになると、プログラミングに限れば  
    現場で通用するレベルと言えます。  
    問題毎で上位50位以内に入るとランキングが見れるようになります。
