# Laravel CRUD 詳細設計（職業 詳細画面）

## 研修コメント

学習のためLaravel公式サイトへのリンクを追加しています。  

## 概要

| コード | 画面名 |
| --- | --- |
| admin.jobs.show | 職業 詳細画面 |

## パラメータ

| パラメータ名 | 説明 | 備考 |
| --- | --- | --- |
| `{job}` | `jobs.id` | URL記載 |

## 画面

![admin_jobs_show](./../../screen/images/admin_jobs_show.png)  

- その他レイアウトについて [画面レイアウト(詳細画面)](./../../screen/index.md#詳細画面) 参照

## コントロール定義

| No. | 名称 | 表示 | 種類 | 入<br>力 | 必<br>須 | 桁<br>数 | 書式 | 備考 |
| :---: | --- | --- | :---: | :---: | :---: | :---: | :---: | --- |
| 1 | タイトル | `職業` | label | - | - | - | - | h1 |
| 2 | サブタイトル | `詳細` | label | - | - | - | - | h2 |
| 3 | IDラベル | `ID` | label | - | - | - | - |  |
| 4 | ID入力欄 | DB値: jobs.id | textbox | - | - | - | text |  |
| 5 | 名称ラベル | `名称` | label | - | - | - | - |  |
| 7 | 名称入力欄 | DB値: jobs.name | textbox | - | - | - | text |  |
| 8 | 一覧へボタン | `一覧へ` | button | - | - | - | - |  |
| 9 | 削除ボタン | `削除` | button | - | - | - | - |  |
| 10 | 編集ボタン | `編集` | button | - | - | - | - |  |

## フローチャート

- [PlantUML](https://www.plantuml.com/plantuml/umla/SoWkIImgAStDuG8pkBWAW6HcIMP-de9oVb5YNdggWazYKM9PQev2DPU2WjNJzVjUR5puk7dDuwRDZvltF6xkVDe_xUc-wTPSGDdCD0KDJ0MF6tkUhftnTCwAnutJ7pUkUjpOegbGaf6Qfw1HcLgioQK01Ce5cNdPLYO69e-RPu4qDUruiN35yoMxhC6onINv1K16QbvAPXfNBHUNrTEEkS_cp8SfuGBBEm2bWTu00000)  
  ![flowchart](./images/flowchart.png)  

## 対象レコード取得

Laravel機能を利用して行う。

- Laravel 9.x コントローラ ～ リソースコントローラ
  - <https://readouble.com/laravel/9.x/ja/controllers.html#resource-controllers>

条件(AND)

| 条件 | 備考 |
| --- | --- |
| jobs.id = パラメータ.`{job}` |  |
| jobs.deleted_at = NULL |  |

取得カラム

| 項目 | 備考 |
| --- | --- |
| jobs.* |  |

```sql
-- SQL例
select * from `jobs` where `id` = ? and `jobs`.`deleted_at` is null limit 1;
-- パラメータ
--   id例: 100
```

## 初期表示

- 対象レコードの情報を画面表示する。  
  ![admin_jobs_show](./../../screen/images/admin_jobs_show.png)  

## 一覧へボタンクリック

- 一覧画面へ遷移する。

| 遷移先画面コード | パラメータ | 備考 |
| --- | --- | --- |
| admin.jobs.index | なし |  |

## 編集ボタンクリック

- 編集画面へ遷移する。

| 遷移先画面コード | パラメータ | 備考 |
| --- | --- | --- |
| admin.jobs.edit | `{job}` = jobs.id |  |

## 削除ボタンクリック

- 「削除確認ダイアログ」を開く  
  ![admin_jobs_show](./../../screen/images/admin_jobs_show_delete.png)  

## 【削除確認ダイアログ】OKボタンクリック

- 削除機能を呼び出す。

| 機能コード | パラメータ | 備考 |
| --- | --- | --- |
| admin.jobs.destroy | `{job}` = jobs.id<br>`_method` = `DELETE`<br>`_token` = トークン | `HTTPメソッド: POST` |

- `Laravel 9.x ルーティング ～ 疑似フォームメソッド`
  - <https://readouble.com/laravel/9.x/ja/routing.html#form-method-spoofing>
- `Laravel 9.x CSRF保護`
  - <https://readouble.com/laravel/9.x/ja/csrf.html>

## 【削除確認ダイアログ】キャンセルボタンクリック

- 削除確認ダイアログを閉じる。
