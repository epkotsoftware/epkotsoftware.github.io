# 株式会社エプコットソフトウェア ～ プログラミング

- [新人研修](./training.md) が終わっている前提となります。

## はじめに

### 言語について

`PHP`・`JavaScript`の知識があれば、比較的に習得できそうな言語や
`Java`や`Java`に近い言語（`C#`、`VB`）をピックアップしています。  
以下の理由により候補から外している言語もあります。

- 需要がない(`VB6`等)
- 研修からの流れでは習得が難しい(`C`、`C++`、`Objective-C`等)
- エラーハンドリングが`PHP`・`JavaScript`等と異なる(`Go`等)

### JavaScriptについて

- 「JavaScript」と「Java」は名称が似てるだけの異なる言語です。
  - <https://ja.wikipedia.org/wiki/JavaScript>
- 2022/6/15でブラウザの「`Internet Explorer(IE)`」が廃止されるため、IE非対応の文法も含めています。
  - HTML・CSS・JavaScriptを現場で扱う際は、対応ブラウザは確認しましょう。
    - 「`let`」や「`for...of`」 はIEでは使えません。
      - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/let#browser_compatibility>
      - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...of#browser_compatibility>
- JavaScriptを調べる際は「MDN Web Docs」で調べることを推奨します（対応ブラウザがわかるため）。
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript>

## 初級

### 復習

PHPをベースに基礎を深く学習していきましょう。

- 初心者向けPHPプログラミングチュートリアル(1:04:30 ～)
  - <https://youtu.be/HNHjpmdPFNU?t=3870s>

### 型

#### 宣言

```php
// PHP
// 定数 (PHPでは関数の中に定義出来ない)
const CONSTANT_VALUE = "constant value";
// 変数 (PHPでは宣言が不要)
$value = "value";
```

```javascript
// JavaScript
// 定数
const CONSTANT_VALUE = "constant value";
// 変数 (IEに対応させる場合は var を使用すること)
let value = "value";
```

※ 他の言語は省略

#### データ型

```php
// PHP
$variables = [
    // スカラー型 (scalar types)
    'bool(true)'  => true,
    'bool(false)' => false,
    'int'         => 1,
    'float'       => 1.0,
    'string'      => 'string_value',
    // 複合型 (compound types)
    'array(iterable)'             => ['a', 'b', 'c'],
    'Closure(callable, object)'   => function () {},
    'Generator(iterable, object)' => (function () { yield 1; })(),
    // 特別な型 (special types)
    'resource' => fopen($filePath, 'r'),
    'NULL'     => null,
];
```

- Wikipedia
  - <https://ja.wikipedia.org/wiki/データ型>
- PHP
  - <https://www.php.net/manual/ja/language.types.intro.php>
- JavaScript
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Data_structures>
  - const
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/const>
  - let
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/let>
  - var
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/var>
- Java
  - <https://www.javadrive.jp/start/var/index4.html>
- Python
  - <https://dot-blog.jp/news/python-object-type/>
- C#
  - <https://docs.microsoft.com/ja-jp/dotnet/csharp/language-reference/builtin-types/built-in-types>
- Visual Basic
  - <https://docs.microsoft.com/ja-jp/dotnet/visual-basic/language-reference/data-types/>
- Swift
  - <https://swift.codelly.dev/guide/基本の型/Bool型.html>

### if

```php
// PHP
function test(int $value): string
{
    $result = -1;
    if ($value >= 100) {
        // $value が 100 以上の時の処理
        $result = 2;
    } elseif ($value >= 80) {
        // $value が 100 未満かつ、 80 以上の時の処理
        $result = 1;
    } else {
        // $value が 80 未満の時の処理
        $result = 0;
    }

    return "Result: {$result}  Value: {$value}";
}
```

- Wikipedia
  - <https://ja.wikipedia.org/wiki/If文>
- PHP
  - <https://www.php.net/manual/ja/control-structures.if.php>
- JavaScript
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/if...else>
- Java
  - <https://www.javadrive.jp/start/if/index1.html>
- Python
  - <https://docs.python.org/ja/3/tutorial/controlflow.html#if-statements>
- C#
  - <https://docs.microsoft.com/ja-jp/dotnet/csharp/language-reference/statements/selection-statements>
- Visual Basic
  - <https://docs.microsoft.com/ja-jp/dotnet/visual-basic/language-reference/statements/if-then-else-statement>
- Swift
  - <https://swift.codelly.dev/guide/制御構文/条件式.html>

### for

