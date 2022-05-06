# 株式会社エプコットソフトウェア ～ プログラミング編

## はじめに

このページで学習する内容については、プログラミングの基礎的な部分となり  
他の言語にも存在する機能になります。  

今回の学習では暗記するのではなく、扱えるようになるのが目的です。  
現場で実装(プログラミング)する場合、現場側で用意されたコードを理解し  
今回、学習する機能を組み合わせて作っていく必要があります。  

本資料では基本的に公式やWikipediaのリンクを載せていますが  
難しくてわからない場合、動画・[CBC](https://cbc-study.com/)での復習  
または検索して自身がわかる情報を探してください。  

読むだけでは身につかないので、実際にコードを書き  
使いながら学んでいきましょう。  

## 目的

この研修ではプログラミング学習がメインにはなっていますが  
読解力の向上や、公式ドキュメントを読む癖をつけてもらうのも目的の一つです。  

実際、現場に入ると難しい文章を読む機会が多く出てきます。  

- 設計書・仕様書（現場によっては英語のケースもある）
- 高度な技術を使ったもの
- 業務知識に関する資料
- 現場独自のフレームワークが用意されており、用意されたドキュメントを読むしかなく検索しても出てこない。
- 検索しても日本サイトが出てこないようなリファレンス（最新のAPI・フレームワーク等）
- マイナーなライブラリのリファレンス

### 実際必要になった資料

実際、現場で読む必要が出てきた公開されている資料です。  
ほとんどがやりたいことを検索してもヒットせず  
公式資料から情報を得るしかありませんでした。  

これらの資料は必要になったら読めば良いので  
この業界で仕事を続けていく上で、公式ドキュメントは  
読む必要が出てくるということだけ覚えておきましょう。  

- GitHub Docs
  - <https://docs.github.com/ja>
- ライブラリ・API関連
  - Android API reference （2010年頃は日本語の記事がほとんどなかった）
    - <https://developer.android.com/reference>
  - Laravel API （基本的には日本語の公式情報だけでも何とかなるが、Modelの細かい部分に関しては調べても出てこないが多かったためリファレンスから情報を得ていた）
    - <https://laravel.com/api/9.x/>
  - AWS
    - AWS SDK for PHP Documentation
      - <https://docs.aws.amazon.com/sdk-for-php/>
  - YouTube Data API
    - <https://developers.google.com/youtube/v3/docs>
  - Dojo Toolkit
    - <https://dojotoolkit.org/>
  - Bing Maps Documentation
    - <https://docs.microsoft.com/en-us/bingmaps/>
  - ArcGIS Developer guides
    - <https://developers.arcgis.com/documentation/>
- ファイル関連
  - DDEX
    - DDEX Knowledge Base
      - <https://kb.ddex.net/display/HBK/>
    - DDEX Data Dictionary ern:NewReleaseMessage
      - <http://service.ddex.net/dd/ERN38/dd/ern_NewReleaseMessage.html>

## 言語について

プログラミング言語は多数ありますが  
`PHP`・`JavaScript`をピックアップしています。

## PHPについて

- ここまでの研修でもPHPについては触れているので概要は割愛します。
- バージョン
  - 2022/01 現在、7.4がサポート期間内で最も古いバージョンになります。
    - PHP Supported Versions
      - <https://www.php.net/supported-versions.php>
    - PHP Downloads
      - <https://www.php.net/downloads>
- PHPを調べる際は「PHP マニュアル」で調べることを推奨します。  
  PHPは言語としてのハードルが低い分、情報が多く、誤った情報も多いため  
  まずは「PHPマニュアル」で調べて、わかりにくかったら、他のサイトを検索する  
  または、他のサイトから情報を得て、関数の使い方を「PHPマニュアル」で調べるのが良いです。
  - <https://www.php.net/manual/ja/index.php>

## JavaScriptについて

- 「JavaScript」と「Java」は名称が似てるだけの異なる言語です。
  - <https://ja.wikipedia.org/wiki/JavaScript>
- 2022/6/15でブラウザの「`Internet Explorer(IE)`」が廃止されるため、IE非対応の文法も含めています。
  - HTML・CSS・JavaScriptを現場で扱う際は、対応ブラウザは確認しましょう。
    - 「`let`」や「`for...of`」 はIEでは使えません。
      - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/let#browser_compatibility>
      - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...of#browser_compatibility>
- JavaScriptを調べる際は「MDN Web Docs」で調べることを推奨します（対応ブラウザがわかるため）。
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript>

## 型

### 宣言

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
// 変数 (IEに対応させる場合は var を使用すること、再度代入を行わない場合はconstを使用するのが良い)
let value = "value";
```

- CBC ～ PHPの変数
  - <https://cbc-study.com/training/advanced/page2#s3>
- Wikipedia
  - 定数
    - <https://ja.wikipedia.org/wiki/定数_(プログラミング)>
  - 変数
    - <https://ja.wikipedia.org/wiki/変数_(プログラミング)>
- JavaScript
  - const
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/const>
  - let
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/let>
- 動画
  - 変数とは【分かりやすい解説シリーズ #71】【プログラミング】【初心者向け】
    - <https://youtu.be/52hfFm4nyow>
  - 定数とは？【分かりやすい解説シリーズ #54】【プログラミング】
    - <https://youtu.be/jzIlAf5XKxg>
  - 変数名の付け方のコツ、教えます。【プログラミング】
    - <https://youtu.be/VncXPUjI2As>

数値型を扱う際に以下も把握しておきましょう。

- コンピュータで扱う数値の誤差について｜ 基本情報技術者試験のポイント解説
  - <https://www.foresight.jp/fe/column/about-error/>

### データ型

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
  - 動画
    - データ型とは？【分かりやすい解説シリーズ #50】【プログラミング】
      - <https://youtu.be/DL5f99KgjaU>
    - PHPマニュアルを一緒に読み解こう！#6「型：はじめに」【プログラミング】
      - <https://youtu.be/4gOy6ciNwd4>
    - PHPマニュアルを一緒に読み解こう！#7「型：論理型」【プログラミング】
      - <https://youtu.be/lvxD9Glk5hw>
    - PHPマニュアルを一緒に読み解こう！#8「型：整数 」【プログラミング】
      - <https://youtu.be/6yPOQufNp20>
    - PHPマニュアルを一緒に読み解こう！#9「型：浮動小数点数」【プログラミング】
      - <https://youtu.be/_9UsIayxp70>
- JavaScript
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Data_structures>
  - const
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/const>
  - let
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/let>
  - var
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/var>

### 文字列

- PHP
  - <https://www.php.net/manual/ja/language.types.string.php>
- JavaScript
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String>
- 動画
  - 文字列関数とは？【分かりやすい解説シリーズ #51】【プログラミング】
    - <https://youtu.be/5SsPBjO6yOM>
  - エスケープとは？【分かりやすい解説シリーズ #47】【プログラミング】
    - <https://youtu.be/E6-JRNfYFu8>
  - PHPマニュアルを一緒に読み解こう！#10「型：文字列」【プログラミング】
    - <https://youtu.be/MAi4cdq7EKY>
  - PHPマニュアルを一緒に読み解こう！#11「型：文字列（後編）」【プログラミング】
    - <https://youtu.be/P6OJzmCXSHk>

### 配列

```php
// PHP
//   配列
$array = [
    '101',
    'NAME_101',
    'NOTE_101',
];
//   連想配列（PHPでは連想配列も配列も同じ型となる）
$map = [
    'id' => '101',
    'name' => 'NAME_101',
    'note' => 'NOTE_101',
];

// 配列から1番目の要素を取り出す
$result1 = $array[0]; // $result1 には 101 が入る
// 配列から3番目の要素を取り出す
$result2 = $array[2]; // $result2 には NOTE101 が入る

// 連想配列からキー「id」の要素を取り出す
$result3 = $map['id']; // $result3 には 101 が入る
// 連想配列からキー「note」の要素を取り出す
$result4 = $map['note']; // $result4 には NOTE101 が入る
```

```javascript
// JavaScript
//   配列
let array = [
    '101',
    'NAME_101',
    'NOTE_101',
];
//   連想配列（JavaScriptではObject型となる）
let map = {
    id: '101',
    name: 'NAME_101',
    note: 'NOTE_101',
};

// 配列から1番目の要素を取り出す
let result1 = array[0]; // result1 には 101 が入る
// 配列から3番目の要素を取り出す
let result2 = array[2]; // result2 には NOTE101 が入る

// 連想配列からキー「id」の要素を取り出す
let result3 = map['id']; // result3 には 101 が入る
let result3_2 = map.id; // result3_2 には 101 が入る
// 連想配列からキー「note」の要素を取り出す
let result4 = map['note']; // result4 には NOTE101 が入る
let result4_2 = map.note; // result4_2 には NOTE101 が入る
```

- Wikipedia
  - <https://ja.wikipedia.org/wiki/配列>
  - <https://ja.wikipedia.org/wiki/連想配列>
- PHP
  - <https://www.php.net/manual/ja/language.types.array.php>
- JavaScript
  - Array
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array>
  - オブジェクトでの作業
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Working_with_Objects>
- 動画
  - 配列とは？【分かりやすい解説シリーズ #37】【プログラミング】
    - <https://youtu.be/SdX8I1ImlVA>
  - 連想配列とは？【分かりやすい解説シリーズ #62】【プログラミング】
    - <https://youtu.be/gASP8w4lVXM>

## if

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

- CBC ～ PHPで条件によって処理を変える（条件分岐）
  - <https://cbc-study.com/training/advanced/page3#pl-0>
- Wikipedia
  - <https://ja.wikipedia.org/wiki/If文>
- PHP
  - <https://www.php.net/manual/ja/control-structures.if.php>
- JavaScript
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/if...else>
- 動画
  - if文とは？【分かりやすい解説シリーズ #69】【プログラミング】
    - <https://youtu.be/O5yDW1l8uVM>
  - 条件分岐とは？【分かりやすい解説シリーズ #4】【プログラミング】
    - <https://youtu.be/LhvNDTSysOk>
  - 比較演算子とは？【分かりやすい解説シリーズ #12】【プログラミング】
    - <https://youtu.be/YczPwx8L5yc>

## 演算子

- PHP
  - <https://www.php.net/manual/ja/language.operators.php>
- JavaScript
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators>

### PHPで使用頻度の高い演算子

PHPで良く使用する演算子は以下です。

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

論理演算子については以下も学習しておきましょう。

- 論理演算の種類とパターンについて｜基本情報技術者試験のポイント解説！
  - <https://www.foresight.jp/fe/column/logical-operation/>

### PHPの演算子の優先順位

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

上記の条件で演算子の優先順についてはPHPマニュアルに書かれている通り  
以下の順番になります。

| 優先順 | 演算子 |
| --- | --- |
| 1 | `<` `<=` `>` `>=` |
| 2 | `||` |

よって優先度の高い「`$score < 0`」と「`$score > 100`」の条件が先に評価され  
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

## ループ処理

業務ではforeach・while・do-whileを使用するケースが多いです。

- 動画
  - ループ処理とは？【分かりやすい解説シリーズ #3】【プログラミング】
    - <https://youtu.be/GD5sDKbqoh8>
- CBC ～ PHPで繰り返し処理を行う（ループ処理）
  - <https://cbc-study.com/training/advanced/page3#pl-2>

### for

- Wikipedia
  - <https://ja.wikipedia.org/wiki/For文>
- PHP
  - <https://www.php.net/manual/ja/control-structures.for.php>
- JavaScript
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for>

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

### while

- PHP
  - while
    - <https://www.php.net/manual/ja/control-structures.while.php>
  - do-while
    - <https://www.php.net/manual/ja/control-structures.do.while.php>
- JavaScript
  - while
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/while>
  - do...while
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/do...while>

### break・continue

- PHP
  - break
    - <https://www.php.net/manual/ja/control-structures.break.php>
  - continue
    - <https://www.php.net/manual/ja/control-structures.continue.php>
- JavaScript
  - break
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/break>
  - continue
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/continue>

## enum(列挙型)

列挙型は他の言語では、標準メソッドにも使われており、関数を呼ぶ際のオプションとして使用されることが多いです。  
PHPでは最近実装され、今後はLaravelフレームワークにも取り入れられます。  

JavaScriptには列挙型がないため、Objectで表現することがあります（実業務では、まだ使用経験はありませんがES2015から追加されたSymbolを使うのが良さそうです）。  

```js
// JavaScript
// 列挙型 HttpMethod
const HttpMethod = Object.freeze({
    DELETE: Symbol('HttpMethod.DELETE'),
    GET: Symbol('HttpMethod.GET'),
    PATCH: Symbol('HttpMethod.PATCH'),
    POST: Symbol('HttpMethod.POST'),
    PUT: Symbol('HttpMethod.PUT'),
});

// HttpMethod を使用する
function test(httpMethod) {
    switch (httpMethod) {
        case HttpMethod.DELETE:
            console.log('HttpMethod = delete');
            break;
        case HttpMethod.GET:
            console.log('HttpMethod = get');
            break;
        case HttpMethod.PATCH:
            console.log('HttpMethod = patch');
            break;
        case HttpMethod.POST:
            console.log('HttpMethod = post');
            break;
        case HttpMethod.PUT:
            console.log('HttpMethod = put');
            break;
        default:
            throw new Error('Invalid argument');
            break;
    }
}
test(HttpMethod.DELETE);
test(HttpMethod.GET);
test(HttpMethod.PATCH);
test(HttpMethod.POST);
test(HttpMethod.PUT);
test('HttpMethod.GET'); // エラー
```

- Wikipedia
  - <https://ja.wikipedia.org/wiki/列挙型>
- PHP (8.1～)
  - <https://www.php.net/manual/ja/language.types.enumerations.php>
  - `Laravel [9.x] Adds implicit Enum route binding #40281`
    - <https://github.com/laravel/framework/pull/40281>
- JavaScript
  - **2022/01 現在、enum(列挙型) は存在しません。**

## 関数

プログラミングにおける関数はサブルーチン・プロシージャ・メソッド等、呼称はいくつかありますが  
全て同じものと認識していても問題はありません（厳密には違うものもある）。  
引数・戻り値は必ず使うので覚えておきましょう。  

```php
/**
 * 【PHP】関数定義
 */
function 関数名($引数1, $引数2, ...$引数n)
{
    // 処理

    // 値を返す
    return 戻り値;
}
```

```php
// 【PHP】関数の実行、戻り値は $result に入る
$result = 関数名(1, 2, 3);
```

- Wikipedia
  - <https://ja.wikipedia.org/wiki/サブルーチン>
  - <https://ja.wikipedia.org/wiki/メソッド_(計算機科学)>
- PHP
  - <https://www.php.net/manual/ja/language.functions.php>
    - 関数の引数（必須）
      - <https://www.php.net/manual/ja/functions.arguments.php>
    - 戻り値（必須）
      - <https://www.php.net/manual/ja/functions.returning-values.php>
    - 無名関数（Laravel等のフレームワークを使う際は必須知識）
      - <https://www.php.net/manual/ja/functions.anonymous.php>
    - アロー関数（構文を見た時に検索しにくいかと思うので覚えておきましょう、ラムダ式とも呼ばれます）
      - <https://www.php.net/manual/ja/functions.arrow.php>
- JavaScript
  - メソッド
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions>
  - アロー関数式
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions>
- 記事
  - <https://blog.senseshare.jp/argument.html>
- 動画
  - 関数とは？【分かりやすい解説シリーズ #2】【プログラミング】
    - <https://youtu.be/PtQekBoRHZ0>
  - 引数、戻り値とは？【分かりやすい解説シリーズ #7】【プログラミング】
    - <https://youtu.be/aTkXCEU65bg>

### 関数定義・実行例1

例として2つの整数を引数として渡し、大きい方を返す  
maximum関数を定義してみましょう。  

```php
  <?php
// 関数定義 ===================================================
/**
 * 2つの整数のうち、大きい方を返します。
 *
 * @param int $number1 引数1
 * @param int $number2 引数2
 * @return int
 */
function maximum(int $number1, int $number2): int
{
    if ($number1 < $number2) {
        // $number1 < $number2 になるので $number2 を返す。
        return $number2;
        // 関数の処理は return の時点で終了するため、後続の処理は行われない。
    }
    // $number1 >= $number2 になるので $number1 を返す。
    return $number1;
}

// 関数実行 ===================================================
$result1 = maximum(1, 2); // $result1 には 2 が入る
$result2 = maximum(3, 2); // $result2 には 3 が入る
$result3 = maximum(4, 4); // $result3 には 4 が入る
```

return する値は必ずしも変数にする必要はありません。  
[三項演算子](https://www.php.net/manual/ja/language.operators.comparison.php#language.operators.comparison.ternary)を使うと以下のように書く事も出来ます。

```php
function maximum(int $number1, int $number2): int
{
    return ($number1 < $number2) ? $number2 : $number1;
}
```

### 関数定義・実行例2

実業務であった関数例です。

```php
<?php
/**
 * タイトルとサブタイトルを結合した結果を返します。
 *
 * @param string $title タイトル
 * @param string $subtitle サブタイトル
 * @return string
 */
function concatTitle(string $title, string $subtitle): string
{
    return $title . ' (' . $subtitle . ')';
}

$result1 = concatTitle('MainTitle1', 'Subtitle1'); // $result1 には 'MainTitle1 (Subtitle1)' が入る
$result2 = concatTitle('MainTitle2', 'Subtitle2'); // $result2 には 'MainTitle2 (Subtitle2)' が入る
```

関数の説明とは関係ありませんが、二重引用符で変数のパースを行うことで以下のような記述も可能です。

```php
    // return $title . ' (' . $subtitle . ')'; と同じ結果
    return "{$title} ({$subtitle})";
```

### クロージャ

- PHP
  - <https://www.php.net/manual/ja/functions.anonymous.php>
- JavaScript
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Closures>

## オブジェクト指向

- オブジェクト指向とは？10分で学ぶ【分かりやすい解説シリーズ#57】【プログラミング】
  - <https://youtu.be/2zHcch5piP8>

## クラス

クラスを使わない現場はほぼありません。  
Laravelフレームワークを使う場合、必ずクラスを使用し  
Controllerクラス等はコマンドで作成します。  
現場で採用しているアーキテクチャによっては  
各自でクラスを手動で新規作成する必要があります。  
  
また、インターネットでは非公開のクラスを使う事もあるので  
使い方も覚えておきましょう。  

- Wikipedia
  - クラスの基礎
    - <https://ja.wikipedia.org/wiki/クラス_(コンピュータ)>
- PHP
  - クラスの基礎
    - <https://www.php.net/manual/ja/language.oop5.basic.php>
  - スコープ定義演算子 (::)
    - <https://www.php.net/manual/ja/language.oop5.paamayim-nekudotayim.php>
- JavaScript
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes>
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/class>
  - ClassはIE非対応のため、対応させる場合は関数・prototypeを使用する。
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/function>
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/new>
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function#instance_methods>
- 動画
  - クラスとは？【分かりやすい解説シリーズ #67】【プログラミング】
    - <https://youtu.be/FRiF6XLRpSE>

### 動的クラス

- 動的クラス（new でインスタンスを生成するクラス）
  - Collectionクラス
    - <https://readouble.com/laravel/8.x/ja/collections.html>
    - GitHub
      - <https://github.com/illuminate/collections/blob/v8.80.0/Collection.php>
    - `collect`関数は内部的に「`new Collection($value)`」をしています。
      - <https://github.com/illuminate/collections/blob/v8.80.0/helpers.php#L13-L16>
- 動画
  - 【JavaScript超入門】クラスとインスタンスを世界一わかり  やすく解説！
    - <https://youtu.be/t7hLDtK8MO4>

```php
<?php
// Collectionをシンプルにした例
class Collection
{
    private array $items = [];

    public function __construct(array $items = [])
    {
        $this->items = $items;
    }

    public function all(): array
    {
        return $this->items;
    }

    public function count(): int
    {
        return count($this->items);
    }

    public function add(mixed $item): self
    {
        $this->items[] = $item;
        return $this;
    }

    public function get(mixed $key, mixed $default = null): mixed
    {
        if (array_key_exists($key, $this->items)) {
            return $this->items[$key];
        }

        return $default;
    }
}
```

```php
// 例
$collection = new Collection(['name' => 'taylor', 'framework' => 'laravel']);
$value = $collection->get('name');
// $value には 'taylor' が入る
```

### 静的クラス

- 静的クラス（PHPだとstaticメソッドのみを持つクラス）
  - Strクラス
    - <https://readouble.com/laravel/8.x/ja/helpers.html>
    - GitHub
      - <https://github.com/illuminate/support/blob/v8.80.0/Str.php>

```php
<?php
// Strをシンプルにした例

class Str
{
    public static function length(string $value, ?string $encoding = null): int
    {
        if ($encoding === null) {
            return mb_strlen($value, $encoding);
        }

        return mb_strlen($value);
    }

    public static function lower(string $value): string
    {
        return mb_strtolower($value, 'UTF-8');
    }

    public static function repeat(string $string, int $times): string
    {
        return str_repeat($string, $times);
    }
}
```

```php
// 例
$length = Str::length('Laravel');
// $length には 7 が入る
```

### static

- PHP
  - <https://www.php.net/manual/ja/language.oop5.static.php>
- JavaScript
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes/static>

## アクセス修飾子

動画では `protected` はほとんど使わないという事が言われていますが  
Laravelでは様々なクラスの継承をすることが多いため、使用頻度は高くなります。

- Wikipedia
  - <https://en.wikipedia.org/wiki/Access_modifiers>
- PHP
  - <https://www.php.net/manual/ja/language.oop5.visibility.php>
- JavaScript
  - パブリッククラスフィールド
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes/Public_class_fields>
  - プライベートクラス機能
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes/Private_class_fields>

## 名前空間

名前空間はLaravel等のフレームワークを使う場合は必須となります。
JavaScriptには名前空間がないため、Objectで表現することがあります。  

```js
// JavaScript
// 名前空間 Vendor
const Vendor = Object.freeze({
    // 名前空間 Vendor.Model
    Model: Object.freeze({
        // Vendor.Model.Foo クラス
        Foo: class {
            constructor(v1, v2) {
                this.v1 = v1;
                this.v2 = v2;
            }
        },
    }),
});

const $c1 = new Vendor.Model.Foo(10, 11);
const $c2 = new Vendor.Model.Foo(20, 21);
console.log($c1);
console.log($c2);
```

- Wikipedia
  - <https://ja.wikipedia.org/wiki/名前空間>
- PHP
  - <https://www.php.net/manual/ja/language.namespaces.php>
- JavaScript
  - **2022/01 現在、名前空間は存在しません。**
- 動画
  - 名前空間とは？PHP 【分かりやすい解説シリーズ #63】【プログラミング】
    - <https://youtu.be/yrFBO6PBQMA>

### 名前空間の例

PHPで名前空間に属するクラスを使用する例です。  
まず以下のようなクラスがあるとします。  

```php
<?php
// ファイル名は UserModel.php とする

namespace App\Models;

class UserModel
{
    public static function find($id)
    {
        // 処理
    }
}
```

上記のクラスにアクセスするには名前空間とクラス名を「`\`」で連結し  
先頭には「`\`」をつけ、「`\App\Models\UserModel`」となります。  
このクラスを使う場合は以下のように行います。

```php
<?php
require_once("UserModel.php");

namespace App\Controllers;

class UserController
{
    public function index()
    {
        // 名前空間とクラス名を「\」で連結しクラスにアクセス
        // （現在の名前空間である App\Controllers の相対となってしまうため先頭に「\」をつける）
        $user1 = \App\Models\UserModel::find(101);
        $user2 = \App\Models\UserModel::find(102);
        var_dump($user1, $user2);
    }
}
```

クラスにアクセスする度に長い名前空間を指定すると面倒なので  
基本的には「use」を使い、エイリアス(別名)を作成します。  

```php
<?php
require_once("UserModel.php");

namespace App\Controllers;

// 「\App\Models\UserModel」を「UserModel」という名前でもアクセス出来るようにする。
//  （useでは先頭の「\」は不要となる）
use App\Models\UserModel as UserModel;

class UserController
{
    public function index()
    {
        // 「UserModel」という名前で「\App\Models\UserModel」にアクセス
        $user1 = UserModel::find(101);
        $user2 = UserModel::find(102);
        var_dump($user1, $user2);
    }
}
```

「`\`」区切りの末端の名称（今回の場合、クラス名のUserModel）で良い場合は as を省略できます。

```php
// use App\Models\UserModel as UserModel; と同じ
use App\Models\UserModel;
```

## 例外処理

```php
<?php
header("Content-type: text/plain; charset=UTF-8");

function increment(int $count): int
{
    if ($count < 0) {
        throw new ValueError('Invalid argument');
    }
    return ++$count;
}

try {
    var_dump(increment(2)); // 3
    var_dump(increment(-1)); // エラー
    var_dump(increment(3)); // 実行されない
} catch (Throwable $th) {
    var_dump('エラーが発生しました。 message=' . $th->getMessage()); // エラー時に実行される
} finally {
    var_dump('終了'); // 正常・エラー問わずに実行される
}

```

```js
// JavaScript
function increment(count) {
    if (!Number.isInteger(count) || count < 0) {
        throw new Error('Invalid argument');
    }
    return ++count;
}

try {
    console.log(increment(2)); // 3
    console.log(increment(-1)); // エラー
    console.log(increment(3)); // 実行されない
} catch (ex) {
    console.error('エラーが発生しました。 message=' + ex.message); // エラー時に実行される
} finally {
    console.log('終了'); // 正常・エラー問わずに実行される
}

```

- PHP
  - 例外(exceptions)
    - <https://www.php.net/manual/ja/language.exceptions.php>
  - Exception
    - <https://www.php.net/manual/ja/class.exception.php>
- JavaScript
  - throw
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/throw>
  - Error
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Error>
  - try...catch...finally
    - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/try...catch>

## ミュータブル・イミュータブル

こちらについては知らない技術者も多いかもしれませんが  
クリティカルなバグが発生することもあり、現場で問題となりクレームになるケースもいくつかありました。  
Laravelだと、ミュータブルであるCarbonで問題が発生することが多かったため  
扱うオブジェクトのメソッドで何が行われるか意識しましょう。  

### ミュータブル

インスタンス生成後に状態を変えることができるオブジェクトです。  
引数にミュータブルのオブジェクトが渡される関数を作る場合に注意が必要です。  
関数内でオブジェクト内容が変更されていて、他の機能に影響が出ることがあります。

- PHPでのクラス実装例

```php
<?php
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

- PHP
  - Carbon (Laravelに採用されている)
    - <https://carbon.nesbot.com/docs/>
    - GitHub
      - <https://github.com/briannesbitt/Carbon/blob/master/src/Carbon/Carbon.php>
      - PHPの「`trait`」という機能を使用しています。

### イミュータブル

インスタンス生成後に状態を変えることができないオブジェクトです。

- PHPでのクラス実装例

```php
<?php
class CounterImmutable implements Countable
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

- PHP
  - CarbonImmutable  (Laravelに採用されている)
    - <https://carbon.nesbot.com/docs/>
    - GitHub
      - <https://github.com/briannesbitt/Carbon/blob/master/src/Carbon/CarbonImmutable.php>
      - Carbon同様に「`trait`」を使用しています。

### ミュータブル・イミュータブルどちらを使うか

ここまでの話でイミュータブルにメリットが多く感じますがデメリットもあります。  
イミュータブルの場合、処理を行う度にオブジェクトの生成・破棄が何度も行われ  
品質と引き換えに処理・メモリ効率が非常に悪くなります。  
他の言語にはなりますが、C#やJavaのstringもイミュータブルになるため  
文字列を連結する度にオブジェクトが再作成されます。  
連結を高速に行うための「`StringBuilder`」のミュータブルクラスが用意されています。

### 値型・参照型・値渡し・参照渡し

int・bool・float等は値型、配列やインスタンス（オブジェクト）は参照型となります。  
stringも参照型となりますが、イミュータブルになるため値型と同じように扱う事が可能です。  
また、PHPの配列も参照型ですが他の言語ではない特殊な動作をします。

- 値型・参照型
  - 値型(int・bool・float等)
    - 変数に入れることで、メモリ上に直接値が格納されます。
  - 参照型(string・array・object等)
    - 変数に入れることで、オブジェクトへの参照情報が値として変数に格納されます。
  - 動画
    - 値型と参照型
      - <https://youtu.be/6-B6drRYpXM?t=55s>

```js
function testNumber(num) {
    // 代入
    num = 2;
}

function testArray1(arr) {
    // 代入
    arr = [1, 2, 3];
}

function testArray2(arr) {
    // 変更
    arr.push('value');
}

function testObject1(obj) {
    // 代入
    obj = { description: 'new' };
}

function testObject2(obj) {
    // 変更
    obj.description = 'add';
}

// number 値型
let num = 1;
testNumber(num);
console.log(num); // number: 1 (変更なし)

// array 参照型
let arr = [1, 2];
testArray1(arr);
console.log(arr); // array: [1, 2] (変更なし)
let arr2 = [1, 2];
testArray2(arr2);
console.log(arr2); // array: [1, 2, 'value']

// object 参照型
let obj1 = { title: 'obj1' };
testObject1(obj1);
console.log(obj1); // object: {title: 'obj1'} (変更なし)
let obj2 = { title: 'obj2' };
testObject2(obj2);
console.log(obj2); // object: {title: 'obj2' description: 'add'}
// constであっても変更されます。
const OBJ = { title: 'const' };
testObject2(OBJ);
console.log(OBJ); // object: {title: 'const' description: 'add'}
```

- 値渡し・参照渡し
  - 変数を関数の引数として渡すケースで説明します。
  - 値渡し
    - 関数の引数に変数を渡す際、変数の値をコピーして渡します。  
      これは、通常の関数呼び出しのデフォルトになります。
      （参照型の場合、変数には参照が格納されているのでオブジェクトへの参照が渡されます）
  - 参照渡し(リファレンス渡し)
    - 関数の引数に変数への参照を渡します。  
      関数内で引数に対して代入された場合、呼び出し元の変数が更新されます。  
      PHPでは引数に「&」を付加することで参照渡しを表します。
- PHP
  - オブジェクトと参照
    - <https://www.php.net/manual/ja/language.oop5.references.php>
  - リファレンス渡し
    - <https://www.php.net/manual/ja/language.references.pass.php>
- JavaScript
  - 値型・参照型に関する公式情報がみつかりませんでした。
  - **2022/01 現在、「参照渡し」は存在しません。**

#### PHP参考情報

こちらはPHPの内部構造になるため読み飛ばして良いです。  
ライブラリ使用・開発をする等で、内部構造を知る必要が出てくることがあります。  
PHP Extension開発入門やPHP自体のGitHubがありますので、こういうものがあるということは  
覚えておくと良いかもしれません。  

以前、ライブラリを使った際、PHPの定数が壊れたり、中身が変わるというトラブルがあり  
PHPの内部構造について調べることがありました。  

- PHP Extension 開発入門 ～ ZVAL の内部構造
  - <https://net-newbie.com/phpext/7-zval.html>
- PHP8.1.2 GitHub
  - `_zval_struct`
    - <https://github.com/php/php-src/blob/php-8.1.2/Zend/zend_types.h#L308-L333>
  - `_zend_value`
    - <https://github.com/php/php-src/blob/php-8.1.2/Zend/zend_types.h#L288-L306>

## イテレータ(ジェネレータ)

ビッグデータを扱う現場や、採用しているアーキテクチャによっては  
使用する頻度が高くなります。  
小規模プロジェクトの現場では、あまり使われないかもしれません。  
フレームワークでは内部的に使われている所もあります。  

- PHP
  - <https://www.php.net/manual/ja/language.generators.overview.php>
  - Laravel
    - <https://readouble.com/laravel/8.x/ja/eloquent.html#cursors>
    - <https://github.com/illuminate/database/blob/v8.80.0/Connection.php#L412-L414>
- JavaScript
  - <https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/yield>

## アーキテクチャ

- MVC
  - <https://ja.wikipedia.org/wiki/Model_View_Controller>
  - MVCとは？【分かりやすい解説シリーズ #26】【プログラミング】
    - <https://youtu.be/OkJLiASeiAg>
  - CBC Laravelの仕組み〜MVCの理解〜
    - <https://cbc-study.com/training/backend/laravel3#pl-0>
- リポジトリパターン

### 実例

以下、オープンソースのサービスで実際にLaravelでリポジトリパターンを採用しているので参考になるかと思います。

- SENDPORTAL
  - <https://sendportal.io/>
  - GitHub
    - <https://github.com/mettle/sendportal>
    - <https://github.com/mettle/sendportal-core>
- Controller（EmailServicesController）
  - `EmailServiceTenantRepository` を使用して、クエリの記載なしでDBから情報を取得しています。
  - <https://github.com/mettle/sendportal-core/blob/master/src/Http/Controllers/EmailServices/EmailServicesController.php>
- Repository（EmailServiceTenantRepository）
  - クエリを生成し、DBから情報を取得している処理を記載しています。
  - BaseTenantRepository
    - <https://github.com/mettle/sendportal-core/blob/master/src/Repositories/BaseTenantRepository.php>
    - EmailServiceTenantRepository (BaseTenantRepositoryを継承)
      - <https://github.com/mettle/sendportal-core/blob/master/src/Repositories/EmailServiceTenantRepository.php>

## PHP独自仕様

厳密に言えばPHPだけの機能ではありませんが  
PHP独自の仕様についてご紹介します。

### PHP配列

#### PHP配列の比較処理

PHPでは配列の比較が簡単に行えます。  
PHP以外の言語では簡単に出来ないため覚えておきましょう。

- PHP
  - 配列演算子
    - <https://www.php.net/manual/ja/language.operators.array.php>
- JavaScript
  - 比較は自前で行う必要があります。
  - 検索すると `Array.prototype.equals` を追加方法がありますが  
    JavaScript標準機能のarrayに対してメソッドを追加するイメージになります。  
    現場でこれを行う場合、必ず現場リーダーに相談しましょう。  
    - <https://www.delftstack.com/ja/howto/javascript/compare-two-arrays-javascript/>

#### PHP配列はミュータブルか？

基本配列はミュータブルに該当しますが  
PHPでは少し動作が異なります。  

簡単に言うとPHPの配列はint型等と同様に、値型として扱って問題ありません。  
注意点としては代入した後、変更が加えられたタイミングで複製されることです。  
サイズの大きい配列を変更する場合は注意しましょう。  

```php
<?php
header("Content-type: text/plain; charset=UTF-8");

// この時点のメモリを取得
$m = memory_get_usage();

// ■ arrに1万要素を追加
$arr = [];
for ($i=0; $i < 10000; $i++) {
    $arr[] = "aaa";
}
//   メモリ: 528440
// ■ arr2に代入
$arr2 = $arr;
//   メモリ: 528440 ($arr2に代入されたが、参照が渡されただけなので変化なし)
// ■ arrに要素を追加（arr2 には「bbb」は追加されない）
$arr[] = "bbb";
//   メモリ: 1056880 (arrに変更が加えられたため、複製される)
// ■ arrにnullを代入
$arr = null;
//   メモリ: 528440
var_dump(memory_get_usage() - $m);
```

### トレイト

Laravelを使用する場合、扱うことが多くなります。  
Modelを作る際に`SoftDeletes`を使うことは多いかと思います。

- Wikipedia
  - <https://ja.wikipedia.org/wiki/トレイト>
- PHP
  - <https://www.php.net/manual/ja/language.oop5.traits.php>
  - Laravel
    - <https://readouble.com/laravel/8.x/ja/eloquent.html#soft-deleting>

### PHP関数

- echo
  - フレームワークを使う場合、まず使うことはありません。  
    PHP関数の例でよく使われますが、関数内でechoを使うことはほぼありません。
  - <https://www.php.net/manual/ja/function.echo.php>
- var_dump
  - デバッグ時に変数内容を出力するコマンドです。
  - <https://www.php.net/manual/ja/function.var-dump.php>
  - Laravelの場合、dd・dumpメソッドを使いましょう。
    - dd
      - <https://readouble.com/laravel/8.x/ja/helpers.html#method-dd>
    - dump
      - <https://readouble.com/laravel/8.x/ja/helpers.html#method-dump>

## JavaScript独自仕様

- [JavaScript](./js/index.md)

## 動画

ここまでの学習の復習等にご活用ください。

- PHPプログラミング入門講座🔰【初心者でも1時間で学べるPHP入門！フル字幕】
  - <https://youtu.be/J_pASVQXElA>
- 初心者向けPHPプログラミングチュートリアル(1:04:30 ～)
  - <https://youtu.be/HNHjpmdPFNU?t=3870s>
- 初心者向けJavaScript入門講座
  - <https://youtube.com/playlist?list=PL3PnJ18ZwZne_FCED6rBqPrCvrMr1uaiY>

## 応用

- [プログラミング編 応用](./advanced.md)
