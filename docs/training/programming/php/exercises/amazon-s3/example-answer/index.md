# 株式会社エプコットソフトウェア ～ PHPプログラミング編 課題(Amazon S3)解答例

## 例1

PHPは配列操作の関数が充実しており、array_column関数を使うと  
カラムの値が簡単に抽出ができます。  
今回の課題の場合、Null合体演算子を組み合わせる事で1行で書けます。

```php
<?php
// クラス・メソッド
class S3Helper
{
    public static function extractKeysFromListObjectsV2Response(array $listObjectsV2Response): array
    {
        return array_column($listObjectsV2Response['Contents'] ?? [], 'Key');
    }
}
```

- [Null合体演算子（??）](./../../../operators/index.md)
- array_column
  - <https://www.php.net/manual/ja/function.array-column.php>

## 例2

foreachを使った例です。

```php
<?php
// クラス・メソッド
class S3Helper
{
    public static function extractKeysFromListObjectsV2Response(array $listObjectsV2Response): array
    {
        $keys = [];
        foreach ($listObjectsV2Response['Contents'] ?? [] as $content) {
            $keys[] = $content['Key'];
        }
        return $keys;
    }
}
```

- [Null合体演算子（??）](./../../../operators/index.md)

## 例3

PHP5ではNull合体演算子が使えないため、古いバージョンではissetを使います。  

```php
<?php
// クラス・メソッド
class S3Helper
{
    public static function extractKeysFromListObjectsV2Response(array $listObjectsV2Response): array
    {
        if (!isset($listObjectsV2Response['Contents'])) {
            return [];
        }
        $keys = [];
        foreach ($listObjectsV2Response['Contents'] as $content) {
            $keys[] = $content['Key'];
        }
        return $keys;
    }
}
```

- [演算子（!）](./../../../operators/index.md)
- isset
  - <https://www.php.net/manual/ja/function.isset.php>

## 例4

array_key_exists関数を使う方法です。  
issetと似ていますが、issetは関数ではなく、array_key_existsは関数になり、動作も少し異なるところがあります。  
詳しい説明は割愛しますが、プログラミングでは関数の呼び出し回数が多いと処理速度が低下するため  
issetの方がパフォーマンスが良いです。  
仕様的にも異なる所があり、PHPマニュアルのarray_key_exists関数の説明に以下の記載があります。

> isset() は null 値を持つ配列キーに対して true を返しません。一方、array_key_exists() は true を返します。

今回の課題の場合、どちらを使ってもOKです。

```php
<?php
// クラス・メソッド
class S3Helper
{
    public static function extractKeysFromListObjectsV2Response(array $listObjectsV2Response): array
    {
        if (!array_key_exists('Contents', $listObjectsV2Response)) {
            return [];
        }
        $keys = [];
        foreach ($listObjectsV2Response['Contents'] as $content) {
            $keys[] = $content['Key'];
        }
        return $keys;
    }
}
```

- [演算子（!）](./../../../operators/index.md)
- array_key_exists
  - <https://www.php.net/manual/ja/function.array-key-exists.php>
