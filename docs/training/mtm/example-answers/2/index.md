# プログラミング実践 課題2 解答例

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

## 例2

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

## 例3

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

## 例4

```php
<?php

namespace App;

class AlbumHelper
{
    public static function albumsToTsvString(array $albums): string
    {
        $result = '';
        foreach($albums as $album) {
            $trackNames = [];
            foreach($album['tracks'] as $track) {
                $trackNames[] = $track['name'];
            }
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

## 例5

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
