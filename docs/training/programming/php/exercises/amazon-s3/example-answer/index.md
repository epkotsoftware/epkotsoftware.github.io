# 株式会社エプコットソフトウェア ～ PHPプログラミング編 課題(Split the bill)解答例

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
また、issetでは対象のキーにnullが入っていた場合、falseになってしまうため  
キーの存在チェックを行いたい場合、array_key_exists関数を使うようにしましょう。  

今回の課題の場合、どちらでもOKです。

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