# プログラミング実践

## はじめに

本研修では現場での実装(プログラミング)を想定し  
プログラミングの基礎知識、検索力等を見ていきます。  
よって、わからない用語については検索することは許可します。  

## 休憩

- 1時間で10分休憩をとりましょう。

## 禁止事項

現場に入っていることを想定しているのと、検索力・読解力をみるため  
以下を禁止します。  

- ネット環境で閲覧出来ない情報
  - アナログノートの閲覧
  - 書籍の閲覧
  - ネットで非公開のメモ
- 動画の閲覧

## 課題1

指定した3つの値が完全一致した場合は true  
それ以外の場合は false を返すHelperクラス・メソッドを作成してください。  

### kadai01.php

Helperクラス・メソッドの使用例です。  
動作確認にご利用ください。

```php
<?php
require_once("app/Helper.php");
use App\Helper;

echo "<h2>TRUEパターン</h2>";
var_dump(Helper::same(1, 1, 1)); // bool(true)
echo "<br>";
var_dump(Helper::same(2, 2, 2)); // bool(true)
echo "<h2>FALSEパターン</h2>";
var_dump(Helper::same(1, 1, 2)); // bool(false)
echo "<br>";
var_dump(Helper::same(1, 2, 1)); // bool(false)
echo "<br>";
var_dump(Helper::same(2, 1, 1)); // bool(false)
echo "<br>";
var_dump(Helper::same(2, 2, '2')); // bool(false)
echo "<br>";
var_dump(Helper::same(2, '2', 2)); // bool(false)
echo "<br>";
var_dump(Helper::same('2', 2, 2)); // bool(false)
echo "<br>";
```

## 課題2

レコードを格納した配列(array)をTSV(string)に変換するクラス・メソッドを作成してください。  
ブラウザで表示確認する際はコンテキストメニューの「ページのソースを表示」で確認してください。  

### 仕様

#### ER図

テーブルの関連図です。

- [PlantUML](https://www.plantuml.com/plantuml/umla/VSwn2eD0383XFKyH70k-G15nwjAbRr3Y6V3mSaekbehwxjKAfKFf5lx0brJ9I6sK0Arl69rN5_YOMGQRK5XgrWIfyt4W9S7W8ziqCFPgRG_0qRnDc56eHqaPpe1uyWsUqKV3ehXTot9FaOIt-21rBUbMOczxC7uQh1_6b5ptXtcVkNyjBh_z5Ow7bYNFbnaF5YgEpIZX1G00)  
  ![ER図](./images/er.svg)  

#### TSV

TSVの仕様です。

- TSVのヘッダー行は出力対象外
- 改行コードは「LF」
- 出力イメージは[出力例](#出力例)を参照。

| No. | TSVカラム | テーブルカラム | 備考 |
| :---: | --- | --- | --- |
| 1 | id | albums.id |  |
| 2 | name | albums.name |  |
| 3 | note | albums.note |  |
| 4 | track_names | tracks.name | 「,」区切りで連結して出力する |

#### テーブルレコード

テーブルから取得した配列の仕様です。

- 連想配列内の順番は保障しない。
- レコード配列のイメージ
  - [PlantUML](https://www.plantuml.com/plantuml/umla/bP8_3u903CNt-nHDvnkWtPX0u-GV4uEJOI32e4P8u3R2T_TomKEX9Dg9zBqytY-zk3LvO-vjNQcB0ZkTWc7mLc04eHuNLVuixGgJtUgy3qByb6hZfCCntNmhficlZzPgBjzFDyG7eHw3qrEotWPsXxsMtIIuQT7DWfknz-RCVVLQ88S8Q8eEdfrcxF269m4U97htYn4VV4Ux_BaZB_PWNAxF_tHagICBDvfx23Nu59hwlS9Ild0dbQcuh0htMby0)  
  ![レコード](./images/array.svg)  

### kadai02.php

Helperクラス・メソッドの使用例です。  
動作確認にご利用ください。

```php
<?php
require_once("app/AlbumHelper.php");

// 多次元配列
$albums = [
    [
        "id" => 1,
        "name" => "ALBUM01",
        "note" => "NOTE01",
        "tracks" => [
            ["id" => 101, "name" => "TRACK0101"],
            ["id" => 102, "name" => "TRACK0102"],
            ["id" => 103, "name" => "TRACK0103"],
        ],
    ],
    [
        "id" => 2,
        "name" => "ALBUM02",
        "note" => "NOTE02",
        "tracks" => [
            ["id" => 201, "name" => "TRACK0201"],
        ],
    ],
    [
        "id" => 3,
        "note" => "NOTE03",
        "name" => "ALBUM03",
        "tracks" => [
            ["id" => 301, "name" => "TRACK0301"],
            ["name" => "TRACK0302", "id" => 302],
            ["id" => 303, "name" => "TRACK0303"],
        ],
    ],
];
// 実行・レスポンス出力
$result = \App\AlbumHelper::albumsToTsvString($albums);
if (!is_string($result) || empty($result)) {
    echo 'エラー: 戻り値が不正です。';
    exit(1);
}
echo $result;
```

### 出力例

```tsv
1	ALBUM01	NOTE01	TRACK0101,TRACK0102,TRACK0103
2	ALBUM02	NOTE02	TRACK0201
3	ALBUM03	NOTE03	TRACK0301,TRACK0302,TRACK0303
```

## 課題3

課題2の仕様変更をしましょう。  
仕様変更内容は以下です。

| 項目 | 変更前 | 変更後 |
| --- | --- | --- |
| TSVヘッダー行 | なし | あり |
| TSV改行コード | LF | CRLF |

## プログラミング力を身につけるには

単純なプログラミング力を身につけるには  
競技プログラミングがおすすめです。  
ただ、これで上位に上がったからと言って実務で通用するわけではないので  
基礎が身につき、プログラミングのスピードが向上したら  
別の学習をする方が良いです。

- AtCoder
  - <https://atcoder.jp/>
  - 新規登録後、チュートリアルがあります。  
    使用経験はないですが、競技プログラミングで人気があるようです。
- paiza
  - <https://paiza.jp/challenges/info>
  - こちらはランク毎に問題が選べます。  
    - Cランクの難しい問題が解けるようになると、十分なレベルと言えます。

JavaScriptを身につけるには、競技プログラミングは向いていないので  
実際にHTMLを作り、DOM操作に慣れておきましょう。  

## 今後の流れ

研修は引き続きやっていきますが  
並行して、以下を進めていきます。

- スキルシート作成
  - 社長の方でスキルシートを作成します。  
    不備等がないか確認して下さい。
  - 作戦会議までに、面談対策資料や内部開発案件の内容には  
    目を通しておきましょう。
    - [面談対策資料](./../interview.md)
    - [社内開発](https://github.com/epkotsoftware/training#社内開発)
- 作戦会議
  - 社長・営業・講師を含め会議を行い  
    スキルシートの修正を行います。
- 営業開始
  - 営業を開始し、案件情報を持ってきます。
- 面談
- 参画
