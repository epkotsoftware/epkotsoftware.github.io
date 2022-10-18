# 株式会社エプコットソフトウェア ～ PHPプログラミング編 名前空間

## 目次

| No. |  |
| :---: | --- |
| 1 | [名前空間](#名前空間) |
| 2 | [useの注意点](#useの注意点) |
| 3 | [PHPマニュアル](#phpマニュアル) |

## 名前空間

PHPを含む一般的なプログラミング言語では同一名称のクラスを定義することが出来ません。  
例えば、PHPフレームワークのLaravelには`Str`クラスというものがありますが  
Laravelで自分が作成したアプリケーションに`Str`という名前のクラスを作りたい場合、作成出来なくなってしまいます。  
また、作りたいクラス名称の重複がないか毎回調べる必要があるので大変です。  

これを解決する方法が「**名前空間(namespace)**」です。  
名前空間はファイルシステムの「フォルダ」のイメージに近く  
同一名前空間に複数のクラスを定義することが出来  
完全修飾名が異なれば同名クラスであっても共存できます。  

例えば以下の8つのクラスは共存が可能です。  

| 名前空間 | クラス名 | 完全修飾名 |
| --- | --- | --- |
| `Illuminate\Support` | `Str` | `\Illuminate\Support\Str` |
| `Illuminate\Support` | `Arr` | `\Illuminate\Support\Arr` |
| `App` | `Str` | `\App\Str` |
| `App` | `Arr` | `\App\Arr` |
| なし | `Str` | `\Str` |
| なし | `Arr` | `\Arr` |

LaravelのStrクラスは名前空間として「`Illuminate\Support`」が設定されています。  
簡単にすると以下のように定義されています。  

```php
<?php

// \Illuminate\Support
namespace Illuminate\Support;

// \Illuminate\Support\Str
class Str
{
    // \Illuminate\Support\Str::lower()
    public static function lower($value)
    {
        return mb_strtolower($value, 'UTF-8');
    }
}
```

LaravelのStrクラスを使う場合、「`\Illuminate\Support\Str`」と指定する必要があります。  
以下は`lower`メソッドを呼び出した例です。

```php
$converted = \Illuminate\Support\Str::lower('LARAVEL');
```

毎回、上記のような長い名前を指定すると大変なので「use」を使って  
エイリアス（別名）を作成して、短い名前でアクセス出来るようにします。  

```php
// 構文1
use 名前空間\クラス名 as 別名;
// 構文2
use 名前空間\クラス名;
```

上記の構文では「名前空間\クラス名」となっていますが  
メソッドの指定や、名前空間だけでも指定が可能です。  
一般的には「名前空間\クラス名」という覚え方で問題ありません。  

```php
// \Illuminate\Support\Str を 「Str」という名前でもアクセス出来るようにする。
use Illuminate\Support\Str as Str;

$converted = Str::lower('LARAVEL');
```

```php
// use Illuminate\Support\Str as Str と同じ
use Illuminate\Support\Str;

$converted = Str::lower('LARAVEL');
```

UserControllerというクラスで「`\Illuminate\Support\Str`」クラスを使った例です。  
useはクラスの外に記載します。  

```php
<?php

namespace App\Controllers;

// \Illuminate\Support\Str を 「Str」という名前でもアクセス出来るようにする。
use Illuminate\Support\Str;

class UserController
{
    public function index()
    {
        // \Illuminate\Support\Str::lower('LARAVEL') と同じ
        $converted = Str::lower('LARAVEL');
        var_dump($converted);
    }
}
```

名前空間が設定されているPHPファイルで、名前空間のないクラスを使う際も  
useを忘れないようにしましょう（もしくは完全修飾名にする）。  
「Exception」や「DateTime」等のPHP標準のクラスは名前空間が設定されていないので注意です。  
useを忘れた場合、現在の名前空間の相対クラスにアクセスしようとします。

```php
<?php

namespace App\Controllers;

// \DateTime を 「DateTime」という名前でもアクセス出来るようにする。
use DateTime;

class UserController
{
    public function index()
    {
        // new \DateTime() と同じ、useを忘れた場合「\App\Controllers\DateTime」にアクセスしようとしてエラーになる。
        $dateTime = new DateTime();
        $dateTimeString = $dateTime->format('Y/m/d H:i:s');
        var_dump($dateTimeString);
    }
}

// 実行
(new UserController())->index();
```

- `Laravel 9.x ヘルパ`
  - <https://readouble.com/laravel/9.x/ja/helpers.html>
  - `Illuminate\Support\Str クラス(GitHub)`
    - <https://github.com/illuminate/support/blob/9.x/Str.php>

## useの注意点

「`use`」はエイリアスを作成する以外にも使われます。  
以下の３つは、別物と考えてください。  

| use | 用途 | 記載場所/記載例 |
| :---: | :---: | --- |
| 名前空間のuse | エイリアス（別名）を作成する | クラス外に記載<br>`use 名前空間\クラス名;`<br>`use 名前空間\クラス名 as 別名;` |
| トレイトのuse | トレイトで定義したメンバーをクラスに追加する | クラス内に記載<br>`use トレイト名;` |
| 無名関数のuse | 親スコープから変数を引き継ぐ | 処理に記載<br>`function () use ($変数1, $変数2) {};` |

## PHPマニュアル

資料作成で参考にしたPHPマニュアルのリンクです。

- `名前空間`
  - <https://www.php.net/manual/ja/language.namespaces.php>
- `トレイト`
  - <https://www.php.net/manual/ja/language.oop5.traits.php>
- `無名関数`
  - <https://www.php.net/manual/ja/functions.anonymous.php>
