# PHP課題(tweets) 解答例1 解説

## コード

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

## 解説

Tweet情報とUser情報を紐付けるため、連想配列の変数(`$idUserMap`)を用意しています。  
この連想配列では、ユーザーIDをキーにして、そのユーザーの情報を値として格納しています。  
この処理は、Laravelコレクションの`keyBy()`メソッドと同様の処理を実現しています。  

Tweetのループ処理では、連想配列`$idUserMap`のキーにあるユーザーIDを指定して、ユーザー情報を取得しています。  
こうすることで、高速にユーザー情報を取得することができます。  

また、Null合体演算子(`??`)を使用することで、連想配列内にキーが存在しない場合でもエラーが発生しません。

## 参考

- `Laravel 9.x コレクション - keyBy()`
  - <https://readouble.com/laravel/9.x/ja/collections.html#method-keyby>
- `PHP7.0 新機能 Null 合体演算子`
  - <https://www.php.net/manual/ja/migration70.new-features.php#migration70.new-features.null-coalesce-op>

## ChatGPT解説

上記のコードは、`Helper` クラスが定義されています。  
このクラスには、 `convertToViewData()` という名前のメソッドがあり、このメソッドは、Twitter API から返されるツイートのデータを、ビューで表示するための配列に変換する処理を行います。  

具体的には、以下のようなプロセスを行います。  

1. `$idUserMap` という新しい空の配列を作成します。これは、各ツイートの作者の情報を格納するためのものです。

2. ループを使用して `$tweetsResponse['includes']['users']` 内の各ユーザーの情報を取得し、 `id` をキー、情報自体を値として `$idUserMap` 配列に格納します。

3. 別のループを使用して、 `$tweetsResponse['data']` 内の各ツイートの情報を取得し、必要なデータを変換して、 `$result` 配列に格納します。この際、 `author_id` というキーで作者IDを取得し、 `$idUserMap` 配列から、そのIDに対応するユーザー情報を取得します。

4. `$result` 配列に結果を追加し、最後にそれを返します。

上記の処理により、Twitter APIから取得したデータをビューに表示するための、適切な形式の配列が生成されます。
