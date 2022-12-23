# PHP課題(tweets) 解答例

## 例1

```php
<?php
// クラス・メソッド
class Helper
{
    public static function convertToViewData(array $tweetsResponse): array
    {
        // $idUserMap  Key: user_id, Value: user情報
        $idUserMap = [];
        foreach ($tweetsResponse['includes']['users'] ?? [] as $u) {
            $idUserMap[$u['id']] = $u;
        }

        $result = [];
        foreach ($tweetsResponse['data'] ?? [] as $tweet) {
            $userId = $tweet['author_id'] ?? '';
            $user = $idUserMap[$userId] ?? [];
            $result[] = [
                'tweet_id' => $tweet['id'],
                'tweet_text' => $tweet['text'],
                'user_id' => $userId,
                'user_name' => $user['username'] ?? '',
                'user_display_name' => $user['name'] ?? '',
            ];
        }
        return $result;
    }
}
```

tweet情報とuser情報を紐付けるため、連想配列の変数(`$idUserMap`)を用意し  
キーにユーザーID、値にuser情報を格納しています。これはLaravelコレクションの`keyBy()`メソッドと同様の処理です。  
tweetのループでは、ユーザーIDが入っている`author_id`を`$idUserMap`連想配列のキーに指定し  
ユーザー情報を取得していて、こうすることでtweetループ内で、高速にユーザー情報を取得することが出来ます。

Null合体演算子(`??`)を使うことで、キーが存在しない場合にエラーが発生しない作りになっています。

- `Laravel 9.x コレクション - keyBy()`
  - <https://readouble.com/laravel/9.x/ja/collections.html#method-keyby>
- `PHP7.0 新機能 Null 合体演算子`
  - <https://www.php.net/manual/ja/migration70.new-features.php#migration70.new-features.null-coalesce-op>

## 例2

```php
<?php
// クラス・メソッド
class Helper
{
    public static function convertToViewData(array $tweetsResponse): array
    {
        // $idUserMap  Key: user_id, Value: user情報
        $idUserMap = self::makeIdUserMap($tweetsResponse);

        $result = [];
        foreach ($tweetsResponse['data'] ?? [] as $tweet) {
            $userId = $tweet['author_id'] ?? '';
            $user = $idUserMap[$userId] ?? [];
            $result[] = [
                'tweet_id' => $tweet['id'],
                'tweet_text' => $tweet['text'],
                'user_id' => $userId,
                'user_name' => $user['username'] ?? '',
                'user_display_name' => $user['name'] ?? '',
            ];
        }
        return $result;
    }

    private static function makeIdUserMap(array $tweetsResponse): array
    {
        $result = [];
        foreach ($tweetsResponse['includes']['users'] ?? [] as $u) {
            $result[$u['id']] = $u;
        }
        return $result;
    }
}
```

[例1](#例1)をprivateメソッドで分割した例です。  
今回の課題のような規模であれば分割する必要はなさそうですが  
規模が大きくなってきたら、このように分割を検討しましょう。

## 例3

```php
<?php
// クラス・メソッド
class Helper
{
    public static function convertToViewData(array $tweetsResponse): array
    {
        $result = [];
        foreach ($tweetsResponse['data'] ?? [] as $tweet) {
            $userId = '';
            $user = [];
            if (isset($tweet['author_id'])) {
                $userId = $tweet['author_id'];
                foreach ($tweetsResponse['includes']['users'] ?? [] as $u) {
                    if ($u['id'] === $userId) {
                        $user = $u;
                        break;
                    }
                }
            }
            $result[] = [
                'tweet_id' => $tweet['id'],
                'tweet_text' => $tweet['text'],
                'user_id' => $userId,
                'user_name' => $user['username'] ?? '',
                'user_display_name' => $user['name'] ?? '',
            ];
        }
        return $result;
    }
}
```

[例1](#例1)とは違い、tweetループの中にuserを探すループが入ったパターンです。  
tweet・user数が増えると、user検索処理を何度も行うためパフォーマンスが落ちます。  
