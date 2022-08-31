# 株式会社エプコットソフトウェア ～ 自己学習

## 目次

| No. |  |
| :---: | --- |
| 1 | [はじめに](#はじめに) |
| 2 | [ソフトウェア](#ソフトウェア) |
| 3 | [プログラミング環境](#プログラミング環境) |
| 4 | [プログラミング編](#プログラミング編) |
| 5 | [動画学習](#動画学習) |
| 6 | [Docker](#docker) |
| 7 | [HTML](#html) |
| 8 | [Bootstrap](#bootstrap) |
| 9 | [書籍](#書籍) |
| 10 | [その他](#その他) |
| 11 | [追加学習](#追加学習) |

## はじめに

[新人研修](./../training/training.md)カリキュラムが終わったら自己学習に入ります。  
不安なところがあれば新人研修カリキュラムに戻り復習しても良いです。  
現場参画が決まった場合、現場で求められる技術の学習をしましょう。  

## ソフトウェア

筆者が実務で使用経験のあるソフトをまとめています。  

- [便利ソフト](./../preparation/index.md#便利ソフト)

## プログラミング環境

環境を簡単に構築できる、GitHubテンプレートリポジトリを用意しています。  
「`Use this template`」ボタンで、テンプレートから新しくリポジトリを作成することが出来ます（Ownerは自分のアカウントにしてください）  
GitHub管理にしたくない場合、「`Code`」から「`Download ZIP`」を選択するとダウンロードが可能です。  

- PHP8.1 のテンプレートリポジトリ
  - <https://github.com/epkotsoftware/template-php8.1-jp>
- Laravel9 のテンプレートリポジトリ
  - <https://github.com/epkotsoftware/template-laravel9-jp>
- Laravel6 のテンプレートリポジトリ
  - <https://github.com/epkotsoftware/template-laravel6-jp>
- PHP7.4 のテンプレートリポジトリ
  - <https://github.com/epkotsoftware/template-php7.4-jp>

ちょっとしたプログラムの実行なら「`paiza.io`」がおすすめです。

- `paiza.io`
  - <https://paiza.io/ja/projects/new>

## プログラミング編

以前、必修となっていた「プログラミング編」です。  
PHPプログラミング編と重複しているところがあります。  

- [プログラミング編](./../training/programming/index.md)

## 動画学習

カリキュラムとは別な動画を用意しました。

- `プログラミングの基礎：基本 - LinkedInラーニング`
  - <https://jp.linkedin.com/learning/programming-foundations-fundamentals-2>
- `プログラミングの基礎：データベース - LinkedInラーニング`
  - <https://jp.linkedin.com/learning/programming-foundations-databases-3>
- `HTML5 基本講座 - LinkedInラーニング`
  - <https://jp.linkedin.com/learning/html5-essential-training-2>
- `CSS 基本講座 - LinkedInラーニング`
  - <https://jp.linkedin.com/learning/css-essential-training-2>
- `JavaScript 基本講座 - LinkedInラーニング`
  - <https://jp.linkedin.com/learning/javascript-essential-training-4>
- `GitHub 入門 - LinkedInラーニング`
  - <https://jp.linkedin.com/learning/learning-github-2>

## Docker

現場でDockerについて深い知識が必要になるケースは稀ですが  
様々な環境を構築出来るので興味がある方や、Dockerの使い方がよくわからない方は学習してみましょう。  
現場ではDockerを使ってないなかったり、環境を0から作ることは  
ほぼないため、利用出来れば十分です。

- [Docker](./../training/docker/index.md)

## HTML

- HTML&CSS入門 Webデザインをイチから学ぼう
  - <https://saruwakakun.com/html-css/basic>

## Bootstrap

CSSフレームワークのBootstrapは日本語対応で、比較的学習しやすいのでおすすめです。  
スターターテンプレートで、すぐに使用出来るようになります。  
CBC研修でもレスポンシブデザインについてありますが、フレームワークを利用するのが一般的です。

- Bootstrap
  - <https://getbootstrap.jp/>
  - スターターテンプレート
    - <https://getbootstrap.jp/docs/5.0/getting-started/introduction/#スターターテンプレート>
  - サンプル
    - Dashboard・Checkout・Gridの学習をおすすめします。
    - <https://getbootstrap.jp/docs/5.0/examples/>

## 書籍

おすすめの書籍がありましたら、追記しますので講師までご連絡ください。

- HTML・CSS
  - `HTML&CSS全事典 改訂版 HTML Living Standard & CSS3/4対応`
    - <https://www.amazon.co.jp/dp/4295008281>
- DB
  - `スッキリわかるSQL入門 第2版 ドリル222問付き! (スッキリわかる入門シリーズ)`
    - <https://www.amazon.co.jp/dp/4295005096>
    - わかりやすいと評判らしいです。
    - dokoQL(DBはPostgreSQL)というのを使用しています（評判は良くない）。
      - <https://dokoql.com/>
  - `SQLアンチパターン 大型本 – 2013/1/26`
    - <https://www.amazon.co.jp/dp/4873115892>
    - 新人研修の「データベース編」の動画でも紹介されている書籍です。  
      参考になる書籍になりますが古い書籍なので、情報が古いところもあったりします。  
      この書籍のアンチパターンを使用するケースもあるので、状況に応じてどちらが良いか判断しましょう。
- PHP
  - **≪非推奨≫**`気づけばプロ並みPHP 改訂版--ゼロから作れる人になる!`
    - <https://www.amazon.co.jp/dp/4865940650>
    - 以前、研修で使用していた書籍です。
    - 内容は初心者向けではあり、わかりやすい書籍です。  
      しかし、現在では非推奨の機能を使用していたり、現場ではほぼ使うことのない`TeraPad`を使わせたりと  
      古い情報が目立ち、学習後の知識のアップデートに時間がかかりそうなので研修外としています。  
    - この書籍ではECサイトを作成しているので、Laravelで同じものを作ってみたりするのも良いかもしれません。
  - `初心者からちゃんとしたプロになる PHP基礎入門〈PHP8対応〉`
    - <https://www.amazon.co.jp/dp/4295201103>
    - こちらは比較的内容も新しくVSCodeを使った学習となっています。
    - 「変数」等のプログラミングの基礎を学んだあとに物を作っていくので入門書としては良さそうです。
- JavaScript
  - 確かな力が身につくJavaScript「超」入門 第2版
    - <https://www.amazon.co.jp/dp/4815601577>
- Linux
  - `Ubuntuスタートアップバイブル`
    - <https://www.amazon.co.jp/dp/4839964866>
    - こちらは実際に読んだことはありませんが、評価が高そうなのでピックアップしました。
    - 仮想環境にVirtualBoxを使用しています。
    - Ubuntuデスクトップ（Windowsのような画面）の学習をするのに良さそうです。
    - コマンドライン操作の基本と応用の学習も出来ます。
    - 「Windows Subsystem for Linux(WSL)」について触れているので、Mac向けではないかもしれません。
- Java
  - `後悔しないためのSpring Boot 入門書：Spring 解体新書（第2版）: Spring Bootが丸分かり Spring解体新書`
    - <https://www.amazon.co.jp/dp/4802092865>
- テスト
  - `SEC BOOKS：ソフトウェアテスト見積りガイドブック`
    - <https://www.ipa.go.jp/sec/publish/tn08-003.html>
    - こちらは販売が終了しており、PDF版が無料で見られるようです。
    - 難しいですが、テストに必要な内容が盛り込まれています。  
      70ページあたりからは、開発者も参考になる内容となっています。

### 書籍の購入

読みたい書籍がある場合は、購入前に総務・マネージャーにお問い合わせください。  
会社にない書籍については、会社負担で購入も可能です（会社負担での購入の場合も借用扱いになるので、返却すること）。

## その他

以下、実務でよく使うものをまとめました。  
わからない場合は復習しましょう。

- 設計
  - UML
  - 画面設計
  - データベース設計(テーブル定義・ER図)
  - 詳細設計
- 開発
  - HTML
    - head
      - title
      - script
      - link
    - body
      - header
      - div
      - table
      - a
      - form
      - label
      - input
        - id
        - name
        - type (text, checkbox, radio, hidden, file, date, email, number, password等)
        - value
        - checked
        - readonly
        - disabled
      - select
      - textarea
      - button
  - CSS
    - セレクタ全般
    - 表示・非表示
  - JavaScript
    - 基礎(変数, if, ループ, 配列, 関数, DOM操作)
    - WebAPI
    - 非同期処理(async, await, Promise)
  - PHP
    - 基礎(変数, if, ループ, 配列, 関数, クラス)
    - Laravel
      - コントローラ
      - HTTP Requests, HTTPレスポンス
      - HTTPセッション
      - バリデーション
      - CSRF保護
      - ルーティング
      - ミドルウェア
      - ビュー, Bladeテンプレート
      - ペジネーション
      - Eloquent
      - UnitTest
        - Feature
        - Unit
- テスト
  - 単体テスト仕様書
  - ブラックボックステスト
  - ホワイトボックステスト
  - PHPUnit
- データベース
  - データベース
  - テーブル
  - インデックス
  - ユニーク
  - トリガー
  - SQL
    - SELECT, INSERT, UPDATE, DELETE
    - WHERE
      - AND, OR, BETWEEN, LIKE, IN, NOT IN
    - ON DUPLICATE KEY UPDATE (UPSERT)
    - BEGIN(START TRANSACTION), COMMIT, ROLLBACK
    - HAVING (WHEREとの違いを理解しておく)
    - DISTINCT
    - COUNT, MAX, MIN, SUM, AVG
    - LIMIT
    - UNION
    - GROUP BY
    - ORDER BY
    - 副問合せ
    - INNER JOIN, LEFT JOIN
    - CREATE TABLE
    - CREATE TRIGGER
    - PRIMARY KEY
    - INDEX
    - UNIQUE
    - AUTO_INCREMENT
    - ALTER TABLE
    - EXPLAIN
- Linux
  - cd
  - ls
  - 標準入力・出力
  - vi
  - grep
  - tail
  - シェル
- Git
  - ブランチ作成・切り替え
  - コミット, マージ, フェッチ, プル, プッシュ
  - コンフリクト解消
- GitHub
  - 基本的な使い方
  - プルリクエスト
- ファイル
  - JSON, LOG, TXT, CSV, TSV, PNG, JPG, GIF, SVG
- ウォーターフォール
- コーディング規約

## 追加学習

以下、追加学習前に確認しておきましょう。

- 現場参画が決まっている（現場環境に合わせて学習）
- 面談対策が出来ているか
- カリキュラムの学習については復習済みか

ここからは現場参画が決まっていたり、面談対策が出来ており  
現場参画しても問題がない研修生向けの学習資料・リンクになります。  

- [追加学習](./deep/index.md)
