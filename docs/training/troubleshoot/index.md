# トラブルシューティング

## 目次

| No. |  |
| :---: | --- |
| 1 | [はじめに](#はじめに) |
| 2 | [全般](#全般)<br>└ [キャッシュ](#キャッシュ)<br>└ [ブラウザのエラー確認](#ブラウザのエラー確認)<br>└ [Git](#git)<br>└ [Docker](#docker) |
| 3 | [コーダー編](#コーダー編) |
| 4 | [マークアップエンジニア編](#マークアップエンジニア編) |
| 5 | [フロントエンドエンジニア編](#フロントエンドエンジニア編) |
| 6 | [バックエンド編](#バックエンド編) |

## はじめに

よくある質問をまとめた資料です。  
質問する前にこちらを確認しましょう。  

## 全般

### キャッシュ

Webページ表示などに問題があった場合  
キャッシュされたCSS・JavaScriptが使われている可能性があるので確認しておきましょう。  
何のことかわからない方は、コーダー編でもやった以下を復習してください。

- 【Webデザイナー・プログラマーになりたい皆さんへ】Web業界の常識シリーズ10選！知らないままではマズいです… キャッシュ/スーパーリロード/アクセス制限の方法etc【初心者必見】
  - <https://youtu.be/XAeLmi6E4-g>

クライアント側（ブラウザ）でのキャッシュ対策としては  
常にブラウザの「**シークレットウィンドウ**」を使うことです。  

また、バックエンド編などでLaravelを使っている場合は  
以下のコマンドで、Laravelのキャッシュも削除しておきましょう。

```bash
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

### ブラウザのエラー確認

Webページ表示などに問題があった場合  
GoogleChromeの「Console」にエラーが出ていることがあるので確認しましょう。

### Git

#### コミットでフリーズ

> VSCodeでのコミットでフリーズしてしまう

2022/11現在、コミットコメントが未入力の場合にフリーズしてしまうようです。  
VSCodeを再起動し、もう一度試してみましょう。

### Docker

フロントエンドエンジニア編以降で使う  
「Docker」のトラブルシューティングについては  
以下にまとめています。

- [Docker トラブルシューティング](./../docker/troubleshoot.md)

## コーダー編

### CSSを変えても画面に反映されない

まず、ファイルが保存されているか確認しましょう。  
ファイル保存後に画面の更新を行いましょう。

### CSS・画像が読み込まれない

パスについて学習しましょう。  
今回の場合、相対パスを使用します。  
パスはエンジニアにとって必須の知識になります。  

- `【Web業界の常識】「パス」の書き方、説明できますか？Webデザイナー・プログラマー志望の皆さんへ 初心者向け【HTML・CSS コーディング】`
  - <https://youtu.be/R7tNviqrMzo>

CSSのurl関数で画像を表示しようとしている場合、CSSファイルからの相対パスとなりますので注意してください。  
MDNにもそのように記載があります。  

> 相対 URL が使用された場合は、スタイルシートの URL からの相対となります (ウェブページの URL からではありません)。

- `url() - CSS: カスケーディングスタイルシート | MDN`
  - <https://developer.mozilla.org/ja/docs/Web/CSS/url>

## マークアップエンジニア編

キャッシュによるトラブルが多いので  
以下をチェックしておきましょう。

- [全般](#全般)

## フロントエンドエンジニア編

キャッシュ・Dockerによるトラブルが多いので  
以下をチェックしておきましょう。

- [全般](#全般)

### phpMyAdminが開かない

> 「[#9 データベース（DB）を作る](https://cbc-study.com/training/advanced/page4#s9)」で  
> `http://localhost:8888/phpMyAdmin/` でphpMyAdminが開かない。  

開発環境構築時に既に確認しているはずです。  
CBCと環境が違うので注意しましょう。

- [trainingリポジトリ 03_advanced/README.md 〜 確認](https://github.com/epkotsoftware/training/tree/template/users/_template/03_advanced#確認)

### No such file or directory

> 「[#3 データベースに接続する](https://cbc-study.com/training/advanced/page5#pl-9)」などで  
> 以下のエラーメッセージが出る
>
> SQLSTATE[HY000] [2002] No such file or directory

データベース接続に失敗している場合に出るエラーメッセージです。  
CBCとはデータベースの接続情報が異なりますので以下を参照してください。

- [trainingリポジトリ 03_advanced/README.md 〜 PHP](https://github.com/epkotsoftware/training/tree/template/users/_template/03_advanced#php)

### phpMyAdmin 正しい長さを入力してください

> [#9 作ったプログラムを拡張してみる](https://cbc-study.com/training/advanced/page7#s9)にて  
> phpMyAdminでテーブルを作成する際、「正しい長さを入力してください！」のエラーが出る。  

`varchar(11)`の`11`が長さを表します。

### Undefined property

> 「[#12 PHPアプリケーションをクラス化してみよう](https://>cbc-study.com/training/advanced/class1#s12)」にて
> 以下のメッセージが画面上に出る。
>
> Warning: Undefined property: PDOException::$getMessage in /var/www/html/sortable3/Controller/Connect.php  
> エラー

2022/11現在、CBCのConnect.phpのコードの誤りで上記のエラーが出ることがあります。  
以下の様に「`()`」をつけると正しいエラーメッセージが出力されます。  

```txt
× echo 'エラー '.$e->getMessage;
◯ echo 'エラー '.$e->getMessage();
```

原因としてはデータベース接続エラーなので  
「[No such file or directory](#no-such-file-or-directory)」のエラーメッセージが出ている可能性が高いです。  
データベース接続情報をよく確認しましょう。

## バックエンド編

キャッシュによるトラブルが多いので  
以下をチェックしておきましょう。

- [全般](#全般)

### コマンドでエラーになる

> `php artisan xxxx` のようなコマンドを打つとエラーになる

Webサーバーで入力していない可能性が高いので確認しましょう。  
環境構築時のREADME.mdに記載されています。

### Permissionエラー

> 以下のエラーが出る。
>
> UnexpectedValueException
>
> The stream or file "/var/www/app/storage/logs/laravel.log" could not be opened in append mode: Failed to open stream: Permission denied The exception occurred while attempting to log: The stream or file...

ログファイル(`storage/logs/laravel.log`)への書き込み権限がなくエラーになっています。
開発環境構築時に権限設定が漏れているかもしれません。  
以下で設定しておきましょう。

```bash
# ■ WEBサーバーで入力
cd /var/www/app
# storage ディレクトリに読み取り・書き込み権限を与える（storage内に書き込み（ログ出力時等）に「Permission denied」のエラーが発生する）
chmod -R 777 storage/
```

- Linuxの権限確認と変更(chmod)（超初心者向け）
  - <https://qiita.com/shisama/items/5f4c4fa768642aad9e06>

### クラスが見つからない

まずはクラス名のスペルミスの確認を行い、問題なければ  
ルーティング、名前空間（完全修飾名・namespace・use）の理解をしましょう。  

名前空間の「namespace」・「use」はPHPの実務において、ほぼ確実に使うため  
この機会にしっかり学習しておきましょう。  

- [Laravel ルーティング](./../laravel/routing/index.md)
- [名前空間](./../programming/php/namespaces/index.md)
  - 以下を人に説明できるレベルになっておくことが必要です。
    - 完全修飾名
    - namespace
    - use

#### Target class [SortableController] does not exist

> 「[#7 Laravelでデータベースのデータを表示する方法](https://cbc-study.com/training/backend/laravel3#pl-2)」で  
> 以下のエラーメッセージが出る
>
> Target class [SortableController] does not exist.

web.phpの記載に誤りがある可能性が高いです。  
Controllerを使ったルート設定は、Laravel6のルート設定では出来なくなっています  
[ルーティング](./../laravel/routing/index.md)・[名前空間](./../programming/php/namespaces/index.md)について学習しましょう。

#### Class "App\Sortable" not found

> 「[#7 Laravelでデータベースのデータを表示する方法](https://cbc-study.com/training/backend/laravel3#pl-2)」で  
> 以下のエラーメッセージが出る
>
> Error
>
> Class "App\Sortable" not found

SortableControllerで存在しない「`\App\Sortable`」クラスを使おうとしている可能性が高いです。  
Laravel6と最新バージョンでは名前空間が異なるため、確認しましょう。  
よくわからなければ、[名前空間](./../programming/php/namespaces/index.md)について学習しましょう。

#### Class "App\Http\Controllers\Sortable" not found

> 「[#7 Laravelでデータベースのデータを表示する方法](https://cbc-study.com/training/backend/laravel3#pl-2)」で  
> 以下のエラーメッセージが出る
>
> Error
>
> Class "App\Http\Controllers\Sortable" not found

`SortableController`クラスで use が使われていない可能性が高いです。  
例えば use の指定なしで `Sortable::orderBy('id', 'asc')->get();` のような処理があった場合  
`SortableController`クラスの名前空間内の `Sortable` クラスにアクセスするため  
完全修飾名が「`\App\Http\Controllers\Sortable`」クラスにアクセスします。  

使いたい`Sortable`クラスの完全修飾名を確認しましょう。  
よくわからなければ、[名前空間](./../programming/php/namespaces/index.md)について学習しましょう。

### drags.blade.phpでエラーが発生する

> 「[#7 Laravelでデータベースのデータを表示する方法](https://cbc-study.com/training/backend/laravel3#pl-5)」で  
> drags.blade.phpのエラーが出る。

2022年現在、VSCodeがBladeの構文チェックに対応していないため  
エラーが出てきますが、問題ないためそのまま進めてください。  

どうしても気になる場合、Bladeに対応した拡張機能がありそうなので  
自己責任にはなりますが、自身で調べ導入してください。

### ドラッグ時にDBが更新されない

[#9 LaravelでAjaxのデータを登録する方法](https://cbc-study.com/training/backend/laravel4#pl-6)をよく確認しましょう。  
[キャッシュ](#キャッシュ)やCSRFトークンが正しく設定されていないことが原因になっていることが多いです。

- `Laravel 9.x CSRF保護 - X-CSRF-TOKEN`
  - <https://readouble.com/laravel/9.x/ja/csrf.html#csrf-x-csrf-token>

### タスク登録できない

> タスク登録機能がうまく動作しない

いくつか原因が考えられます。

- [全般](#全般)のキャッシュなどを確認しておく
- Sortableのルーティングと重複している可能性があるので確認しておく
  - [Laravelルーティング](./../laravel/routing/index.md#laravelルーティング)の「商品一覧画面」・「商品新規画面」を参考にしてください。
  - ルーティングを変更したら、呼び出し元のURLも修正が必要です。
