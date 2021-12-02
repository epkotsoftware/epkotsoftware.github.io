# 株式会社エプコットソフトウェア ～ Laravel

## これから新規開発をする場合

運用に入ってから、セキュリティサポートが切れるとアップデートが必要となるため  
基本的にはセキュリティサポートが長いバージョンを選択します（先方にもバージョンや期限については伝えること）。  
また、レンタルサーバーを使用する場合、PHPの最新バージョンに未対応なこともあるので予め確認が必要です。

### Laravelバージョン

Laravelに限らず、最新バージョンのフレームワーク等は情報が少ないため  
LTS(Long Term Support) がついているバージョンの最新バージョンが良さそうです（Laravel 8 は 9 のリリースが延びたことにより 8 のサポート期間が延びたので 8 でもOK）。  

2022年1月25日に9がリリースされるため、それ以降に開発着手の場合、`Laravel 9(LTS)` を選択したいところ

- Laravel Release Notes
  - <https://laravel.com/docs/releases>
- 【GitHub】Laravel Releases
  - <https://github.com/laravel/laravel/releases>

### PHPバージョン

[Laravel Release Notes](https://laravel.com/docs/releases) に対応するPHPのバージョンは記載されていますが`composer.json`でも確認できます。  
対応PHPの最新バージョンを選択することを推奨します。

- 【GitHub】Laravel Releases
  - <https://github.com/laravel/laravel/>
    - 左のブランチ選択のところで「Tags」タブから対象のバージョンを選択して、`composer.json`を選択。
    - 「`v8.6.8`」の場合
      - <https://github.com/laravel/laravel/blob/v8.6.8/composer.json#L8>
        - 「`^7.3`」の場合、7.3以上、8.0未満
        - 「`^8.0`」の場合、8.0以上、9.0未満
- PHP Supported Versions
  - <https://www.php.net/supported-versions.php>
- PHP Downloads
  - <https://www.php.net/downloads>

## これから学習するバージョン

2021/12 現在、学習するバージョンについて個人的な観点から記します。  
現場で使われているバージョンについては、サポート切れのものをそのまま使用しているケースもあります。  
面談ではMySQL等も含めて、各環境のバージョンを確認すると良いです。

- PHP7 > PHP8
  - 理由
    - PHP7未満はサポートが切れており、公式ドキュメントからも記述が消えている。
      - 逆に学習しにくいということと、廃止された機能も多い。
    - PHP7から型宣言（旧:タイプヒンティング）が強化
      - <https://www.php.net/manual/ja/language.types.declarations.php>
    - PHP7.2以降は恐らく現場で使われている所が多い（Laravelのサポート内のバージョン）。
  - 旧バージョンを学習する際の注意点
    - 古いバージョンには後々廃止される機能があるのでご注意ください。
    - PHP8.0から下位互換性のない変更点・推奨されなくなる機能（**文字列と数値の比較** は特に注意です）
      - <https://www.php.net/manual/ja/migration80.incompatible.php>
      - <https://www.php.net/manual/ja/migration80.deprecated.php>
    - PHP8.1から下位互換性のない変更点・推奨されなくなる機能
      - <https://www.php.net/manual/ja/migration81.incompatible.php>
      - <https://www.php.net/manual/ja/migration81.deprecated.php>
- Laravel8 > Laravel6
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

- Laravel
  - <https://laravel.com/>
- Laravel6.x LTS
  - <https://readouble.com/laravel/6.x/ja/>
- Laravel8.x
  - <https://readouble.com/laravel/8.x/ja/>

## 動画

- Laravel入門(全13回)
  - <https://youtube.com/playlist?list=PLCyDm9NTxdhLnA4tH5ToQR1K1LcWIAdOa>
- 【Laravel8初級】ログイン機能作成(全7回)
  - <https://youtube.com/playlist?list=PLCyDm9NTxdhLV5LFfCoRykyHW8Zw91YJB>
