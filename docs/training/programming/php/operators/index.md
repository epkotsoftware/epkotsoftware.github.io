# 株式会社エプコットソフトウェア ～ PHPプログラミング編 演算子

## 目次

| No. |  |
| :---: | --- |
| 1 | [演算子一覧](#演算子一覧) |
| 2 | [論理演算子](#論理演算子) |
| 3 | [演算子の優先順位](#演算子の優先順位) |
| 4 | [PHPマニュアル](#phpマニュアル) |

## 演算子一覧

PHPで良く使用する演算子をピックアップしています。

| 種別 | 例 | 名前 |
| --- | --- | --- |
| [代入演算子](https://www.php.net/manual/ja/language.operators.assignment.php) | `=`         | 代入(Assignment) |
| [文字列演算子](https://www.php.net/manual/ja/language.operators.string.php)   | `$a . $b` | 文字列結合(String concatenation) |
| [比較演算子](https://www.php.net/manual/ja/language.operators.comparison.php) | `$a === $b` | 等しい(Identical) |
| [比較演算子](https://www.php.net/manual/ja/language.operators.comparison.php) | `$a !== $b` | 等しくない(Not identical) |
| [比較演算子](https://www.php.net/manual/ja/language.operators.comparison.php) | `$a < $b` | より少ない(Less than) |
| [比較演算子](https://www.php.net/manual/ja/language.operators.comparison.php) | `$a > $b` | より多い(Greater than) |
| [比較演算子](https://www.php.net/manual/ja/language.operators.comparison.php) | `$a <= $b` | より少ないか等しい(Less than or equal to) |
| [比較演算子](https://www.php.net/manual/ja/language.operators.comparison.php) | `$a >= $b` | より多いか等しい(Greater than or equal to) |
| [論理演算子](https://www.php.net/manual/ja/language.operators.logical.php)(Logical Operators)    | `!$a` | 否定(Not) |
| [論理演算子](https://www.php.net/manual/ja/language.operators.logical.php)(Logical Operators)    | `$a && $b` | 論理積(And) |
| [論理演算子](https://www.php.net/manual/ja/language.operators.logical.php)(Logical Operators)    | `$a || $b` | 論理和(Or) |
| [加算子/減算子](https://www.php.net/manual/ja/language.operators.increment.php) | `$a++` | 後置加算子(Post-increment) |
| [算術演算子](https://www.php.net/manual/ja/language.operators.arithmetic.php) | `-$a`       | 負にする(Negation) |
| [算術演算子](https://www.php.net/manual/ja/language.operators.arithmetic.php) | `$a + $b`   | 加算(Addition) |
| [算術演算子](https://www.php.net/manual/ja/language.operators.arithmetic.php) | `$a - $b`   | 減算(Subtraction) |
| [算術演算子](https://www.php.net/manual/ja/language.operators.arithmetic.php) | `$a * $b`   | 乗算(Multiplication) |
| [算術演算子](https://www.php.net/manual/ja/language.operators.arithmetic.php) | `$a / $b`   | 除算(Division) |
| [三項演算子](https://www.php.net/manual/ja/language.operators.comparison.php#language.operators.comparison.ternary) | `$a ? '真' : '偽'`   | 三項演算子(Ternary) |
| [Null合体演算子](https://www.php.net/manual/ja/language.operators.comparison.php#language.operators.comparison.coalesce) | `$a ?? 'default'`   | Null 合体演算子(Null Coalescing) |

論理演算子については以下も学習しておきましょう。

- 論理演算の種類とパターンについて｜基本情報技術者試験のポイント解説！
  - <https://www.foresight.jp/fe/column/logical-operation/>

## 論理演算子

### 論理否定(Not)

`!` 演算子でbool値の結果を反転させることができます。

```php
<?php
$bool = true;

if (!$bool) {
    echo '結果: true';
} else {
    echo '結果: false';
}
```

上記コードの変数の値を  
以下のように変更すると反転している事がわかります。

| `$bool` | `!$bool` | 出力 |
| :---: | :---: | --- |
| false | true | `結果: true` |
| true | false | `結果: false` |

### 論理積(And)

`&&` 演算子で論理積を求めることができます  
両辺が「true」の時に「true」になります。

```php
<?php
$bool1 = true;
$bool2 = false;

if ($bool1 && $bool2) {
    echo '結果: true';
} else {
    echo '結果: false';
}
```

上記コードの変数の値を  
以下のように変更すると  
両方が true の時に結果が true となり  
それ以外は false になることがわかります。

| `$bool1` | `$bool2` | `$bool1 && $bool2` | 出力 |
| :---: | :---: | :---: | --- |
| false | false | false | `結果: false` |
| false | true | false | `結果: false` |
| true | false | false | `結果: false` |
| true | true | true | `結果: true` |

### 論理和(Or)

`||` 演算子で論理和を求めることができます  
両辺のどちらかが「true」の時に「true」になります。

```php
<?php
$bool1 = true;
$bool2 = false;

if ($bool1 || $bool2) {
    echo '結果: true';
} else {
    echo '結果: false';
}
```

上記コードの変数の値を  
以下のように変更すると  
どちらかが true の時に結果が true となり  
それ以外は false になることがわかります。

| `$bool1` | `$bool2` | `$bool1 || $bool2` | 出力 |
| :---: | :---: | :---: | --- |
| false | false | false | `結果: false` |
| false | true | true | `結果: true` |
| true | false | true | `結果: true` |
| true | true | true | `結果: true` |

### 論理演算子を使った例

実務において論理演算子は単体で使うことは少なく  
他の関数や演算子と組み合わせて使います。  
いくつか例を見ていきましょう。

#### 例1

値が整数型(int)かつ、0以上であるかを判定する。  
`is_int`関数は引数の型が整数型の場合true、それ以外の場合はfalseを返す。

```php
<?php
$value = 2;

// $valueがint型
$bool1 = is_int($value);
// $valueが0以上
$bool2 = 0 <= $value;

if ($bool1 && $bool2) {
    echo '結果: OK';
} else {
    echo '結果: エラー';
}
```

結果を変数に入れずに以下のように記述することも可能です。  
条件式が複雑にならない限りは以下のように記述するようにしましょう。

```php
<?php
$value = 2;

// $valueがint型 かつ(And) $valueが0以上
if (is_int($value) && 0 <= $value) {
    echo '結果: OK';
} else {
    echo '結果: エラー';
}
```

| `$value` | `is_int($value) && 0 <= $value` | 出力 | 備考 |
| :---: | :---: | --- | --- |
| `2` | true | `結果: OK` | int型かつ0以上 |
| `1` | true | `結果: OK` | int型かつ0以上 |
| `0` | true | `結果: OK` | int型かつ0以上 |
| `-1` | false | `結果: エラー` | 0未満 |
| `1.1` | false | `結果: エラー` | float型 |
| `'1'` | false | `結果: エラー` | string型 |

#### 例2

2つのスコアのどちらかが80以上の場合、合格にする。

```php
<?php
$score1 = 80;
$score2 = 0;

// $score1が80以上 または(Or) $score2が80以上
if (80 <= $score1 || 80 <= $score2) {
    echo '結果: 合格';
} else {
    echo '結果: 不合格';
}
```

| `$score1` | `$score2` | `80 <= $score1 || 80 <= $score2` | 出力 | 備考 |
| :---: | :---: | --- | --- |
| 80 | 80 | true | `結果: 合格` | `$score1`、`$score2`が80以上 |
| 80 | 0 | true | `結果: 合格` | `$score1`が80以上 |
| 0 | 80 | true | `結果: 合格` | `$score2`が80以上 |
| 81 | 0 | true | `結果: 合格` | `$score1`が80以上 |
| 0 | 81 | true | `結果: 合格` | `$score2`が80以上 |
| 79 | 79 | false | `結果: 不合格` | `$score1`、`$score2`が80未満 |

## 演算子の優先順位

数学の四則演算における演算記号と同様に  
プログラミングの演算子には優先順位があります。  
`()`を使えば優先度は上げられますので  
暗記する必要はありません（筆者も細かい優先度は覚えていません）。  

よく使う「`&&`」・「`||`」の優先度が低いことを覚えておけば  
問題ありません。

| 優先順 | 演算子 |
| --- | --- |
| 1 | `++` `--` |
| 2 | `!` |
| 3 | `*` `/` `%` |
| 4 | `+` `-` `.` |
| 5 | `<` `<=` `>` `>=` |
| 6 | `===` `!==` |
| 7 | `&&` |
| 8 | `||` |

- 演算子の優先順位
  - <https://www.php.net/manual/ja/language.operators.precedence.php>

以下のif文の条件を見ていきましょう。

```php
// スコアがマイナス、または100を超えた場合はエラー
if ($score < 0 || $score > 100) {
    throw new Exception('スコアが不正です。');
}
```

| 優先順 | 演算子 |
| --- | --- |
| 1 | `<` `<=` `>` `>=` |
| 2 | `||` |

優先度の高い「`$score < 0`」と「`$score > 100`」の条件が先に評価され  
その2つの条件式の結果の論理和(`||`)を求めます。  

優先順位の低い演算子を優先させたい場合、四則演算と同様に  
「`()`」をつけることで優先順位を上げる事が出来ます。  
また、条件が複雑になり可読性が悪くなってしまう場合にも「`()`」をつけると良いです。  

```php
// スコアがマイナス、または100を超えた場合はエラー
if (($score < 0) || ($score > 100)) {
    throw new Exception('スコアが不正です。');
}
```

## PHPマニュアル

資料作成で参考にしたPHPマニュアルのリンクです。

- `演算子`
  - <https://www.php.net/manual/ja/language.operators.php>
