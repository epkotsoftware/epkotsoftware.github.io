# 株式会社エプコットソフトウェア ～ PHPプログラミング編 演算子

## 目次

| No. |  |
| :---: | --- |
| 1 | [演算子一覧](#演算子一覧) |
| 2 | [演算子の優先順位](#演算子の優先順位) |
| 3 | [PHPマニュアル](#phpマニュアル) |

## 演算子一覧

PHPで良く使用する演算子をピックアップしています。

| 種別 | 例 | 名前 |
| --- | --- | --- |
| [代入演算子](https://www.php.net/manual/ja/language.operators.assignment.php) | `=`         | 代入 |
| [文字列演算子](https://www.php.net/manual/ja/language.operators.string.php)   | `$a . $b` | 文字列結合 |
| [比較演算子](https://www.php.net/manual/ja/language.operators.comparison.php) | `$a === $b` | 等しい |
| [比較演算子](https://www.php.net/manual/ja/language.operators.comparison.php) | `$a !== $b` | 等しくない |
| [比較演算子](https://www.php.net/manual/ja/language.operators.comparison.php) | `$a < $b` | より少ない |
| [比較演算子](https://www.php.net/manual/ja/language.operators.comparison.php) | `$a > $b` | より多い |
| [比較演算子](https://www.php.net/manual/ja/language.operators.comparison.php) | `$a <= $b` | より少ないか等しい |
| [比較演算子](https://www.php.net/manual/ja/language.operators.comparison.php) | `$a >= $b` | より多いか等しい |
| [論理演算子](https://www.php.net/manual/ja/language.operators.logical.php)    | `!$a` | 否定 |
| [論理演算子](https://www.php.net/manual/ja/language.operators.logical.php)    | `$a && $b` | 論理積 |
| [論理演算子](https://www.php.net/manual/ja/language.operators.logical.php)    | `$a || $b` | 論理和 |
| [加算子/減算子](https://www.php.net/manual/ja/language.operators.increment.php) | `$a++` | 後置加算子 |
| [算術演算子](https://www.php.net/manual/ja/language.operators.arithmetic.php) | `-$a`       | 負にする |
| [算術演算子](https://www.php.net/manual/ja/language.operators.arithmetic.php) | `$a + $b`   | 加算 |
| [算術演算子](https://www.php.net/manual/ja/language.operators.arithmetic.php) | `$a - $b`   | 減算 |
| [算術演算子](https://www.php.net/manual/ja/language.operators.arithmetic.php) | `$a * $b`   | 乗算 |
| [算術演算子](https://www.php.net/manual/ja/language.operators.arithmetic.php) | `$a / $b`   | 除算 |
| [三項演算子](https://www.php.net/manual/ja/language.operators.comparison.php#language.operators.comparison.ternary) | `$a ? '真' : '偽'`   | 三項演算子 |
| [Null合体演算子](https://www.php.net/manual/ja/language.operators.comparison.php#language.operators.comparison.coalesce) | `$a ?? 'default'`   | Null 合体演算子 |

論理演算子については以下も学習しておきましょう。

- 論理演算の種類とパターンについて｜基本情報技術者試験のポイント解説！
  - <https://www.foresight.jp/fe/column/logical-operation/>

## 演算子の優先順位

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

数学の四則演算における演算記号と同様に  
プログラミングの演算子には優先順位があります。  
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
