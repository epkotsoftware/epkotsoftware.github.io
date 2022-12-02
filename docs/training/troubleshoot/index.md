# 株式会社エプコットソフトウェア ～ トラブルシューティング

## 目次

| No. |  |
| :---: | --- |
| 1 | [はじめに](#はじめに) |
| 2 | [全般](#全般)<br>└ [キャッシュ](#キャッシュ)<br>└ [Git](#git)<br>└ [Docker](#docker) |
| 3 | [コーダー編](#コーダー編) |
| 4 | [マークアップエンジニア編](#マークアップエンジニア編) |
| 5 | [フロントエンドエンジニア編](#フロントエンドエンジニア編) |
| 6 | [バックエンド編](#バックエンド編) |

## はじめに

よくある質問をまとめた資料です。  
質問する前にこちらを確認しましょう。  

## 全般

### キャッシュ

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

キャッシュによるトラブルが多いので  
以下をチェックしておきましょう。

- [全般](#全般)

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

### Target class xxxxxx does not exist

> 「[#7 Laravelでデータベースのデータを表示する方法](https://cbc-study.com/training/backend/laravel3#pl-2)」で  
> 以下のエラーメッセージが出る
>
> Target class [SortableController] does not exist.

名前空間のないSortableControllerクラスにアクセスしようとしているため  
クラスが存在しないのでエラーになっています。  

Laravel ルーティングにも書かれている  
名前空間について学習が必要です。

- [Laravel ルーティング](./../laravel/routing/index.md)

名前空間の「namespace」・「use」はPHPの実務において、ほぼ確実に使うため  
この機会にしっかり学習しておきましょう。  

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
