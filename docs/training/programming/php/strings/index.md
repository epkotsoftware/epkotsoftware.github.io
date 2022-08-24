# 株式会社エプコットソフトウェア ～ PHPプログラミング編 文字列

## 目次

| No. |  |
| :---: | --- |
| 1 | [文字列](#文字列) |
| 2 | [結合](#結合) |
| 3 | [トリム](#トリム) |
| 4 | [取り出し](#取り出し) |
| 5 | [置換](#置換) |
| 6 | [配列を結合](#配列を結合) |
| 7 | [配列に分割](#配列に分割) |
| 8 | [エスケープシーケンス](#エスケープシーケンス) |
| 9 | [PHPマニュアル](#phpマニュアル) |

## 文字列

実務でも文字列操作は必ず行います。  
本資料で紹介する標準関数は暗記する必要はないので、こういうことが出来るということを覚えておき  
調べてすぐ使えるようになっておきましょう。

- 動画
  - 文字列関数とは？【分かりやすい解説シリーズ #51】【プログラミング】
    - <https://youtu.be/5SsPBjO6yOM>
  - PHPマニュアルを一緒に読み解こう！#10「型：文字列」【プログラミング】
    - <https://youtu.be/MAi4cdq7EKY>
  - PHPマニュアルを一緒に読み解こう！#11「型：文字列（後編）」【プログラミング】
    - <https://youtu.be/P6OJzmCXSHk>

## 結合

Java等のプログラミング言語では、StringBuilderを使って結合するのが一般的ですが  
PHPやJavaScriptでは単純に文字列演算子を使って結合します。  
PHPの場合は結合代入演算子(`.=`)で結合と代入を同時に行うことも出来るので覚えておきましょう。

```php
<?php
// 文字列演算子「.」を使って結合
$result = 'Git' . 'Hub';
echo $result;
// 出力結果: GitHub
```

```php
<?php
// 文字列結合代入演算子「.=」を使って結合
$result = 'Git';
$result .= 'Hub';
echo $result;
// 出力結果: GitHub
```

## トリム

trim関数で文字列の両端の空白を削除します。

```php
<?php

$str = "  abc  ";
// trim関数実行
$result = trim($str);
var_dump($result);
// 出力結果: string(3) "abc"
```

- `trim`
  - <https://www.php.net/manual/ja/function.trim.php>

## 取り出し

substr関数で文字列から指定した部分の文字列を切り出します。

```php
<?php

$str = 'abcdefg';
// substr関数実行 3文字目から3文字切り出す。
$result = substr($str, 2,3);
var_dump($result);
// 出力結果: string(3) "cde"
```

- `PHP: substr`
  - <https://www.php.net/manual/ja/function.substr.php>

## 置換

str_replace関数を使って、検索文字列に一致した文字列を置換します。

```php
<?php

$str = 'abcdefg';
// str_replace関数実行 cde を 123 に置き換え
$result = str_replace('cde', '123', $str);
var_dump($result);
// 出力結果: string(7) "ab123fg"
```

置換と似ていますが、メッセージ等の文字列フォーマットに対して値を埋め込みたい場合  
PHPではsprintf(エスプリントエフ)を使います。

- `str_replace`
  - <https://www.php.net/manual/ja/function.str-replace.php>
- `sprintf`
  - <https://www.php.net/manual/ja/function.sprintf.php>

## 配列を結合

implode関数を使って、文字列配列を指定した区切り文字で連結して一つの文字列にします。  
他の言語では「Join」と呼ばれる処理になります。

```php
<?php

$columns = ['id', 'name', 'note'];
// implode関数実行 文字列配列の全要素を ', ' 区切りで連結
$result = implode(', ', $columns);
var_dump($result);
// 出力結果: string(14) "id, name, note"
```

第２引数の「array」は**文字列の配列**でなければならないので注意が必要です（int型等の文字列変換が可能な値ならOK）。

- `implode`
  - <https://www.php.net/manual/ja/function.implode.php>

## 配列に分割

explode関数でimplodeの逆を行います。  
他の言語では「Split」と呼ばれる処理になります。

```php
<?php

$str = 'id, name, note';
// explode関数実行 ', ' 区切りの文字列を配列に分割
$result = explode(', ', $str);
var_dump($result);
// 出力結果: array(3) { [0]=> string(2) "id" [1]=> string(4) "name" [2]=> string(4) "note" }
```

- `explode`
  - <https://www.php.net/manual/ja/function.explode.php>

## エスケープシーケンス

エスケープは、特殊文字(制御文字等)を文字列として扱う為に、別な文字列に置き換える事を指します。  
PHPの場合、二重引用符（"）で括られた場合にエスケープシーケンスを特殊文字として解釈します。  
引用符(')で括られた場合、特殊文字に変換されないので注意です。

- 動画
  - エスケープとは？【分かりやすい解説シリーズ #47】【プログラミング】
    - <https://youtu.be/E6-JRNfYFu8>

よく使われるものは以下の通りです。  

| 記述 | 意味 |
| :---: | --- |
| `\n` | 改行コード: LF (ラインフィード) |
| `\r\n` | 改行コード: CRLF (キャリッジリターン / ラインフィード) |
| `\t` | 水平タブ (メモ帳等で、キーボードのTabキー押下で出てくる空白文字) |
| `\\` | バックスラッシュ |
| `\$` | ドル記号 |
| `\"` | 二重引用符 |

- `文字列 - 二重引用符`
  - <https://www.php.net/manual/ja/language.types.string.php#language.types.string.syntax.double>

```php
<?php

$str11 = '1-1';
$str12 = '1-2';
$str21 = '2-1';
$str22 = '2-2';

// \n = 改行(LF).   \t = タブ   PHPは「"」で囲む必要がある。
$result = $str11 . "\t" . $str12 . "\n" . $str21 . "\t" . $str22;

echo "<pre>\n{$result}\n</pre>";
```

```html
<pre>
1-1	1-2
2-1	2-2
</pre>
```

## PHPマニュアル

資料作成で参考にしたPHPマニュアルのリンクです。

- `文字列演算子`
  - <https://www.php.net/manual/ja/language.operators.string.php>
- `文字列`
  - <https://www.php.net/manual/ja/language.types.string.php>
- `String関数`
  - <https://www.php.net/manual/ja/ref.strings.php>
