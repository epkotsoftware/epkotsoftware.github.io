# 自己学習

## はじめに

新人研修カリキュラムが終わったら自己学習に入ります。  
不安なところがあれば新人研修カリキュラムに戻り復習しても良いです。  
現場参画が決まった場合、現場で求められる技術の学習をしましょう。  

## 新人研修

- [新人研修に参加する方へ](./../public/top/index.md)
  - [入社前研修](./../public/t/index.md)
- [新人研修](./../training/curriculum/index.md)
- [Laravel CRUD](./../training/laravel/crud/index.md)

## キャリアパス

キャリアパスについてまとめています。  

- [キャリアパス](./../career-paths/index.md)

## 正規表現

エンジニアになると正規表現を使うことが出てくるので覚えておきましょう。

- `【正規表現】入門`
  - <https://zenn.dev/seiya0/articles/tech-regular-expression>

## Linux

- 新人研修
  - [Linux編](./../public/t/linux/index.md)
- コマンド
  - `【Linux演習問題】初心者向けLinuxの基本操作編`
    - <https://eng-entrance.com/linux-placetice-basic>
  - `Linux入門編2:ファイル検索コマンドfindを使おう | プログラミング学習サイト【paizaラーニング】`
    - <https://paiza.jp/works/linux/primer/beginner-linux2/22200>
  - `Linux入門編2:テキスト検索コマンドgrepを使おう | プログラミング学習サイト【paizaラーニング】`
    - <https://paiza.jp/works/linux/primer/beginner-linux2/22201>
- シェル
  - `シェルスクリプト 練習 ドリル`
    - <https://www.seplus.jp/dokushuzemi/blog/2021/09/shellscript_practices.html>
  - `サーバーエンジニアの研修に使える！シェルスクリプト問題集`
    - <https://qiita.com/p_s_m_t/items/d6eaa8ba49c1fbf85735>
  - `【Shellスクリプト】演算子「算術演算子」「比較演算子」について！`
    - <https://www.pmi-sfbac.org/arithmetic-comparison/>
  - `【初心者向け】Linux演習問題：シェルスクリプト編`
    - <https://eng-entrance.com/linux-plactice-shellscript>

## データベース

新人研修でもデータベースの学習をしていますが  
設計よりの学習をしましょう。

