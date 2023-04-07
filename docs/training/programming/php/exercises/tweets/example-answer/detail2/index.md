# PHP課題(tweets) 解答例2 解説

## コード

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

## 解説

[例1](./../detail1/index.md)をprivateメソッドで分割した例です。  
今回の課題のような規模では、分割する必要はないかもしれませんが、  
コードが大きくなってきたときや複数箇所で同じ処理が必要になったときに、  
このようにメソッドを分割することで、コードの重複を避けたり、可読性を高めたりすることができます。  

そのため、開発者はメソッドの分割を検討することが重要です。  

## ChatGPT解説

このコードは、`Helper` という名前のクラスを定義しています。このクラスには `convertToViewData()` メソッドと `makeIdUserMap()` メソッドがあります。

`convertToViewData()` メソッドは、Tweet情報を引数として受け取り、User情報と結合した配列を返します。具体的には、Tweet配列内のユーザーIDをキーにして、別途作成した `makeIdUserMap()` メソッドで作成した連想配列から User情報を取得しています。そして、Tweet情報とUser情報を1つの配列に変換し、`$result` 配列に格納していきます。最終的に、変換された配列を `return` 文で返却します。

`makeIdUserMap()` メソッドは、Tweet情報を引数として受け取り、User情報を Key: user_id, Value: user情報として格納した連想配列を返します。

このコードは、OOP（Object Oriented Programming）の設計思想に基づいて書かれており、可読性が高く、メンテナンス性も良好です。また、静的メソッドを多用しているため、外部クラスからそのまま呼び出すことができます。

### 詳細

では、詳細を説明します。

このプログラムの中心部分は `Helper` クラスです。このクラスには2つのメソッドがあります。それぞれ `convertToViewData()` と `makeIdUserMap()` と呼ばれます。

```php
class Helper {
    public static function convertToViewData(array $tweetsResponse): array 
    { ... }

    private static function makeIdUserMap(array $tweetsResponse): array 
    { ... }
}
```

`public` 修飾子で定義された `convertToViewData()` メソッドは、Tweet情報が含まれる連想配列を引数として受け取ります。その配列内の User情報を含めた Tweet情報を返すようにします。

```php
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
```

このメソッドは、まず `$tweetsResponse` 配列の中にある User情報全体を格納した連想配列 `$idUserMap` を作成します。この連想配列は、各ユーザーIDをキーとしてそれぞれのUser情報を保存しています。

次に、Tweet情報が含まれている配列から `foreach()` で順番に要素を取り出し、Tweet情報と合わせて格納するための配列を作成します。その際に、Tweet情報からユーザーIDを取り出し、それを使って `$idUserMap` から該当するUser情報を検索します。そして、Tweet情報とUser情報を1つの連想配列に変換し、 `result` 配列に追加していきます。

最後に、変換された Tweet情報・User情報を格納した結果配列 `$result` を `return` 文で返却します。

```php
private static function makeIdUserMap(array $tweetsResponse): array
{
    $result = [];
    foreach ($tweetsResponse['includes']['users'] ?? [] as $u) {
        $result[$u['id']] = $u;
    }
    return $result;
}
```

`private` 修飾子で定義された `makeIdUserMap()` メソッドは、前述の `convertToViewData()` メソッドで使用されている、Tweetに関連付けられたUser情報を取得するメソッドです。Tweet情報が格納された配列から `foreach()` で要素を取り出し、各User情報を `$result` 配列に追加します。それぞれの User情報を、連想配列のキーとしてUser ID（`$u['id']`）を使用して保存します。最後に、 User情報を取得した連想配列 `$result` を返却します。

以上が、このプログラムの概略となります。このプログラムでは、クラスとメソッドを適切に使用することで、プログラム全体をより理解しやすく、保守性の高いコードにすることができています。
