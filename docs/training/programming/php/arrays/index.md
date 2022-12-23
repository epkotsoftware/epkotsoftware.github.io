# PHPプログラミング編 配列

## 目次

| No. |  |
| :---: | --- |
| 1 | [インデックス付き配列](#インデックス付き配列) |
| 2 | [連想配列](#連想配列) |
| 3 | [多次元配列](#多次元配列) |
| 4 | [PHPマニュアル](#phpマニュアル) |

## インデックス付き配列

インデックス付き配列(Indexed Arrays)の定義方法や値を取り出す例です。

### 配列定義

配列の定義方法は以下のように行います。  
添字(インデックス)は`0`から順番に与えられます。

```php
// 定義
$配列変数 = [値1, 値2, 値3, ...値n];
```

```php
// 値を取り出す
$変数 = 配列[添字];
```

```php
<?php

// これでも同じ　→ $sports = array('サッカー', '野球', 'バスケットボール');
$sports = ['サッカー', '野球', 'バスケットボール'];

var_dump($sports[0]);
// string(12) "サッカー"

var_dump($sports[1]);
// string(6) "野球"

var_dump($sports[2]);
// string(24) "バスケットボール"

var_dump($sports);
//array(3) {
//  [0]=>
//  string(12) "サッカー"
//  [1]=>
//  string(6) "野球"
//  [2]=>
//  string(24) "バスケットボール"
//}
```

要素数が増えてくると読みにくくなるので改行しても問題ありません。  
最後の値の後ろに「,」をつけてもエラーにはなりません。

```php
$sports = [
    'サッカー',
    '野球',
    'バスケットボール',
];
```

後から値を追加することも可能です。  

```php
// 空配列を定義
$sports = [];

$sports[] = 'サッカー';
$sports[] = '野球';
$sports[] = 'バスケットボール';
```

## 連想配列

連想配列(Associative Arrays)の定義方法や値を取り出す例です。

### 連想配列定義

連想配列の定義方法は以下のように行います。  

```php
$連想配列変数 = [キー1 => 値1, キー2 => 値2, キー3 => 値3, ...キーn => 値n];
```

```php
// 値を取り出す
$変数 = 配列['キー'];
```

```php
<?php

// これでも同じ　→ $sports = array('a' => 'サッカー', 'b' => '野球', 'c' => 'バスケットボール');
$sports = ['a' => 'サッカー', 'b' => '野球', 'c' => 'バスケットボール'];

var_dump($sports['a']);
// string(12) "サッカー"

var_dump($sports['b']);
// string(6) "野球"

var_dump($sports['c']);
// string(24) "バスケットボール"

var_dump($sports);
// array(3) {
//   ["a"]=>
//   string(12) "サッカー"
//   ["b"]=>
//   string(6) "野球"
//   ["c"]=>
//   string(24) "バスケットボール"
// }
```

配列と同様に改行しても問題ありません。

```php
$sports = [
    'a' => 'サッカー',
    'b' => '野球',
    'c' => 'バスケットボール',
];
```

後から値を追加することも可能です。  

```php
// 空配列を定義
$sports = [];

$sports['a'] = 'サッカー';
$sports['b'] = '野球';
$sports['c'] = 'バスケットボール';
```

## 多次元配列

配列要素として配列を持つ配列を多次元配列(Multidimensional Arrays)と呼びます。

- 動画
  - PHPの多次元連想配列徹底攻略【PHPによるWebアプリケーション開発講座#ex1】
    - <https://youtu.be/PDG7tD2FZrc>

以下、レコード配列のイメージです。

```php
<?php
// レコード配列 (連想配列を要素に持つ配列)
$records = [
    ['id' => 101, 'name' => 'NAME01'],
    ['id' => 102, 'name' => 'NAME02'],
    ['id' => 103, 'name' => 'NAME03'],
];

var_dump($records[0]['id']);   // int(101)
var_dump($records[0]['name']); // string(6) "NAME01"
var_dump($records[1]['id']);   // int(102)
var_dump($records[1]['name']); // string(6) "NAME02"
var_dump($records[2]['id']);   // int(103)
var_dump($records[2]['name']); // string(6) "NAME03"

var_dump($records);
// array(3) {
//   [0]=>
//   array(2) {
//     ["id"]=>
//     int(101)
//     ["name"]=>
//     string(6) "NAME01"
//   }
//   [1]=>
//   array(2) {
//     ["id"]=>
//     int(102)
//     ["name"]=>
//     string(6) "NAME02"
//   }
//   [2]=>
//   array(2) {
//     ["id"]=>
//     int(103)
//     ["name"]=>
//     string(6) "NAME03"
//   }
// }
```

上記の場合、変数 `records` は連想配列と思われがちですが  
実際は連想配列の配列になります。  
以下のように一つ一つ分解するとわかりやすいです。  
変数 `records` は上記と同一の内容になります。

```php
// レコード (連想配列)
$record1 = ['id' => 101, 'name' => 'NAME01'];
$record2 = ['id' => 102, 'name' => 'NAME02'];
$record3 = ['id' => 103, 'name' => 'NAME03'];

// レコード配列 (連想配列を要素に持つ配列)
$records = [
    $record1,
    $record2,
    $record3,
];
```

上記のレコード配列からid値配列を作る関数の例です。

```php
<?php

function pluckId(array $recs): array
{
    // ids配列(空配列)
    $ids = [];

    // recs の要素数分ループ、rec変数にはレコード(連想配列)が入る
    foreach ($recs as $rec) {
        // レコード(連想配列)のキー'id' の値を取り出し、ids配列に追加
        $ids[] = $rec['id'];
    }

    // ids配列を戻り値として返す
    return $ids;
}

$records = [
    ['id' => 101, 'name' => 'NAME01'],
    ['id' => 102, 'name' => 'NAME02'],
    ['id' => 103, 'name' => 'NAME03'],
];
// pluckId 関数を使う
$result = pluckId($records);
var_dump($result); // [101, 102, 103]
```

## PHPマニュアル

資料作成で参考にしたPHPマニュアルのリンクです。

- `配列`
  - <https://www.php.net/manual/ja/language.types.array.php>
