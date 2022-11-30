# 株式会社エプコットソフトウェア ～ Laravelバージョン

## バージョン

最新の情報は公式を参照してください。  
変更点については公式の「アップグレードガイド」を参照してください。  

- Laravel Release Notes
  - <https://laravel.com/docs/releases>
- 【GitHub】Laravel Releases
  - <https://github.com/laravel/laravel/releases>
- Laravel 7.x アップグレードガイド
  - <https://readouble.com/laravel/7.x/ja/upgrade.html>
- Laravel 8.x アップグレードガイド
  - <https://readouble.com/laravel/8.x/ja/upgrade.html>
- Laravel 9.x アップグレードガイド
  - <https://readouble.com/laravel/9.x/ja/upgrade.html>

## バージョンの選択

Laravelに限らず、セキュリティサポート終了日が  
最も後ろのバージョンを使うことを推奨します。  

Laravel9はLTS(Long Term Support)予定でしたが、公式からはLTSがはずれたようです。  
開発者であるTaylor Otwell(テイラー・オットウェル)氏のTwitterを見る限り  
今後もLTSリリースはないかもしれません。  
Laravel6のサポートが切れ、今後はLTSが出ない可能性があるので  
最新バージョンを使うようにしましょう。  

- Laravel Release Notes
  - <https://laravel.com/docs/releases>

### Laravel9からLTSが外れた理由

- `Taylor Otwell - Twitter`
  - <https://twitter.com/taylorotwell/status/1491834866295525389>

```txt
Some have noticed L9 is no longer listed as "LTS" in our release notes.
Waiting to see the resolution of this: https://github.com/symfony/symfony/pull/45377
It could determine how we approach Laravel 9 long-term support.
Regardless, Laravel 9 will receive security updates for at least 2 years.

リリース ノートで L9 が「LTS」としてリストされなくなったことに気付いた人もいます。
これの解決を待っています: https://github.com/symfony/symfony/pull/45377
Laravel 9 の長期サポートへのアプローチ方法を決定する可能性があります。
いずれにせよ、Laravel 9 は少なくとも 2 年間はセキュリティ アップデートを受け取ります。
```

- `Taylor Otwell - Twitter`
  - <https://twitter.com/taylorotwell/status/1491834868954718214>

```txt
If every package your application depends on is not *also* LTS - your application is not actually covered by any real LTS guarantee.
So, in that regard, I consider all "LTS" releases in PHP frameworks a bit of a misleading concept.

アプリケーションが依存するすべてのパッケージが LTS *も*ではない場合、アプリケーションは実際の LTS 保証の対象外です。
そういう意味で、私は PHP フレームワークのすべての「LTS」リリースは少し誤解を招く概念だと考えています。
```
