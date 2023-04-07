# PHPプログラミング編 課題(tweets)

## 禁止事項

課題の意味がなくなってしまうため  
ChatGPT等のAIの利用を禁止します。  

テストコードが通った後に利用しましょう。  

## 課題

ツイートのレスポンス情報から、Viewに渡すためのtweet配列データを作成する  
`Helper`クラスの`convertToViewData`メソッドを実装してください。

## 仕様

- クラス名: `Helper`
- メソッド名: (static) `convertToViewData`
- パラメータ(引数): (array)`$tweetsResponse` - ツイートのレスポンス情報
- 戻り値: (array)Viewデータ

```php
class Helper
{
    public static function convertToViewData(array $tweetsResponse): array
    {
        // TODO: ここに処理を書きます。
    }
}
```

実行例

```php
// 引数
$tweets = [
    'data' => [
        [
            'text' => 'ツイート001',
            'id' => '1001',
        ],
    ],
];
// 実行
$result = Helper::convertToViewData($tweets);
var_dump($result);
```

### 引数($tweetsResponse)

レスポンス情報の詳細については、以下の `Example responses` と `Response fields` を確認してください。

- Twitter API v2
  - Tweets lookup
    - <https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets>
  - data dictionary - User
    - <https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/user>

### 戻り値

Viewに渡すためのtweet配列データの仕様です。

| No. | Viewデータカラム | レスポンスフィールド | 備考 |
| :---: | --- | --- | --- |
| 1 | `tweet_id` | `data[].id` |  |
| 2 | `tweet_text` | `data[].text` |  |
| 3 | `user_id` | `data[].author_id`<br>`(includes.users[].id)` | フィールドが存在しない場合、ブランク |
| 4 | `user_name` | `includes.users[].username` | Tweetに紐づくユーザー名<br>フィールドが存在しない場合、ブランク |
| 5 | `user_display_name` | `includes.users[].name` | Tweetに紐づくユーザー表示名<br>フィールドが存在しない場合、ブランク |

※ ブランクは空文字列を指します。

#### 戻り値イメージ

以下のような配列が戻り値になります。

```php
[
    [
        'tweet_id' => '1001',
        'tweet_text' => 'ツイート001',
        'user_id' => '101',
        'user_name' => 'user_01',
        'user_display_name' => 'ユーザー01',
    ],
    [
        'tweet_id' => '1002',
        'tweet_text' => 'ツイート002',
        'user_id' => '101',
        'user_name' => 'user_01',
        'user_display_name' => 'ユーザー01',
    ],
];
```

## 補足

- 完成時にメソッド内で `echo`、`var_dump`、`var_export`が残っていないことを確認しましょう。
- Helperクラス内にprivateメソッドを追加しても問題ありません。
- 未使用変数・関数は削除しましょう。

## テストコード付きサンプル

テストコード付きのサンプルです。  
Helperクラス内を実装しましょう。

```php
<?php
// クラス・メソッド
class Helper
{
    public static function convertToViewData(array $tweetsResponse): array
    {
        // TODO
    }
}

// テスト実行関数
function executeTest(int $caseNumber, $case, $expected)
{
    echo "<hr><h2>テストケース{$caseNumber}</h2>";

    $spanOk = '<span style="background-color: #198754;color: #fff">OK</span>';
    $spanNg = '<span style="background-color: #dc3545;color: #fff">NG</span>';
    try {
        $actual = Helper::convertToViewData($case);
    } catch (\Throwable $th) {
        echo $spanNg, '<pre>';
        echo $th->getMessage() . "\n\n";
        echo $th->getTraceAsString();
        echo '</pre>';
        return;
    }
    if ($expected === $actual) {
        // 一致
        echo $spanOk;
    } else {
        echo $spanNg;
        echo '<div style="display: flex;">';
        echo '<div><h3>期待結果</h3>';
        echo '<pre>', var_export($expected), '</pre>';
        echo '</div>';
        echo '<div><h3>実行結果</h3>';
        echo '<pre>', var_export($actual), '</pre>';
        echo '</div>';
        echo '</div>';
    }
}

// テスト実行
$i = 0;
//   テストケース1
$case1 = [
    'data' => [
        [
            'text' => 'ツイート001',
            'id' => '1001',
        ],
    ],
];
//   期待結果
$expected1 = [
    [
        'tweet_id' => '1001',
        'tweet_text' => 'ツイート001',
        'user_id' => '',
        'user_name' => '',
        'user_display_name' => '',
    ],
];
executeTest(++$i, $case1, $expected1);

//   テストケース2
$case2 = [];
//   期待結果
$expected2 = [];
executeTest(++$i, $case2, $expected2);

//   テストケース3
$case3 = [
    'data' => [
        [
            'text' => 'ツイート001',
            'id' => '1001',
            'author_id' => '102',
        ],
        [
            'text' => 'ツイート002',
            'id' => '1002',
            'author_id' => '101',
        ],
        [
            'text' => 'ツイート003',
            'id' => '1003',
            'author_id' => '102',
        ],
    ],
    'includes' => [
        'users' => [
            [
                'username' => 'user_01',
                'id' => '101',
                'name' => 'ユーザー01',
            ],
            [
                'username' => 'user_02',
                'id' => '102',
                'name' => 'ユーザー02',
            ],
        ],
    ],
];
//   期待結果
$expected3 = [
    [
        'tweet_id' => '1001',
        'tweet_text' => 'ツイート001',
        'user_id' => '102',
        'user_name' => 'user_02',
        'user_display_name' => 'ユーザー02',
    ],
    [
        'tweet_id' => '1002',
        'tweet_text' => 'ツイート002',
        'user_id' => '101',
        'user_name' => 'user_01',
        'user_display_name' => 'ユーザー01',
    ],
    [
        'tweet_id' => '1003',
        'tweet_text' => 'ツイート003',
        'user_id' => '102',
        'user_name' => 'user_02',
        'user_display_name' => 'ユーザー02',
    ],
];
executeTest(++$i, $case3, $expected3);
```

## プログラムの実行

プログラムの実行については「paiza.io」でも可能です。  
テストコード付きサンプルはHTMLで出力されるので  
「Text」から「HTML」に変更してください。

- `paiza.io`
  - <https://paiza.io/ja/projects/new>

## 解答例

課題が出来たら解答例も見てみましょう。

- [解答例](./example-answer/index.md)
