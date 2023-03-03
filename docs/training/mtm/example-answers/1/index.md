# プログラミング実践 課題1 解答例

## はじめに

- 1対1PG研修が済んでいない研修生は閲覧禁止
- 課題・解答例に関する質問は講師へのダイレクトメッセージ(チャット)で行うこと

## 例1

```php
<?php

namespace App;

class Helper
{
    public static function same($value1, $value2, $value3): bool
    {
        return $value1 === $value2 && $value1 === $value3;
    }
}
```

## 例2

```php
<?php

namespace App;

class Helper
{
    public static function same($value1, $value2, $value3): bool
    {
        if ($value1 === $value2 && $value1 === $value3) {
            return true;
        }
        return false;
    }
}
```

## 例3

```php
<?php

namespace App;

class Helper
{
    public static function same($value1, $value2, $value3): bool
    {
        if ($value1 === $value2 && $value1 === $value3) {
            return true;
        } else {
            return false;
        }
    }
}
```

## 例4

```php
<?php

namespace App;

class Helper
{
    public static function same($value1, $value2, $value3): bool
    {
        if ($value1 === $value2) {
            if ($value1 === $value3) {
                return true;
            }
        }
        return false;
    }
}
```
