# バックエンド編

## はじめに

バックエンド編課題は課題提出がありますので予めご確認下さい。  
つまずいたら質問する前に[トラブルシューティング](./../../troubleshoot/index.md)を参照してください。

- [研修課題提出](https://github.com/epkotsoftware/training-docs/blob/main/submission/README.md#研修課題提出)
- [トラブルシューティング](./../../troubleshoot/index.md)

バックエンド編ではCBCの実践（バックエンド Laravel）をやっていきます。  
開発環境についてはフロントエンドエンジニア編と同様に以下、Dockerで構築します。



## CBC 実践（バックエンド Laravel）

- 以下の教材内で、環境構築をしながら、提出課題まで実施します。読み飛ばさず、丁寧に作業しましょう。
- #1~4まであります。課題提出があります。
  - <https://epkotsoftware.github.io/training/cbc_internal/backend_1.html>
  - <https://epkotsoftware.github.io/training/cbc_internal/backend_2.html>
  - <https://epkotsoftware.github.io/training/cbc_internal/backend_3.html>
  - <https://epkotsoftware.github.io/training/cbc_internal/backend_4.html>


## 課題提出

以下を参照してください。

- [研修課題提出](https://github.com/epkotsoftware/training-docs/blob/main/submission/README.md#研修課題提出)

## 研修進捗資料の更新

課題提出した日付で「研修進捗」資料の更新をお願いします。

- [研修進捗](https://github.com/epkotsoftware/training-docs/blob/main/training/progress/README.md)

## 詰まってしまったときは

  - 「`Target class [SortableController] does not exist.`」のエラーが出る  
    - [名前空間](./../../../public/t/php/namespaces/index.md) について学習して下さい、「use」を使用します。
  - それ以外でエラーが発生した場合は、まずはトラブルシューティングを参照しましょう
  - 一部のリンクや説明が旧教材になっていいるので注意してください。指摘したい場合は講師に質問扱いで連絡してください。随時更新予定です
    - <https://epkotsoftware.github.io/training/troubleshoot/#%E3%83%90%E3%83%83%E3%82%AF%E3%82%A8%E3%83%B3%E3%83%89%E7%B7%A8>
  - 解決できない場合は、Slack内で質問しましょう
  - おおむね1時間から半日考えても解決できない場合、速やかに質問することを研修生の義務とします
  - 質問がない場合、順調に進んでいるとみなします。ご自身の実力より高い評価をされた場合、現場配属時のトラブルの原因になるため、不明点は放置しないこと
  - 逆に質問が多い場合であっても、進捗が良ければ評価には影響しません。むしろ積極的なアラートを出すことは大切です。遠慮なく質問しましょう
  - AIの活用は構いませんが、AIは我々の開発環境を知らないので、誤った回答をします。それで大幅に進捗が悪くなるケースが後を絶ちません。
  - AIの回答を活用する場合は、必ず内容の正しさをチェックすること。特に業界未経験者は、作業手順やコードを書かせるために利用するのではなく、内容の解説に利用する程度にとどめることを推奨します







  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -

## 旧資料。9月までの資料です。通常は閲覧してはいけません。TODO:変更予定 Laravel開発環境構築の変更

2026年9月以前の構築手順です。10月以降入社の方は閲覧禁止。閲覧してトラブルになった場合、バックエンド編を最初からやり直すことになります。

[構築手順](https://github.com/epkotsoftware/training-docs/blob/main/training/05_laravel/README.md) をご覧ください。



## 旧資料。9月までの資料です。通常は閲覧してはいけません。TODO: 削除予定です。CBC 実践（バックエンド Laravel）

LaravelのバージョンがCBCと異なるため、一つ一つコードを理解して進めましょう。  
  CBC → Laravel6(2022/09/06にセキュリティ修正終了)  
  EPKOT → Laravel9  

- `#1`～`#3` は環境構築になりますがDockerで構築済みのため、読み込みだけ行います。
  - <https://cbc-study.com/training/backend/laravel1>
- `#4`～`#9` は手順通り進めてみましょう。
  - 注意
    - RoutingについてはLaravel6は手法が古いため、以下で学習し実装してください（「`#7 Laravelでデータベースのデータを表示する方法`」の手法が古いです）。
      - [ルーティング](./../../laravel/routing/index.md)
    - 「`Target class [SortableController] does not exist.`」のエラーが出る  
      - [名前空間](./../../../public/t/php/namespaces/index.md) について学習して下さい、「use」を使用します。
    - ディレクトリ構成がCBCと違うので読み替えてください。
      - 「`CBC_Laravel/resources/views/`」の場合、「`05_laravel/app/resources/views/`」
    - Laravel9では、Modelクラスが追加される個所が変わります。
      - 「`05_laravel/app/app/Models`」ディレクトリ内に追加され、名前空間(namespace)も変わります。
  - <https://cbc-study.com/training/backend/laravel2>
  - <https://cbc-study.com/training/backend/laravel3>
  - <https://cbc-study.com/training/backend/laravel4> (`#9`まで)
- `#10` からの「タスク管理ツール」ですが、同一プロジェクト・DBに作ってみましょう。
  - <https://cbc-study.com/training/backend/laravel4#s10>
  - 「前準備」は飛ばしましょう。
  - マイグレーションを使ってDB(cbc_laravel)に「tasks」テーブルを作成してください。
  - Routingについては以下で「タスク管理ツール」にアクセスできるようにしてください。
    - <http://localhost:8026/task>