業務ではforeach・while・do-whileを使用するケースが多いです。

- Wikipedia
  - <https://ja.wikipedia.org/wiki/For文>
- PHP
  - <https://www.php.net/manual/ja/control-structures.for.php>
- JavaScript
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for>
- Java
  - <https://www.javadrive.jp/start/for/index2.html>
- Python
  - <https://docs.python.org/ja/3/tutorial/controlflow.html#for-statements>
    - Pythonには他の言語で言うところの for 文がありません、このリンクについては foreach に該当します。
    - range関数を使うことでfor文の再現が出来ます（PHPのrange関数とは異なりイテレータを生成）。
- C#
  - <https://docs.microsoft.com/ja-jp/dotnet/csharp/language-reference/statements/iteration-statements#the-for-statement>
- Visual Basic
  - <https://docs.microsoft.com/ja-jp/dotnet/visual-basic/language-reference/statements/for-next-statement>
- Swift
  - <https://swift.codelly.dev/guide/制御構文/繰り返し文.html>

### foreach

配列・連想配列・イテレータのループに使用します。

```php
// PHP
/**
 * @param iterable|array|Generator $iterable
 * @return string
 */
function iterableToString(iterable $iterable): string
{
    $ret = '';
    foreach ($iterable as $key => $value) {
        $ret .= "Key: {$key}  Value: {$value}\n";
    }
    return $ret;
}
```

- Wikipedia
  - <https://ja.wikipedia.org/wiki/Foreach文>
- PHP
  - <https://www.php.net/manual/ja/control-structures.foreach.php>
- JavaScript
  - オブジェクト(連想配列)の場合は「`for...in`」（配列での使用は非推奨）
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...in>
  - 配列の場合は「`for...of`」（IEでは使用不可）
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...of>
- Java
  - <https://www.javadrive.jp/start/for/index2.html>
- Python
  - <https://docs.python.org/ja/3/tutorial/controlflow.html#for-statements>
- C#
  - <https://docs.microsoft.com/ja-jp/dotnet/csharp/language-reference/statements/iteration-statements#the-foreach-statement>
- Visual Basic
  - <https://docs.microsoft.com/ja-jp/dotnet/visual-basic/language-reference/statements/for-each-next-statement>
- Swift
  - <https://swift.codelly.dev/guide/制御構文/繰り返し文.html>

### enum(列挙型)

- PHP (8.1～)
  - <https://www.php.net/manual/ja/language.types.enumerations.php>
- JavaScript
  - **2021/11 現在、enum(列挙型) は存在しません。**
- Java
  - <https://www.tech-teacher.jp/blog/java-enum/>
- Python
  - <https://docs.python.org/ja/3/library/enum.html>
- C#
  - <https://docs.microsoft.com/ja-jp/dotnet/csharp/language-reference/builtin-types/enum>
- Visual Basic
  - <https://docs.microsoft.com/ja-jp/dotnet/visual-basic/language-reference/statements/enum-statement>
- Swift
  - <https://swift.codelly.dev/guide/列挙型/>

## 中級

### エラー


TODO


https://docs.python.org/ja/3/tutorial/errors.html

### アクセス修飾子

TODO

- PHP
- JavaScript
- Java
- Python
- C#
  - <https://docs.microsoft.com/ja-jp/dotnet/csharp/language-reference/keywords/access-modifiers>
- Visual Basic
- Swift

### 値型・参照型

TODO


### ミュータブル・イミュータブル

#### ミュータブル

インスタンス生成後に状態を変えることができるオブジェクトです。

- PHPでのクラス実装例

```php
// PHP
class CounterMutable implements Countable
{
    private int $i = 0;

    public function count(): int
    {
      return $this->i;
    }

    public function add(int $value): self
    {
        // mutable (ミュータブル) ～ インスタンス生成後に状態を変えることができる
        //   （このクラスの場合、メンバ変数の $i ）
        $this->i += $value;
        return $this;
    }
}
```

#### イミュータブル

インスタンス生成後に状態を変えることができないオブジェクトです。

- PHPでのクラス実装例

```php
// PHP
class CounterMutable implements Countable
{
    private int $i = 0;

    public function count(): int
    {
      return $this->i;
    }

    public function add(int $value): self
    {
        // immutable (イミュータブル) ～ インスタンス生成後に状態を変えることができない
        $copy = clone $this; // オブジェクトコピーを生成
        $copy->i += $value; // 別オブジェクトだが private メンバ変数にアクセス可能
        return $copy; // コピーを返す
    }
}
```
