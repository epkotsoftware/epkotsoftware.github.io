# PHPプログラミング編 入門

## 目次

| No. |  |
| :---: | --- |
| 1 | [はじめに](#はじめに) |
| 2 | [ショートカットキー](#ショートカットキー) |
| 3 | [検索方法](#検索方法) |
| 4 | [学習方法](#学習方法) |
| 5 | [実行環境](#実行環境) |
| 6 | [PHPのバージョン](#phpのバージョン) |
| 7 | [コーディングスタイル](#コーディングスタイル) |
| 8 | [動画学習](#動画学習) |

## はじめに

PHPはネットに情報が溢れているため  
古かったり、間違った解釈をしているサイトも見かけます。  
機能によっては、非推奨になっていたり、将来のバージョンアップで廃止になるものもありますので  
PHPマニュアルも見る癖をつけましょう。

## ショートカットキー

一般的なショートカット・VSCodeのショートカットキーをまとめています。

- [ショートカットキー](./../../../shortcutkey/index.html)

## 検索方法

以下のようにGoogle検索をすると、PHPマニュアルのページで検索することが出来ます。  

- 検索ワード「`site:www.php.net {キーワード}`」
  - PHPマニュアルで「文字列」を検索
    - <https://www.google.com/search?q=site:www.php.net+文字列>
  - PHPマニュアルで「配列」を検索
    - <https://www.google.com/search?q=site:www.php.net+配列>
  - PHPマニュアルで「演算子」を検索
    - <https://www.google.com/search?q=site:www.php.net+演算子>
  - PHPマニュアルで「配列 ループ」を検索
    - <https://www.google.com/search?q=site:www.php.net+配列+ループ>

## 学習方法

プログラミングの学習はサイト・動画・本で勉強するより  
実際に作って動かす方が身につきやすいです。  

## 実行環境

以下のテンプレートリポジトリを使うと  
Dockerで簡単にPHPの開発環境が作れます。  
テンプレートから自分のリポジトリを作ってみましょう。  
（ダウンロードしてGit管理外で、学習用の環境を作ってもOK）

- `PHP8.1環境 テンプレートリポジトリ`
  - <https://github.com/epkotsoftware/template-php8.1-jp>

```txt
■注意点
　Git管理下のフォルダ内に clone しないようにしましょう。
```

簡易的なPHPを動かしたい場合、`paiza.io`を使うのも良いです。

- `paiza.io`
  - <https://paiza.io/ja/projects/new>

## PHPのバージョン

2022/8現在では、8.1が最新バージョンです。  
サポート切れのPHP5.6を未だに使っている事もあります。  
「付録」でバージョンアップによって、何が変更になったのか見ることが出来ます。  

| PHPバージョン | 初回リリース | アクティブサポート終了 | セキュリティサポート終了 |
| :---: | :---: | :---: | :---: |
| 5.6 | 2014/08/28 | 2017/01/19 | 2018/12/31 |
| 7.4 | 2019/11/28 | 2021/11/28 | 2022/11/28 |
| 8.0 | 2020/11/26 | 2022/11/26 | 2023/11/26 |
| 8.1 | 2021/11/25 | 2023/11/25 | 2024/11/25 |

以下のようなページがあることを覚えておきましょう。  
内容を覚える必要はありません。

- PHPマニュアル
  - Supported Versions
    - <https://www.php.net/supported-versions.php>
  - 付録
    - <https://www.php.net/manual/ja/appendices.php>

## コーディングスタイル

PHPの場合、現在ではコーディングスタイル（コーディング規約）として「`PSR`」が採用される事が多いので  
インデント(字下げ)を半角スペース4つにする事は覚えておきましょう（Laravel・CodeIgniter4でも採用されている）。

- インデントとは？
  - <https://blog.senseshare.jp/indent.html>
- フレームワークで使用されているコーディングスタイル
  - `Laravel 9.x 貢献ガイド コーディングスタイル`
    - <https://readouble.com/laravel/9.x/ja/contributions.html#coding-style>
  - `CodeIgniter4 PSR Compliance`
    - <https://www.codeigniter.com/user_guide/intro/psr.html>
- PHP-FIG
  - `PSR-1: Basic Coding Standard`
    - <https://www.php-fig.org/psr/psr-1/>
  - `PSR-12: Extended Coding Style`
    - <https://www.php-fig.org/psr/psr-12/>

以下、コーディングスタイルに準拠した例です。

```php
<?php

namespace Vendor\Package;

use FooClass;
use BarClass as Bar;
use OtherVendor\OtherPackage\BazClass;

class ClassName extends ParentClass implements \ArrayAccess, \Countable
{
    public function sampleFunction(int $a, int $b, array $records = []): array
    {
        if ($a === $b) {
            bar();
        } elseif ($a > $b) {
            $foo->bar($arg1);
        } else {
            BazClass::bar($arg2, $arg3);
        }

        $names = [];
        foreach ($records as $i => $record) {
            $names[] = $record['name'] ?? null;
        }
        return $names;
    }
}
```

## 動画学習

- PHP入門
  - <https://www.youtube.com/playlist?list=PLhFoWnF68aPSKd0aW7QCIXe8ciQlkdZqX>

以下は補足です。

- `【PHP入門#1】PHPとは`
  - 以下、今は覚える必要なし
    - インタプリンタ型
    - コンパイラ
    - XAMPP (ザンプ)
- `【PHP入門#2】PHP開発環境の構築`
  - 開発環境はDockerで構築しているため参考程度に
- `【PHP入門#3】変数`
  - 「型の判定」は覚えなくても良い、必要になれば調べたらすぐHITする。
- `【PHP入門#4】配列`
  - 「`array_push`」、「`array_diff`」は覚えなくても良い、必要になったら調べたらすぐ出てくる。
    配列に要素を追加する場合、 `$a[] = 4;` のように書くと要素を追加することが出来る。
- `【PHP入門#5】定数`
  - 「`define`」は現在では使われることが少ないため「`const`」を優先で覚えておくこと。
- `【PHP入門#6】算術演算子、複合演算子、インクリメント演算子`
  - 記号まで暗記する必要はないが、必要になったら調べられるようにしておくこと。
- `【PHP入門#7】比較演算子、配列演算子、条件演算子`
  - 厳密比較である「`===`」や「`!==`」を積極的に使うこと、「`==`」はPHPバージョンにより判定が異なるので注意。
  - 動画内では「条件演算子」と呼んでいますが、「三項演算子」と呼ばれることが多いです。
- `【PHP入門#8】論理演算子`、`【PHP入門#9】条件分岐（if文）`
  - 実務で必ず使うものなので、覚えておく事。
- `【PHP入門#10】繰り返し処理（for文、foreach文）`
  - 実務では意外とfor文を使うケースが少なく、foreach文を使う事が多い。
- `【PHP入門#11】while文を使った繰り返し処理`
  - foreach文が使えない場合は、while文・do-while
- `【PHP入門#12】ループの中断・スキップ（break文、continue文）`
  - 実務で必ず使うものなので、覚えておく事。適切にメソッド(関数)を定義している場合  
    「`break`」ではなく「`return`」を使うことが多いです。
- `【PHP入門#13】switch文を使った条件分岐`
  - 【優先度低】if文に置き換えが可能
- `【PHP入門#14】関数（function）の使い方`
  - 実務で必ず使うものなので、覚えておく事。実務ではクラス内で関数(メソッド)を定義する。
- `【PHP入門#15】値渡しと参照渡し`
  - 「参照渡し」をするケースは少ない。
- `【PHP入門#16】可変長引数`
  - 【優先度低】フレームワーク・共通機能開発では使うケースは多い。
- `【PHP入門#17】変数のスコープ（ローカル変数、グローバル変数、静的変数）`
  - 実務で「グローバル変数」を使うことはない、「静的変数」も使うケースは少ない（よくわからない場合は使わないこと）
- `【PHP入門#18】クラスの使い方（メソッド・コンストラクタ・デストラクタ・アクセス権限）`
  - 【重要】実務で必ず使うものなので、覚えておく事。
  - 【優先度低】デストラクタは存在だけ知っていれば良い、フレームワーク・共通機能開発では使うケースは多い。
- `【PHP入門#19】継承とオーバーライド`
  - 実務で必ず使うが、理解出来なければ浅く覚えておくこと。  
    クラスの理解が深まれば理解出来るようになる。
- `【PHP入門#20】staticプロパティとstaticメソッド`
  - staticプロパティは使う事が少ないが、staticメソッドはよく使う。
- `【PHP入門#21】コールバック関数`
  - コールバック関数自体は実務で使用するが、動画のような方法では使わないため参考程度に
- `【PHP入門#22】エラーと例外`
  - `set_error_handler`を実務で使う事はほぼない
  - 「`throw`」・「`try〜catch〜finally`」は覚えておく事、フレームワークを使っている場合は、`catch`を使わない事が多い。