- 新人研修
  - [データベース編](./../public/t/database/index.md)
  - [設計編 〜 データベース設計](./../public/t/design/index.md#データベース設計)
- 内部開発設計例
  - eラーニングシステム
    - <https://github.com/epkotsoftware/training-docs/blob/main/e-learning/README.md>
- `データベース入門講座`
  - <https://www.youtube.com/playlist?list=PL-1KBX2gDRujQaRgEByueezHBiqHP8KDD>
- `こんな設計してない？ダメな理由を知って良い設計にしていこう！DB設計・SQLアンチパターン`
  - <https://youtu.be/CephPUUS09k>
  - 補足
    - アンチパターンとはなっていますが、状況によってはアンチパターンを採用することもある事は覚えておきましょう。
    - IDリクワイアド
      - 昔はナチュラルキー（idカラムは使わない）のパターンが多かったんですが  
        最近ではサロゲートキーを設けるパターンが多くなりました。  
        サロゲートキーを採用しないデメリットとして、フレームワークやシステムなどに対応していなかったり  
        コード体系の変更（例:品目CDの先頭をIからCIに変更する）に弱く、サロゲートキーを採用しなかったことによる失敗は実際に多くみてきました。  
        サロゲートキーを追加する改修も何度か経験しています。
      - サロゲートキーを設ける際、動画のパターンだと「受注ID」、「品目CD」はユニーク制約を設ける必要があります。
    - キーレスエントリ
      - 経験上データベースに外部キーを設定するパターンはかなり少なかったです。  
        通常問題はありませんが、テーブルに大きい変更の必要がある際に外部キーを設定していたことにより  
        対象外のレコードを更新する必要が出たりと手間・時間がかかることがあります。  

### データベース設計

#### 文字列型

データベースの文字列型には主にCHAR型、VARCHAR型、TEXT型の3つがありますが、基本的にはVARCHAR型の使用をおすすめします。  
未検証ですが、昔はCHAR型は処理効率が良いと言われていましたが、現在では変わらないという話を聞きます。

| 型 | 説明 | 用途 |
| --- | --- | --- |
| CHAR型   | 固定長の文字列を格納するための型。<br>空白でパディングされる可能性あり。 | 桁数が固定されているデータ（例: 郵便番号）の格納に適しています。 |
| VARCHAR型 | 可変長の文字列を格納するための型。<br>メモリ使用効率がCHAR型より高い。 | 一般的なテキストデータの格納に適しており、データ長が変動する場合に適切です。 |
| TEXT型    | 非常に大きなテキストデータを格納するための型。 | 長文や改行を含むデータ、またはリッチテキストの保存に適しています。 |

- `MySQL :: MySQL 8.0 リファレンスマニュアル :: 11.3.2 CHAR および VARCHAR 型`
  - <https://dev.mysql.com/doc/refman/8.0/ja/char.html>

#### 整数型

MySQLの整数型の一覧です。  
`unsigned`は「[符号なし整数型](https://e-words.jp/w/%E7%AC%A6%E5%8F%B7%E3%81%AA%E3%81%97%E6%95%B4%E6%95%B0%E5%9E%8B.html)」のことでマイナス(-)がない事を表します。  

| 型 | ストレージ<br>(Bytes) | 最小値 | 最大値 |
| --- | :---: | ---: | ---: |
| tinyint | 1 | -128 | 127 |
| tinyint unsigned | 1 | 0 | 255 |
| smallint | 2 | -32,768 | 32,767 |
| smallint unsigned | 2 | 0 | 65535 |
| mediumint | 3 | -8388608 | 8388607<br>（838万） |
| mediumint unsigned  | 3 | 0 | 16777215<br>（1677万） |
| int | 4 | -2147483648 | 2147483647<br>（21億） |
| int unsigned | 4 | 0 | 4294967295<br>（42億） |
| bigint | 8 | -9223372036854775808 | 9223372036854775807<br>（922京） |
| bigint unsigned | 8 | 0 | 18446744073709551615<br>（1844京） |

現在では、プライマリーキー（PK）のidカラムの限界値に達する問題が増えており、プロジェクトでは`bigint unsigned`を設定することが一般的です。  
Laravelなどのフレームワークでも、デフォルトで`bigint unsigned`が使用されています。  
特別な要件がない限り、`bigint unsigned`を採用することをおすすめします。  

- `MySQL :: MySQL 8.0 リファレンスマニュアル :: 11.1.2 整数型 (真数値) - INTEGER、INT、SMALLINT、TINYINT、MEDIUMINT、BIGINT`
  - <https://dev.mysql.com/doc/refman/8.0/ja/integer-types.html>

#### 日時型

2023/8現在、`MySQL`の`timestamp`型について注意が必要です。  
2038/1/19を超えるデータは持てなくなるため、`datetime`型の利用をおすすめします。  

- `PostgreSQL 8.0.4 文書 日付/時刻データ型`
  - <https://www.postgresql.jp/document/8.0/html/datatype-datetime.html>
- `MySQL :: MySQL 8.0 リファレンスマニュアル :: 11.2 日時データ型`
  - <https://dev.mysql.com/doc/refman/8.0/ja/date-and-time-types.html>
- `Laravel + MySQL timestamp型の2038年問題対策`
  - <https://zenn.dev/seiya0/articles/tech-laravel-mysql-2038-year-problem-solutions>

## テスト

- 新人研修
  - [テスト編](./../public/t/test/index.md)
- `設計・テスト研修講義【21新卒技術研修】`
  - <https://youtu.be/zfAo0DyIBJ0>

## ソフトウェア

筆者が実務で使用経験のあるソフトをまとめています。  

- [便利ソフト](./../preparation/index.md#便利ソフト)

## Webアプリケーション

- `Webアプリケーション基礎【サイボウズ開運研修2021】`
  - 資料: <https://speakerdeck.com/cybozuinsideout/web-application-overview-2021>
  - 動画: <https://youtu.be/lJZMnzWZSlY>

## Google Chrome Developer Tools

- `Chrome Developer Toolsの使い方【サイボウズ開運研修2021】`
  - 資料: <https://speakerdeck.com/cybozuinsideout/chrome-developer-tools>
  - 動画: <https://youtu.be/aL9OarYImm0>

## プログラミング環境

環境を簡単に構築できる、GitHubテンプレートリポジトリを用意しています。  
「`Use this template`」ボタンで、テンプレートから新しくリポジトリを作成することが出来ます（Ownerは自分のアカウントにしてください）  
GitHub管理にしたくない場合、「`Code`」から「`Download ZIP`」を選択するとダウンロードが可能です。  

- [開発環境](./../environments/index.md)

## プログラミング編

以前、必修となっていた「プログラミング編」です。  
PHPプログラミング編と重複しているところがあります。  
JavaScriptの学習・課題もあります。

- [プログラミング編](./../training/programming/index.md)
- 新人研修
  - [PHPプログラミング編](./../public/t/php/index.md)

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

## 画面設計

こちらは以前、設計編に含まれていた資料です。  

以下、参考程度にご覧ください。  
特にiOSアプリはデザインで審査が通らなくなるケースもあるので  
画面設計時は注意が必要です（実際に手戻りが発生した事がありました）。

- 新人研修
  - [設計編 〜 画面設計](./../public/t/design/index.md#画面設計)
  - [Laravel CRUD 〜 画面レイアウト設計](./../training/laravel/crud/design/screens/index.md)
- 内部開発設計例
  - eラーニングシステム
    - <https://github.com/epkotsoftware/training-docs/blob/main/e-learning/README.md>
- iOS
  - ユーザーインターフェイスのデザインのヒント
    - <https://developer.apple.com/jp/design/tips/>
  - Human Interface Guidelines
    - <https://developer.apple.com/design/human-interface-guidelines/>
- Android
  - Android 向けのデザイン
    - <https://developer.android.com/design?hl=ja>
- マテリアルデザイン
  - <https://material.io/design>
  - <https://material.io/develop>
- WEB
  - ボタンやアラートの色は「Bootstrap」で学ぶと良いです。
    - Laravelの標準が現在では「Tailwind CSS」となっているので情報を載せておきます。
  - Bootstrap（ブートストラップ）
    - Alerts (アラート) <https://getbootstrap.jp/docs/5.0/components/alerts/>
    - Buttons (ボタン) <https://getbootstrap.jp/docs/5.0/components/buttons/>
    - Forms (フォーム) <https://getbootstrap.jp/docs/5.0/forms/overview/>
    - サンプル <https://getbootstrap.jp/docs/5.0/examples/>
  - Tailwind CSS（テールウィンドCSS）
    - Colors <https://tailwindcss.com/docs/customizing-colors>
    - Alerts <https://v1.tailwindcss.com/components/alerts>
    - Buttons <https://v1.tailwindcss.com/components/buttons>
    - Forms <https://v1.tailwindcss.com/components/forms>
    - Laravel で使える Dashboard template
      - <https://github.com/tailwindcomponents/dashboard>

## UnitTest

PHPUnitについて深く理解しておきましょう。

PHPUnitはLaravelには標準で入っており  
Laravelを使わない場合でも、Composerでインストールが可能です。  

- PHPUnit
  - <https://phpunit.readthedocs.io/ja/latest/>
  - PHPUnit のインストール Composer
    - `10.0:` <https://docs.phpunit.de/en/10.0/installation.html#composer>
    - `9.6:` <https://docs.phpunit.de/en/9.6/installation.html#composer>
  - データプロバイダ（10.0から方法が変わっています）
    - `10.0:` <https://docs.phpunit.de/en/10.0/writing-tests-for-phpunit.html#data-providers>
    - `9.6:` <https://docs.phpunit.de/en/9.6/writing-tests-for-phpunit.html#data-providers>
  - テストダブル
    - `10.0:` <https://docs.phpunit.de/en/10.0/test-doubles.html>
    - `9.6:` <https://docs.phpunit.de/en/9.6/test-doubles.html>
  - 8時間耐久PHPUnitの教室
    - <https://www.slideshare.net/yandod/8phpunit>
- Laravel
  - Laravel テスト
    - <https://readouble.com/laravel/9.x/ja/>
    - Laravel データベーステスト
      - <https://readouble.com/laravel/9.x/ja/database-testing.html>
    - Laravel モック
      - <https://readouble.com/laravel/9.x/ja/mocking.html>
  - Mockery
    - <https://readouble.com/mockery/1.0/ja/>

## アジャイル開発

- アジャイル開発入門！スクラムで実践するアジャイル開発のやり方と勉強法とは
  - <https://youtu.be/Jm3I6QXzjXw>
- Scrum Guides
  - <https://scrumguides.org/>
  - スクラムガイド（日本語）
    - <https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf>
- アジャイル開発の進め方
  - <https://www.ipa.go.jp/jinzai/skill-standard/plus-it-ui/itssplus/ps6vr70000001i7c-att/000065606.pdf>
- 基本情報技術者試験で問われるシステム開発手法の解説！
  - <https://www.foresight.jp/fe/column/system-development-method/>

## セキュリティ

[セキュリティ編](./../public/t/security/index.md)で以前使われていた情報です。  

セキュリティについて学習していきます。  
いずれも開発で求められる知識になります。  

参考コードとして載せている処理については、現場では既に用意されていたり  
フレームワークを使用していることが多いので、参考程度に見ておきましょう。

- 動画
  - <https://youtube.com/playlist?list=PLCX3wwS3Gg4xfAHP_c5aGDzfO7r22u-ed>
    - `6:21` バリデーションとは何なのか、現役エンジニアが解説【超入門編】
    - `3:34` 【初心者向け】ハッシュ化と暗号化の違いとは？不可逆変換とは？
    - `7:27` CSRFとは？ サイバー攻撃＆対策【分かりやすい解説シリーズ #58】【プログラミング】
    - `8:03` SQLインジェクション【サイバー攻撃＆対策】【分かりやすい解説シリーズ #60】【プログラミング】
    - `8:09` SSHとは？【分かりやすい解説シリーズ #65】【プログラミング】
    - `4:56` 公開鍵認証とは？【分かりやすい解説シリーズ #24】【プログラミング】
- 基本情報技術者試験で問われる情報セキュリティの基本を解説！
  - <https://www.foresight.jp/fe/column/information-security/>
- PHP
  - PHPマニュアル 安全なパスワードハッシュ
    - <https://www.php.net/manual/ja/faq.passwords.php>
  - PHPマニュアル password_hash
    - <https://www.php.net/manual/ja/function.password-hash.php>
  - PHPマニュアル openssl_encrypt
    - <https://www.php.net/manual/ja/function.openssl-encrypt.php>
  - 参考コード
    - [Illuminate\Hashing\BcryptHasher::make](https://github.com/illuminate/hashing/blob/master/BcryptHasher.php)
    - [Illuminate\Encryption\Encrypter::encrypt](https://github.com/illuminate/encryption/blob/master/Encrypter.php)
- Laravel
  - Laravel 基礎、安全、データベース
    - <https://readouble.com/laravel/8.x/ja/>
    - Laravel ハッシュ
      - <https://readouble.com/laravel/8.x/ja/hashing.html>
    - Laravel 暗号化
      - <https://readouble.com/laravel/8.x/ja/encryption.html>
    - Laravel CSRF保護
      - <https://readouble.com/laravel/8.x/ja/csrf.html>
    - Laravel データベース：クエリビルダ
      - <https://readouble.com/laravel/8.x/ja/queries.html>

### 脆弱性情報データベース

以下に該当する方は知っておきましょう。  
特に以下に該当する方は必要です。  

- システム開発の会社を立ち上げたい
- 個人でシステムを作りたい方
- 上流工程を目指す方
- ホワイトハッカーになりたい方

- `脆弱性情報データベース - Wikipedia`
  - <https://ja.wikipedia.org/wiki/脆弱性情報データベース>
- `JVN iPedia - 脆弱性対策情報データベース`
  - <https://jvndb.jvn.jp/>

## 資格

資格取得は必須ではありませんが  
基本情報技術者試験の学習は実務でも必要な、知識が身につきます。

- [資格](./../certifications/index.md)

## 書籍

おすすめの書籍がありましたら、追記しますので講師までご連絡ください。  
レビューの悪い評価も目を通した上で購入するのが良いかと思います。  
「試し読み」も可能です。  

- HTML・CSS
  - `1冊ですべて身につくHTML & CSSとWebデザイン入門講座`
    - <https://www.amazon.co.jp/dp/4797398892/>
  - `ほんの一手間で劇的に変わるHTML & CSSとWebデザイン実践講座`
    - <https://www.amazon.co.jp/dp/4815606145/>
  - `HTML&CSS全事典 改訂版 HTML Living Standard & CSS3/4対応`
    - <https://www.amazon.co.jp/dp/4295008281>
  - `Web制作者のためのCSS設計の教科書 モダンWeb開発に欠かせない「修正しやすいCSS」の設計手法`
    - <https://www.amazon.co.jp/dp/4844336355>
- Sass
  - `Web制作者のためのSassの教科書 改訂2版 Webデザインの現場で必須のCSSプリプロセッサ`
    - <https://www.amazon.co.jp/dp/4295002356>
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
  - `改訂3版JavaScript本格入門　～モダンスタイルによる基礎から現場での応用まで`
    - <https://www.amazon.co.jp/dp/477418411X>
  - `確かな力が身につくJavaScript「超」入門 第2版`
    - <https://www.amazon.co.jp/dp/4815601577>
- TypeScript
  - `プログラミングTypeScript ―スケールするJavaScriptアプリケーション開発`
    - <https://www.amazon.co.jp/dp/4873119049>
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
  - `【この1冊でよくわかる】 ソフトウェアテストの教科書 [増補改訂 第2版]`
    - <https://www.amazon.co.jp/dp/481560875X>
    - はじめてテスト案件に関わる方、テストの概要を一通り学びたい方におすすめです
  - `JSTQB認定テスト技術者資格 Foundation Level試験`
    - `ソフトウェアテスト教科書 JSTQB Foundation 第4版 シラバス2018対応`
      - <https://www.amazon.co.jp/dp/4798160660>
    - `Foundation Level シラバス（PDF無料）`
      - <https://jstqb.jp/dl/JSTQB-SyllabusFoundation_Version2018V31.J03.pdf>

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
