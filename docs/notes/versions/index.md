# 株式会社エプコットソフトウェア ～ バージョン

## 目次

| No. |  |
| :---: | --- |
| 1 | [はじめに](#はじめに) |
| 2 | [HTML](#html) |
| 3 | [CSS](#css) |
| 4 | [JavaScript](#javascript) |
| 5 | [PHP](#php) |
| 6 | [PHPフレームワーク Laravel](#phpフレームワーク-laravel) |
| 7 | [データベース MySQL](#データベース-mysql) |

## はじめに

本資料は言語・フレームワークなどの各種バージョンに関する情報をまとめた資料です。

## HTML

| HTML規格 | [W3C勧告](https://ja.wikipedia.org/wiki/W3C勧告) |
| :---: | :---: |
| [HTML4.01](https://www.w3.org/TR/html401/) | 1999/12/24 |
| [HTML5.0](https://www.w3.org/TR/2014/REC-html5-20141028/) | 2014/10/28 |
| [HTML5.1](https://www.w3.org/TR/2016/REC-html51-20161101/) | 2016/11/01 |
| [HTML5.2](https://www.w3.org/TR/2017/REC-html52-20171214/) | 2017/12/14 |
| HTML Living Standard | 2021/01/29 |

HTML5とHTML Living Standardはほぼ同等のものです。  
HTML4.01とHTML5.0以降とは大きく異なり、HTML文書では先頭のDOCTYPE宣言で見分けることが出来ます。  

- HTML4.01（strict）

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

- HTML5以降

```html
<!DOCTYPE html>
```

- Wikipedia
  - HyperText Markup Language
    - <https://ja.wikipedia.org/wiki/HyperText_Markup_Language>
  - HTML5
    - <https://ja.wikipedia.org/wiki/HTML5>
  - W3C勧告
    - <https://ja.wikipedia.org/wiki/W3C勧告>
- World Wide Web Consortium (W3C)
  - <https://www.w3.org/>
  - HTML 4.01 Specification
    - <https://www.w3.org/TR/html401/>
  - HTML5
    - <https://www.w3.org/TR/2014/REC-html5-20141028/>
  - HTML 5.1
    - <https://www.w3.org/TR/2016/REC-html51-20161101/>
  - HTML 5.2
    - <https://www.w3.org/TR/2017/REC-html52-20171214/>
- HTML Standard
  - <https://html.spec.whatwg.org/>
  - 翻訳
    - <https://github.com/whatwg/html/wiki/Translations>

## CSS

TODO

## JavaScript

TODO

## PHP

| PHPバージョン | 初回リリース | アクティブサポート終了 | セキュリティサポート終了 | 備考 |
| :---: | :---: | :---: | :---: | --- |
| 5.6 | 2014/08/28 | 2017/01/19 | 2018/12/31 | サポート切れ |
| 7.4 | 2019/11/28 | 2021/11/28 | 2022/11/28 | サポート切れ |
| 8.0 | 2020/11/26 | 2022/11/26 | 2023/11/26 |  |
| 8.1 | 2021/11/25 | 2023/11/25 | 2024/11/25 |  |

PHP6は存在しません。  
5と7は大きく異なり、機能追加・廃止がかなり多いです。  
7と8については、5と7ほどの大きい変更点はないです。  

最新の情報は公式を参照してください。  
変更点についてはPHPマニュアルの「付録」を参照してください。  

- PHPマニュアル
  - Supported Versions
    - <https://www.php.net/supported-versions.php>
  - 付録
    - <https://www.php.net/manual/ja/appendices.php>

## PHPフレームワーク Laravel

| Laravel<br>バージョン | PHP<br>バージョン | リリース | バグフィックス<br>期日 | セキュリティ<br>修正期日 | 備考 |
| --- | --- | :---: | :---: | :---: | --- |
| 6 (LTS) | 7.2 - 8.0 | 2019/09/03 | 2022/01/25 | 2022/09/06 | サポート切れ |
| 8 | 7.3 - 8.1 | 2020/09/08 | 2022/07/26 | 2023/01/24 |  |
| 9 | 8.0 - 8.1 | 2022/02/08 | 2023/08/08 | 2024/02/08 |  |
| 10 | 8.1 | 2023/02/07 | 2024/08/07 | 2025/02/07 |  |

詳細については以下を参照

- [Laravelバージョン](./laravel/index.md)

## データベース MySQL

GA(General Availability)は正式リリースを指します。

| MySQL<br>バージョン | 正式リリース<br>(GA) | Premier Support<br>期限 | Extended Support<br>期限 | 備考 |
| :---: | :---: | :---: | :---: | --- |
| 5.6 | 2013/02 | 2018/02 | 2021/02 | サポート切れ |
| 5.7 | 2015/10 | 2020/10 | 2023/10 |  |
| 8.0 | 2018/04 | 2023/04 | 2026/04 |  |

上記のExtended Supportが切れた後に、任意期間で「Sustaining Support」がありますがリリースは行われません。  
その為、5.6に関しては`2021/01`を最後にリリースは止まっています。  

- MySQL テクニカル・サポート
  - <https://www.mysql.com/jp/support/>
- MySQL 5.6 Release Notes
  - <https://dev.mysql.com/doc/relnotes/mysql/5.6/en/>
- MySQL 5.7 Release Notes
  - <https://dev.mysql.com/doc/relnotes/mysql/5.7/en/>
- MySQL 8.0 Release Notes
  - <https://dev.mysql.com/doc/relnotes/mysql/8.0/en/>
