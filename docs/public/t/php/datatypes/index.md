# PHPプログラミング編 データ型

## はじめに

PHPの基本となるデータ型を学習します。  

```php
<?php
$intValue = 42;
var_dump($intValue); // 出力: int(42)

$floatValue = 3.14;
var_dump($floatValue); // 出力: float(3.14)

$stringValue = 'aaa';
var_dump($stringValue); // 出力: string(3) "aaa"

$boolValue = true; // 「true」 or 「false」
var_dump($boolValue); // 出力: bool(true)

$nullValue = null;
var_dump($nullValue); // 出力: NULL

$arrayValue = ['a', 'b', 'c']; // array('a', 'b', 'c') でも同じ
var_dump($arrayValue);
// 出力:
//   array(3) {
//     [0]=>
//     string(1) "a"
//     [1]=>
//     string(1) "b"
//     [2]=>
//     string(1) "c"
//   }
```

## データ型とは

データ型はコンピューターが扱うデータ形式の事を指します。

- <https://e-words.jp/w/データ型.html>

## データ型一覧

| 型の種類 | PHPデータ型 | 説明 | 例 |
| --- | --- | --- | --- |
| [整数型](https://e-words.jp/w/整数型.html) | [int](https://www.php.net/manual/ja/language.types.integer.php)<br>（イント）    | 正の整数、負の整数、ゼロを表す。<br>integer（インテジャー）とも呼ばれる | `42`, `-10`, `0` |
| [浮動小数点数型](https://e-words.jp/w/浮動小数点数型.html) | [float](https://www.php.net/manual/ja/language.types.float.php)<br>（フロート）  | 小数を表す。<br>double（ダブル）とも呼ばれる`※1` | `3.14`, `-0.5`, `1.0E+10` |
| [文字列型](https://e-words.jp/w/文字列型.html) | [string](https://www.php.net/manual/ja/language.types.string.php)<br>（ストリング） | テキストデータを表す。 | `"Hello"`, `'World'`, `""` |
| [論理型](https://e-words.jp/w/ブール型.html) | [bool](https://www.php.net/manual/ja/language.types.boolean.php)<br>（ブール）   | 真 (true) または偽 (false) を表す。<br>boolean（ブーリアン）とも呼ばれる | `true`, `false` |
| [Null](https://e-words.jp/w/Null.html) | [null](https://www.php.net/manual/ja/language.types.null.php)<br>（ヌル）   | NULL 値を表す。                               | `null` |
| [配列型](https://e-words.jp/w/配列.html) | [array](https://www.php.net/manual/ja/language.types.array.php)<br>（アレイ）  | 複数の値をまとめて格納する。          | `[1, 2, 3]`, `['a', 'b', 'c']` |

- `※1` 他のプログラミング言語では、[float型（単精度浮動小数点数型）](https://e-words.jp/w/float型.html)と[double型（倍精度浮動小数点数型）](https://e-words.jp/w/double型.html)は明確に違いますが、PHPにおいては型自体の違いはありません。  
  そのため、型をチェックする[is_float](https://www.php.net/manual/ja/function.is-float.php)と、[is_double](https://www.php.net/manual/ja/function.is-double.php)関数は、PHP8.2時点では同じ関数として扱われています。

```php
<?php
$floatValue = 3.14;
var_dump($floatValue); // 出力: float(3.14)

$isDouble = is_double($floatValue);
var_dump($isDouble); // 出力: true
```
