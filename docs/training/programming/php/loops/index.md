# PHPプログラミング編 ループ

## 目次

| No. |  |
| :---: | --- |
| 1 | [種類](#種類) |
| 2 | [foreach](#foreach) |
| 3 | [多重ループ](#多重ループ) |
| 4 | [初回ループ時に違う処理を行う](#初回ループ時に違う処理を行う) |
| 5 | [foreachの変数名のコツ](#foreachの変数名のコツ) |
| 6 | [PHPマニュアル](#phpマニュアル) |

## 種類

| 種類 | 解説 |
| --- | --- |
| `for` | コードブロックを指定された回数ループします。 |
| `foreach` | コードブロックを配列要素数分ループします。 |
| `while` | 指定条件が真である限り、コードブロックをループします（実行前判定）。 |
| `do...while` | 指定条件が真である限り、コードブロックをループします（実行後判定）。 |

## foreach

昔は`for`文が多く使われてきましたが  
現在では`foreach`文がよく使われます（PHPバージョンアップで速度も向上している）。

まず、for文を使った例です。  
stringList引数には配列が入ってくる前提とします。

```php
<?php

class ArrayHelper
{
    public static function toString(array $stringList): string
    {
        // 空文字列を定義
        $result = '';
        for ($i = 0; $i < count($stringList); $i++) {
            // 配列から値(要素)を取り出し、word変数に格納
            $str = $stringList[$i];
            // 結合代入演算子(.=)を使って、resultに文字列を連結
            $result .= "i={$i} str={$str}, ";
        }
        return $result;
    }
}

// メソッド実行
$result1 = ArrayHelper::toString(['s1']); // 戻り値: "i=0 str=s1, "
$result2 = ArrayHelper::toString(['s1', 's2', 's3']); // 戻り値: "i=0 str=s1, i=1 str=s2, i=2 str=s3, "

// 関数実行結果出力
var_dump($result1, $result2);
// string(13) "i=0 word=s1, "
// string(39) "i=0 word=s1, i=1 word=s2, i=2 word=s3, "
```

foreach文にすると以下のようにシンプルに書けます。  
※メソッド実行部分のコードは省略

```php
<?php

class ArrayHelper
{
    public static function toString(array $stringList): string
    {
        // 空文字列を定義
        $result = '';
        foreach ($stringList as $i => $str) {
            // 結合代入演算子(.=)を使って、resultに文字列を連結
            $result .= "i={$i} str={$str}, ";
        }
        return $result;
    }
}
```

foreachの構文は2種類あり  
違いとしてはキー（配列の場合は添字）を取るかの違いです  
キーを使わない場合、省略した構文を使用しましょう。  
配列から取得したKey・Valueを一つずつ変数に代入します。  

```php
// 構文1
foreach (配列 as $キー変数 => $バリュー変数) {}
// 構文2
foreach (配列 as $バリュー変数) {}
```

上記構文の「配列」は`array`だけではなく  
他にも指定が可能な型がありますが、最初の内は`array`型の値を指定すると覚えておきましょう。  

「配列」は値であれば何でも良いので、必ず変数にする必要はありません。  
あまりやらないかもしれませんが、以下のようにリテラルで配列を指定することが可能です。

```php
<?php

$result = '';
foreach (['a', 'b', 'c'] as $i => $str) {
    // 1回目 $i = 0; $str = 'a';
    // 2回目 $i = 1; $str = 'b';
    // 3回目 $i = 2; $str = 'c';
    $result .= "i={$i} str={$str}, ";
}
var_dump($result);
// string(36) "i=0 str=a, i=1 str=b, i=2 str=c, "
```

以下も同じ

```php
<?php

$str1 = 'a';
$str2 = 'b';
$str3 = 'c';
$result = '';
foreach ([$str1, $str2, $str3] as $i => $str) {
    // 1回目 $i = 0; $str = 'a';
    // 2回目 $i = 1; $str = 'b';
    // 3回目 $i = 2; $str = 'c';
    $result .= "i={$i} str={$str}, ";
}
var_dump($result);
// string(36) "i=0 str=a, i=1 str=b, i=2 str=c, "
```

以下は関数の戻り値をそのまま指定する例です。  
メソッドでも同じことが可能です。  

```php
<?php

function getArray()
{
    return ['a', 'b', 'c'];
}

$result = '';
foreach (getArray() as $i => $str) {
    // 1回目 $i = 0; $str = 'a';
    // 2回目 $i = 1; $str = 'b';
    // 3回目 $i = 2; $str = 'c';
    $result .= "i={$i} str={$str}, ";
}
var_dump($result);
// string(36) "i=0 str=a, i=1 str=b, i=2 str=c, "
```

- `PHPマニュアル - foreach`
  - <https://www.php.net/manual/ja/control-structures.foreach.php>
- `PHPマニュアル - Iterable`
  - <https://www.php.net/manual/ja/language.types.iterable.php>

## 多重ループ

ループ内にループを書く事が出来ます。  
主に多次元配列等の処理等に使用します。  

```php
<?php

$users = [
    [
        'id' => 1,
        'name' => 'USER_NAME01',
        'tweets' => [
            [
                'id' => '1001',
                'text' => 'TWEET_1001',
            ],
            [
                'id' => '1002',
                'text' => 'TWEET_1002',
            ],
        ],
    ],
    [
        'id' => 2,
        'name' => 'USER_NAME02',
        'tweets' => [
            [
                'id' => '1003',
                'text' => 'TWEET_1003',
            ],
            [
                'id' => '1004',
                'text' => 'TWEET_1004',
            ],
        ],
    ],
];

$result = '';
foreach ($users as $user) {
    // 【$users 1回目】 $user = ['id' => 1, 'name' => 'USER_NAME01', 'tweets' => [...]]; ※ tweetsは記載を省略
    // 【$users 2回目】 $user = ['id' => 2, 'name' => 'USER_NAME02', 'tweets' => [...]]; ※ tweetsは記載を省略
    $userId = $user['id'];
    foreach ($user['tweets'] as $tweet) {
        // 【$users 1回目】【tweets 1回目】 $tweet = ['id' => 1001, 'text' => 'TWEET_1001'];
        // 【$users 1回目】【tweets 2回目】 $tweet = ['id' => 1002, 'text' => 'TWEET_1002'];
        // 【$users 2回目】【tweets 1回目】 $tweet = ['id' => 1003, 'text' => 'TWEET_1003'];
        // 【$users 2回目】【tweets 2回目】 $tweet = ['id' => 1004, 'text' => 'TWEET_1004'];
        $tweetId = $tweet['id'];
        $tweetText = $tweet['text'];
        $result .= "UserID={$userId}  TweetID={$tweetId}  TweetText={$tweetText}\n";
    }
}
var_dump($result);
// string(180) "UserID=1  TweetID=1001  TweetText=TWEET_1001
// UserID=1  TweetID=1002  TweetText=TWEET_1002
// UserID=2  TweetID=1003  TweetText=TWEET_1003
// UserID=2  TweetID=1004  TweetText=TWEET_1004
// "
```

## 初回ループ時に違う処理を行う

プログラミングでループを使う時に  
初回ループの時だけ違う処理を行いたいということがあります。  

他言語でも通用する方法としては bool 変数を使う方法です。  

```php
$first = true;
foreach ($array as $value) {
    if ($first) {
        $first = false; // 以降のループで if 文に入らないようにするため
        // 初回の処理
    } else {
        // 初回以外の処理
    }
}
```

上記の実装例です。

```php
<?php

$names = ['NAME01', 'NAME02', 'NAME03'];

$result = '';
$first = true;
foreach ($names as $i => $name) {
    if ($first) {
        $first = false; // 以降のループで if 文に入らないようにするため
        // 初回の処理
        $result .= "初回: {$name}";
    } else {
        // 初回以外の処理
        $result .= "\ni={$i}: {$name}";
    }
}
var_dump($result);
// string(38) "初回: NAME01
// i=1: NAME02
// i=2: NAME03"
```

---

【PHP限定】foreachのキーを使用する方法です。  
「array_key_last」という関数もあるので、最後の要素の判定も出来ます。

```php
$firstKey = array_key_first($array);
foreach ($array as $key => $value) {
    if ($key === $firstKey) {
        // 初回の処理
    } else {
        // 2回目以降の処理
    }
}
```

- array_key_first
  - <https://www.php.net/manual/ja/function.array-key-first.php>
- array_key_last
  - <https://www.php.net/manual/ja/function.array-key-last.php>

## foreachの変数名のコツ

ここで紹介するのは筆者の独自ルールです。  
配列をループで回す場合、以下のように命名しておくと  
変数に入っているものが分かりやすくなります。

| 変数 | 命名ルール | 例 |
| --- | --- | --- |
| 配列変数 | 対象の複数形<br>xxxList、xxxArray等 | レコード配列の場合： `$records`<br>`$recordList`<br>`$recordSet`<br>`$recordArray`  |
| キー変数 | 配列の添字を表す「i」 | `$i` |
| バリュー変数 | 対象の単数形 | レコード配列要素の場合： `$record` |

ID配列の場合、以下のようなイメージです。

```php
// ID配列の例
$ids = [101, 102, 103];

foreach ($ids as $i => $id) {
    // 処理
}
```

連想配列をループで回す場合は以下のように命名しています。

| 変数 | 命名ルール | 例 |
| --- | --- | --- |
| 配列変数 | 対象の複数形、xxxMap等 | `Key: ID, Value: レコード` の場合： `$idRecordMap` |
| キー変数 | 「key」または<br>キー値の意味が明確になっている場合、その名前 | `$key` |
| バリュー変数 | 対象の単数形 | レコード連想配列要素の場合： `$record` |

```php
// 連想配列(Key: ID, Value: レコード)の例
$idRecordMap = [
    101 => ['id' => 101, 'name' => 'NAME01'],
    102 => ['id' => 102, 'name' => 'NAME02'],
    103 => ['id' => 103, 'name' => 'NAME03'],
];

foreach ($idRecordMap as $id => $record) {
    // 処理
}
```

## PHPマニュアル

資料作成で参考にしたPHPマニュアルのリンクです。

- `制御構造`
  - <https://www.php.net/manual/ja/language.control-structures.php>
