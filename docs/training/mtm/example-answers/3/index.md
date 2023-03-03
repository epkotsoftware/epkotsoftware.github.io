# プログラミング実践 課題3 解答例

## はじめに

- 1対1PG研修が済んでいない研修生は閲覧禁止
- 課題・解答例に関する質問は講師へのダイレクトメッセージ(チャット)で行うこと

## 例1

```php
<?php

namespace App;

class AlbumHelper
{
    public static function albumsToTsvString(array $albums): string
    {
        $tsvString = "id\tname\tnote\ttrack_names\r\n"; // 変更: 空文字 → ヘッダー文字列
        foreach($albums as $a) {
            $trackNameArray = array_column($a['tracks'], 'name');
            $trackNamesString = implode(',', $trackNameArray);
            $tsvString .= "{$a['id']}\t{$a['name']}\t{$a['note']}\t{$trackNamesString}\r\n"; // 変更: \n → \r\n
        }
        return $tsvString;
    }
}
```
