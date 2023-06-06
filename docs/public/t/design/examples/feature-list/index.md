# 機能一覧の例

## 機能一覧

| URI | HTTP<br>メソッド | 機能・画面コード | 種別 | 機能・画面名 | 備考 |
| --- | --- | --- | --- | --- | --- |
| admin/jobs              | GET    | admin.jobs.index   | 画面 | 職業 一覧画面     |  |
| admin/jobs              | POST   | admin.jobs.store   | 機能 | 職業 新規         |  |
| admin/jobs/create       | GET    | admin.jobs.create  | 画面 | 職業 新規画面     |  |
| admin/jobs/{id}         | GET    | admin.jobs.show    | 画面 | 職業 詳細画面     |  |
| admin/jobs/{id}         | PATCH  | admin.jobs.update  | 機能 | 職業 更新         |  |
| admin/jobs/{id}         | DELETE | admin.jobs.destroy | 機能 | 職業 削除         |  |
| admin/jobs/{id}/edit    | GET    | admin.jobs.edit    | 画面 | 職業 編集画面     |  |
| admin/jobs/{id}/confirm | POST   | admin.jobs.confirm | 画面 | 職業 編集確認画面 |  |
