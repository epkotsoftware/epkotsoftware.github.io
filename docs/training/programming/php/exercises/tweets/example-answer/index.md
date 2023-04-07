# PHP課題(tweets) 解答例

## AIに最適化してもらう

まず、自身の解答をAIにチェックしてもらいましょう。
下記のメッセージの後に、適度に改行を入れて作成したコードを貼り付けてください。

```txt
以下のPHPコードを最適化し、PSR-12形式に修正してください。
```

- [AI（初めての利用の場合、こちらを参照）](./../../../../../../ai/index.md)
- ChatGPT
  - <https://chat.openai.com/chat>
- BingAI（Microsoft Edge）
  - <https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx>

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

- [解説](./detail1/index.md)

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

- [解説](./detail2/index.md)

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

- [解説](./detail3/index.md)
