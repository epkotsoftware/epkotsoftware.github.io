# プログラミング実践 課題2 解答例

## はじめに

- 1対1PG研修が済んでいない研修生は閲覧禁止
- 課題・解答例に関する質問は講師へのダイレクトメッセージ(チャット)で行うこと

## 例1

メンテナンス（カラム追加等）も考慮した例です。  
実務では、50カラムのファイルも存在するため  
後の修正も考えると、値を配列に持っておき、結合する方が良いです。

```php
<?php

namespace App;

class AlbumHelper
{
    public static function albumsToTsvString(array $albums): string
    {
        $result = '';
        foreach($albums as $album) {
            $trackNames = array_column($album['tracks'], 'name');
            $fields = [
                $album['id'],
                $album['name'],
                $album['note'],
                implode(',', $trackNames),
            ];
            $result .= implode("\t", $fields) . "\n";
        }
        return $result;
    }
}
```

## 例2

例1のarray_column関数を使わない例です。

```php
<?php

namespace App;

class AlbumHelper
{
    public static function albumsToTsvString(array $albums): string
    {
        $result = '';
        foreach($albums as $album) {
            // ↓↓↓ $trackNames = array_column($album['tracks'], 'name'); と同じ
            $trackNames = [];
            foreach($album['tracks'] as $track) {
                $trackNames[] = $track['name'];
            }
            // ↑↑↑
            $fields = [
                $album['id'],
                $album['name'],
                $album['note'],
                implode(',', $trackNames),
            ];
            $result .= implode("\t", $fields) . "\n";
        }
        return $result;
    }
}
```

## 例3

特殊な関数を使わない例です。  
PHPに依存しないため、他言語でも流用しやすい作りができます。  

```php
<?php

namespace App;

class AlbumHelper
{
    public static function albumsToTsvString(array $albums): string
    {
        $result = '';
        foreach($albums as $album) {
            $id = $album['id'];
            $name = $album['name'];
            $note = $album['note'];
            $trackNames = '';

            $first = true;
            foreach($album['tracks'] as $track) {
                if ($first) {
                    $first = false;
                } else {
                    $trackNames .= ',';
                }
                $trackNames .= $track['name'];
            }

            $result .= "{$id}\t{$name}\t{$note}\t{$trackNames}\n";
        }
        return $result;
    }
}
```

## 例4

`array_key_first`を使った例です。  
PHPの配列は、内部的には連想配列で、必ず最初のキーが`0`とは限らないため  
最初の要素の判定には `array_key_first` を使うようにしましょう。

```php
<?php

namespace App;

class AlbumHelper
{
    public static function albumsToTsvString(array $albums): string
    {
        $result = '';
        foreach($albums as $album) {
            $tracks = $album['tracks'];
            $firstIndex = array_key_first($tracks);
            $trackNames = '';
            foreach ($tracks as $i => $track) {
                if ($i !== $firstIndex) {
                    $trackNames .= ',';
                }
                $trackNames .= $track['name'];
            }
            $result .= "{$album['id']}\t{$album['name']}\t{$album['note']}\t{$trackNames}\n";
        }
        return $result;
    }
}
```

## 例5

例1をシンプルにした例です。  
カラム数が少なければ、この方法でも良いです。  

```php
<?php

namespace App;

class AlbumHelper
{
    public static function albumsToTsvString(array $albums): string
    {
        $tsvString = '';
        foreach($albums as $a) {
            $trackNameArray = array_column($a['tracks'], 'name');
            $trackNamesString = implode(',', $trackNameArray);
            $tsvString .= "{$a['id']}\t{$a['name']}\t{$a['note']}\t{$trackNamesString}\n";
        }
        return $tsvString;
    }
}
```

## 例6

ループ処理内を変数を使わずに書いた例です。  
可読性が落ちるため、変数を適度に使う方が見やすくなります。

```php
<?php

namespace App;

class AlbumHelper
{
    public static function albumsToTsvString(array $albums): string
    {
        $result = '';
        foreach($albums as $album) {
            $result .= implode("\t", [
                $album['id'],
                $album['name'],
                $album['note'],
                implode(',', array_column($album['tracks'], 'name')),
            ]) . "\n";
        }
        return $result;
    }
}
```
