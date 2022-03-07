# 株式会社エプコットソフトウェア ～ CodeIgniter4

## これから新規開発をする場合

運用に入ってから、セキュリティサポートが切れるとアップデートが必要となるため  
基本的にはセキュリティサポートが長いバージョンを選択します（先方にもバージョンや期限については伝えること）。  
また、レンタルサーバーを使用する場合、PHPの最新バージョンに未対応なこともあるので予め確認が必要です。

## CodeIgniterバージョン

CodeIgniterは他のフレームワークと比較し、サポート期間が長いようです。  
今後の学習コスト等も考えて「Laravel」に近い「CodeIgniter4」の最新バージョンを選択することをおすすめします。  

CodeIgniter4 と CodeIgniter3 はまったく違うフレームワークと考えて良いです。  
CodeIgniter4 は PHP7以降をサポート対象としており、composerを使ったインストールや[PSR](https://codeigniter4.github.io/userguide/intro/psr.html)を採用しています。  
公式ユーザーガイドについても別々で用意しています。  

### PHPバージョン

[Server Requirements(4.1.9)](https://github.com/codeigniter4/CodeIgniter4/tree/v4.1.9) に対応するPHPのバージョンは記載されていますが`composer.json`でも確認できます。  
対応PHPの最新バージョンを選択することを推奨します。

- 【GitHub】Laravel Releases
  - <https://github.com/codeigniter4/CodeIgniter4>
    - 左のブランチ選択のところで「Tags」タブから対象のバージョンを選択して、`composer.json`を選択。
    - 「`v4.1.9`」の場合
      - <https://github.com/codeigniter4/CodeIgniter4/blob/v4.1.9/composer.json#L8>
        - 「`^7.3`」の場合、7.3以上、8.0未満
        - 「`^8.0`」の場合、8.0以上、9.0未満
- PHP Supported Versions
  - <https://www.php.net/supported-versions.php>
- PHP Downloads
  - <https://www.php.net/downloads>

## これから学習するバージョン

2022/03 現在、学習するバージョンについて個人的な観点から記します。  
現場で使われているバージョンについては、サポート切れのものをそのまま使用しているケースもあります。  
面談ではMySQL等も含めて、各環境のバージョンを確認すると良いです。

- PHP7 > PHP8
  - 理由
    - PHP7未満はサポートが切れており、公式ドキュメントからも記述が消えている。
      - 逆に学習しにくいということと、廃止された機能も多い。
    - PHP7から型宣言（旧:タイプヒンティング）が強化
      - <https://www.php.net/manual/ja/language.types.declarations.php>
    - PHP7以降は恐らく現場で使われている所が多い（CodeIgniterのサポート内のバージョン）。
  - 旧バージョンを学習する際の注意点
    - 古いバージョンには後々廃止される機能があるのでご注意ください。
    - PHP8.0から下位互換性のない変更点・推奨されなくなる機能（**文字列と数値の比較** は特に注意です）
      - <https://www.php.net/manual/ja/migration80.incompatible.php>
      - <https://www.php.net/manual/ja/migration80.deprecated.php>
    - PHP8.1から下位互換性のない変更点・推奨されなくなる機能
      - <https://www.php.net/manual/ja/migration81.incompatible.php>
      - <https://www.php.net/manual/ja/migration81.deprecated.php>
- CodeIgniter4 > CodeIgniter3
  - 理由
    - 基本的にはLTSのバージョンか Laravel8 を学習するのが良さそう。
      - LTSは現場でも採用されやすいため
      - Laravel8 は特殊でサポート期間が長く、Laravel9へ移行もしやすい。
    - Laravel9についてはまだリリース前のため含めていない。
  - 旧バージョンを学習する際の注意点
    - ディレクトリ構成等が変わっていることがあるので、調べる際には注意。
    - Laravel 8.x アップグレードガイド
      - <https://readouble.com/laravel/8.x/ja/upgrade.html>
    - Laravel 7.x アップグレードガイド
      - <https://readouble.com/laravel/7.x/ja/upgrade.html>

## ドキュメント

- CodeIgniter User Guide ※ 4以前
  - <https://codeigniter.com/userguide3/>
- CodeIgniter4 User Guide
  - <https://codeigniter4.github.io/userguide/>

## Composer

Composerはパッケージ管理システムです。  
Laravelをインストールすると自動で`composer.json`が作成されます。  

### Composerパッケージ

CodeIgniter4標準以外でおすすめのパッケージをご紹介します。  

#### Myth:Auth

CodeIgniter4には認証機能が入っていないため  
`Myth:Auth`を使用します。  

- `Packagist ～ The following packages provide codeigniter4/authentication-implementation`
  - <https://packagist.org/providers/codeigniter4/authentication-implementation>
- GitHub
  - <https://github.com/lonnieezell/myth-auth>

以下のコマンドでインストール可能です。  

```bash
composer require myth/auth
```

カスタマイズする場合は以下のコマンドで可能（対話）

```bash
php spark auth:publish
```

- 参考動画
  - Basic Guide to Myth:Auth - CodeIgniter4
    - <https://youtu.be/9XLUtmc54xY>

##### CSS

各認証関連の画面に Bootstrap4.3.1(jQuery含む) が使われています。  

- <https://github.com/lonnieezell/myth-auth/blob/v1.0.1/src/Views/layout.php>

##### 追加テーブル

`Myth:Auth`で実行されるmigrationは以下になっています。

- <https://github.com/lonnieezell/myth-auth/blob/v1.0.1/src/Database/Migrations/2017-11-20-223112_create_auth_tables.php>

`users`テーブル、テーブル名の先頭に`auth_`がつくテーブルが追加されます

##### usersテーブル関連クラス

ModelとEntityクラスは以下

- <https://github.com/lonnieezell/myth-auth/blob/v1.0.1/src/Models/UserModel.php>
- <https://github.com/lonnieezell/myth-auth/blob/v1.0.1/src/Entities/User.php>

##### AuthController

- <https://github.com/lonnieezell/myth-auth/blob/v1.0.1/src/Controllers/AuthController.php>

##### ローカライズ

日本語が用意されていないため、以下を基に作成する必要があります。

- <https://github.com/lonnieezell/myth-auth/blob/v1.0.1/src/Language/en/Auth.php>

## CLI Generators

ファイルの追加やmigrationの実行等、アプリケーション構築に必要なものを「`spark`」を使って行います。  
Laravelの「Artisanコンソール」と似ています。

- CLI Generators
  - <https://codeigniter4.github.io/userguide/cli/cli_generators.html>

```bash
# spark で使用できるコマンドリストが見れる
php spark list
```
