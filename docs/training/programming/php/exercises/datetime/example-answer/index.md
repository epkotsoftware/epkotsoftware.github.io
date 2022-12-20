# 株式会社エプコットソフトウェア ～ PHP課題(median) 解答例

## 例

```php
<?php

namespace App\Helpers;

use DateTimeInterface;

class DateTimeHelper
{
    /**
     * @param DateTimeInterface $datetime
     * @return string HH:mm
     */
    public static function toHMString(DateTimeInterface $datetime): string
    {
        return $datetime->format('H:i');
    }

    /**
     * @param DateTimeInterface $datetime
     * @return string HH:mm:ss
     */
    public static function toHMSString(DateTimeInterface $datetime): string
    {
        return $datetime->format('H:i:s');
    }

    /**
     * @param DateTimeInterface $datetime
     * @return string yyyyMMdd
     */
    public static function toYMDString(DateTimeInterface $datetime): string
    {
        return $datetime->format('Ymd');
    }

    /**
     * @param DateTimeInterface $datetime
     * @return string yyyy/MM/dd
     */
    public static function toYMDSlashString(DateTimeInterface $datetime): string
    {
        return $datetime->format('Y/m/d');
    }

    /**
     * @param DateTimeInterface $datetime
     * @return string yyyy/MM/dd HH:mm:ss
     */
    public static function toYMDHMSSlashString(DateTimeInterface $datetime): string
    {
        return $datetime->format('Y/m/d H:i:s');
    }

    /**
     * @param DateTimeInterface $datetime
     * @return string yyyy/MM/dd HH:mm:ss.fff
     */
    public static function toYMDHMSFFFSlashString(DateTimeInterface $datetime): string
    {
        return $datetime->format('Y/m/d H:i:s.v');
    }

    /**
     * @param DateTimeInterface $datetime
     * @return string yyyy/MM/dd HH:mm:ss.ffffff
     */
    public static function toYMDHMSFFFFFFSlashString(DateTimeInterface $datetime): string
    {
        return $datetime->format('Y/m/d H:i:s.u');
    }
}
```

date_format関数もありますが  
基本的にはオブジェクト指向型を使用するようにしましょう。  

今回は名前空間があるため、例えばExceptionクラスをuseなしで使おうとすると  
存在しない`\App\Helpers\Exception`クラスを参照することとなりエラーになります。  

今回は`DateTimeInterface`インターフェースを型宣言で使用するため  
`use DateTimeInterface;` の記述をして`DateTimeInterface`という名称で使えるようにしています。  
実務でもバグになることが多いため、しっかり学習しましょう。  

- [名前空間](./../../../namespaces/index.md)

## DateTimeフォーマット

よく使う書式をまとめました。  
その他の書式については、PHPマニュアルのDateTime formatを参照してください。  

| フォーマット<br>文字 | 説明 | 例 | 備考 |
| :---: | --- | :---: | --- |
| Y | 年（4桁） | 2022 |  |
| m | 月（2桁先頭0埋め） | 01〜12 |  |
| d | 日（2桁先頭0埋め） | 01〜31 |  |
| H | 時（24時間単位） | 0〜23 |  |
| i | 分（2桁先頭0埋め） | 00〜59 |  |
| s | 秒（2桁先頭0埋め） | 00〜59 |  |
| v | ミリ秒（3桁先頭0埋め） | 000〜999 |  |
| u | マイクロ秒（6桁先頭0埋め） | 000000〜999999 |  |
| c | ISO 8601 | 2999-12-31T23:58:59+09:00 | 海外も考慮するシステムの場合<br>タイムゾーンも必要になるため、この形式が使われることがあります。 |

- DateTime format
  - <https://www.php.net/manual/ja/datetime.format.php>
- ISO 8601
  - <https://ja.wikipedia.org/wiki/ISO_8601>
