# Laravel

## 目次

| No. |  |
| :---: | --- |
| 1 | [実行環境](#実行環境) |
| 2 | [バージョン](#バージョン) |
| 3 | [ドキュメント](#ドキュメント) |
| 4 | [CBC](#cbc) |
| 5 | [動画](#動画) |
| 6 | [スターターキット](#スターターキット) |
| 7 | [Composer](#composer) |
| 8 | [Artisanコンソール](#artisanコンソール) |
| 9 | [ルーティング](#ルーティング) |
| 10 | [CRUD](#crud) |

## 実行環境

以下のテンプレートリポジトリを使うと  
Dockerで簡単にLaravelの開発環境が作れます。  
GitHubでテンプレートから自分のリポジトリを作ってみましょう。  
（ダウンロードしてGit管理外で、学習用の環境を作ってもOK）

- `Laravel9 テンプレートリポジトリ`
  - <https://github.com/epkotsoftware/template-laravel9-jp>

```txt
■注意点
　Git管理下のフォルダ内に clone しないようにしましょう。
```

## バージョン

Laravelとそれに関連するバージョン情報は以下を参照

- [バージョン](./../../notes/versions/index.md)

## ドキュメント

- Laravel
  - <https://laravel.com/>
- Laravel6.x LTS
  - <https://readouble.com/laravel/6.x/ja/>
- Laravel8.x
  - <https://readouble.com/laravel/8.x/ja/>
- Laravel9.x
  - <https://readouble.com/laravel/9.x/ja/>

## CBC

- 実践（バックエンド Laravel）
  - <https://cbc-study.com/training/backend/laravel1>

## 動画

- Laravel入門(全13回)
  - <https://youtube.com/playlist?list=PLCyDm9NTxdhLnA4tH5ToQR1K1LcWIAdOa>
- 【Laravel8初級】ログイン機能作成(全7回)
  - <https://youtube.com/playlist?list=PLCyDm9NTxdhLV5LFfCoRykyHW8Zw91YJB>

## スターターキット

動画では自作でログイン機能を作成していましたが  
スターターキットを使ってログイン機能を追加することが出来ます。  
ログイン画面、ユーザー登録画面、必要なDBのテーブル等を構築してくれます。

- Laravel 9.x スターターキット
  - <https://readouble.com/laravel/9.x/ja/starter-kits.html>
  - Laravel UI （非推奨）
    - <https://github.com/laravel/ui>
  - Laravel Breeze
    - <https://github.com/laravel/breeze>
  - Laravel Jetstream
    - <https://github.com/laravel/jetstream>

### Laravel UI

現在では「`Laravel Breeze`」または「`Laravel Jetstream`」を推奨されています。  
推奨はされていないですが、Bootstrapを使用しているため、実際に使われている現場は多そうです。  
認証機能としては一番シンプルです。

- GitHub
  - <https://github.com/laravel/ui>
- CSSフレームワーク
  - Bootstrap
    - <https://getbootstrap.jp/>
- Laravel 9.x JavaScriptとCSSスカフォールド
  - <https://readouble.com/laravel/9.x/ja/frontend.html>

### Laravel Breeze

新規だとこちらが使われる事が多くなりそうです。  
CSSフレームワークが「`Tailwind CSS`」が採用されており、「`Bootstrap`」より学習が難しいかもしれません。

- GitHub
  - <https://github.com/laravel/breeze>
  - インストールすると `stubs/default/` のファイルが追加されます。
    - <https://github.com/laravel/breeze/tree/1.x/stubs/default>
- CSSフレームワーク
  - Tailwind CSS
    - <https://tailwindcss.com/>
- Laravel 9.x スターターキット
  - <https://readouble.com/laravel/9.x/ja/starter-kits.html>

### Laravel Jetstream

スターターキットにも、まずは「Laravel Breeze」からはじめるように記載があります。  
2要素認証等の高機能な認証が必要な場合、こちらを採用するのが良さそうです。  

- GitHub
  - <https://github.com/laravel/jetstream>
  - インストールすると `stubs/` のファイルが追加されます。
    - <https://github.com/laravel/jetstream/tree/2.x/stubs>
- CSSフレームワーク
  - Tailwind CSS
    - <https://tailwindcss.com/>
- Laravel 9.x スターターキット
  - <https://readouble.com/laravel/9.x/ja/starter-kits.html>
- Laravel Jetstreamでは、内部でFortifyが使われています。
  - Laravel Fortify
    - <https://readouble.com/laravel/9.x/ja/fortify.html>

### トラブルシューティング

- 「php artisan migrate」がうまくいかない
  - データベースの接続設定の見直し
  - 対象のデータベースが追加されているかを確認
- 「npm install」がうまくいかない
  - そもそも npm が入っていない
    - aptでnpmをインストールする。
  - npm が入っててもエラーになる。
    - 以下を参照
      - <https://laracasts.com/discuss/channels/javascript/tailwindlaravel-mix-dependency-tree-error?page=1&replyId=752990>
- ホーム画面は出るけど、ログイン画面が開かない(apache)
  - 「`mod_rewrite`」が有効化されていない
    - 「`a2enmod rewrite`」コマンドで有効にする。

## Composer

Composerはパッケージ管理システムです。  
Laravelをインストールすると自動で`composer.json`が作成されます。  

### Composerパッケージ

Laravel標準以外でおすすめのパッケージをご紹介します。  

#### PHP_CodeSniffer

コーディング規約違反を検出(phpcs)及び、規約違反を自動的に修正(phpcdf) を行うパッケージです。

- GitHub
  - <https://github.com/squizlabs/PHP_CodeSniffer>

以下のコマンドでインストール可能です。  

```bash
composer require --dev squizlabs/php_codesniffer
```

## Artisanコンソール

ファイルの追加やmigrationの実行等、アプリケーション構築に必要なものを「`artisan`」を使って行います。

```bash
# artisan で使用できるコマンドリストが見れる
php artisan list
```

---

例: Artistモデルとそれに関連する各クラスを追加。  
    最初はこれで開発の感覚を掴むと良いです。

```bash
# app/Models （--all を指定することで、関連するファイルを追加）
php artisan make:model Artist --all
# app/tests/Feature
php artisan make:test Http/Controllers/ArtistControllerTest
# app/tests/Unit
php artisan make:test Http/Controllers/ArtistControllerTest --unit
```

- `app/Http/Controllers/ArtistController.php`
  - コントローラ <https://readouble.com/laravel/9.x/ja/controllers.html>
- `app/Http/Requests/StoreArtistRequest.php`
- `app/Http/Requests/UpdateArtistRequest.php`
  - HTTP Requests <https://readouble.com/laravel/9.x/ja/requests.html>
  - バリデーション <https://readouble.com/laravel/9.x/ja/validation.html>
- `app/Models/Artist.php`
  - Laravel 9.x Eloquentの準備 <https://readouble.com/laravel/9.x/ja/eloquent.html>
- `app/Policies/ArtistPolicy.php`
  - 認可 <https://readouble.com/laravel/9.x/ja/authorization.html>
- `app/database/migrations/YYYY_MM_DD_HHmmss_create_artist_table.php` （テーブル名は複数形をおすすめします）
  - マイグレーション <https://readouble.com/laravel/9.x/ja/migrations.html>
- `app/database/seeders/ArtistSeeder.php`
  - データベース：シーディング <https://readouble.com/laravel/9.x/ja/seeding.html>
- `app/database/factories/ArtistFactory.php`
  - データベーステスト <https://readouble.com/laravel/9.x/ja/database-testing.html>
- `app/tests/Feature/Http/Controllers/ArtistControllerTest.php`
- `app/tests/Unit/Http/Controllers/ArtistControllerTest.php`
  - テスト: テストの準備 <https://readouble.com/laravel/9.x/ja/testing.html>

---

例: Artistモデルに関連する画面を追加する場合

```bash
# app/Http/Controllers
php artisan make:controller ArtistExtendController --model=Artist --resource --requests --test
# app/tests/Unit
php artisan make:test Http/Controllers/ArtistExtendControllerTest --unit
```

## ルーティング

- [ルーティング](./routing/index.md)

## CRUD

WEBサービスを作る際、管理者がデータ登録・閲覧するための管理画面(Admin)を作る事があります。  
PCで扱うことを想定した、機能重視のdashboard・adminテンプレートのような画面レイアウトが多いです。  

CRUDの実践については以下を参照。

- [Laravel CRUD](./crud/index.md)

### 参考

- ダッシュボードテンプレートデモ
  - GitHub
    - <https://github.com/themesberg/tailwind-dashboard-windster>
  - Demo
    - ユーザーの一覧画面の例です。この例ではポップアップで編集を行っていますが  
      「一覧画面(index)」から「詳細画面(show)」、「新規画面(create)」、「編集画面(edit)」に遷移させるケースが多いです。  
      日本のWEBページでは、ショッピングサイト等にもよく見られる  
      更新前の「確認画面(confirm)」を挟む事もあります。
    - <https://demo.themesberg.com/windster/users/list/>
- テンプレ検索ワード
  - 「[admin template](https://www.google.com/search?q=admin+template)」
  - 「[dashboard template](https://www.google.com/search?q=dashboard+template)」
- Laravel 9.x HTTP Requests
  - <https://readouble.com/laravel/9.x/ja/requests.html>
- Laravel 9.x ルーティング
  - <https://readouble.com/laravel/9.x/ja/routing.html>
- Laravel 9.x ミドルウェア
  - <https://readouble.com/laravel/9.x/ja/middleware.html>
- Laravel 9.x コントローラ
  - <https://readouble.com/laravel/9.x/ja/controllers.html>
- Laravel 9.x Eloquentの準備 ソフトデリート
  - <https://readouble.com/laravel/9.x/ja/eloquent.html#soft-deleting>
- Laravel 9.x CSRF保護
  - <https://readouble.com/laravel/9.x/ja/csrf.html>
