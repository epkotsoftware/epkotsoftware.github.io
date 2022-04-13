# 株式会社エプコットソフトウェア ～ Laravel CRUD

`TODO: 【作成中】この資料は作成中です。`  

実際にCRUDを作っていきましょう。  
Laravelについては、ある程度理解している前提で進めていきます。

## 環境

- PHP8以上
- Laravel9 (8でも可)
- Bootstrap4
- jQuery

## 仕様

データベースのjobs(職業)テーブルを参照・更新する機能を開発します。

### 機能一覧

| URI | HTTPメソッド | ルート名 | 種別 | 機能名 | 備考 |
| --- | --- | --- | --- | --- | --- |
| admin/jobs              | GET    | admin.jobs.index   | 画面 | 職業 一覧画面     |  |
| admin/jobs              | POST   | admin.jobs.store   | 機能 | 職業 新規         |  |
| admin/jobs/create       | GET    | admin.jobs.create  | 画面 | 職業 新規画面     |  |
| admin/jobs/{id}         | GET    | admin.jobs.show    | 画面 | 職業 詳細画面     |  |
| admin/jobs/{id}         | PATCH  | admin.jobs.update  | 機能 | 職業 更新         |  |
| admin/jobs/{id}         | DELETE | admin.jobs.destroy | 機能 | 職業 削除         |  |
| admin/jobs/{id}/edit    | GET    | admin.jobs.edit    | 画面 | 職業 編集画面     |  |
| admin/jobs/{id}/confirm | POST   | admin.jobs.confirm | 画面 | 職業 編集確認画面 |  |

### 画面遷移図

- [PlantUML](https://www.plantuml.com/plantuml/umla/TL91Im915Bw_Np7OBH0yxo4yHD1lY0xYZhYWkx8xKX91kH0KMHqYCkiYfIL4aeAHGJzcozqzzHTwpdDis2KFRtpVlFUzxtkpUKyKN56lLg1icPpnQaqqcCczeclLXENOWFU2i-XmCdjuPdkmo3DVRmTHhnzUJkExReOLF6RP9jy56OtPrJ3gdGV-RT3y3FoHGg_Fml7mv-DcSps9V5-qmlumXHwVnEtxFnerc-WpR3xM4uxBsSe6_dAvH8MchkXol00wZB0zZKzVqyJHqmWdQsrUsTc1UJ32oMFSELgs4FYlmCuO5KY6Uir4I0bK1TGe2t3NmdKQoGgQfqdXfYLW7eom-nuDMkcfXEkc7RjakLLOd0R9qXgtLhTPDhkclnt3bBQaSWIaMKQF53HV0dyG-3x-KIKLNX9Ojh02ojAIcGWnf-S26ObPBPXf_IfVMiOaQKPsqtA13WGa6-n3djicVjA_)  

### DB

#### jobs(職業)

`TODO: 【作成中】後で表にする`

```sql
CREATE TABLE `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '名称',
  `deleted_at` timestamp NULL DEFAULT NULL COMMENT '削除日時',
  `created_at` timestamp NULL DEFAULT NULL COMMENT '作成日時',
  `updated_at` timestamp NULL DEFAULT NULL COMMENT '更新日時',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci COMMENT='職業'
```

## 各ファイルを生成

`jobs`テーブルに対応したModelクラス及び、関連クラスを生成します。  
今回は以下のコマンドで一括で生成します。

```bash
php artisan make:model Job --all
```

「`app/Policies/JobPolicy.php`」も生成されますが  
本研修では使用しないので削除してください。  
現場で使用する可能性は高いので、公式ページの「認可」で少し学習しておきましょう。

- 参考:Eloquentの準備
  - <https://readouble.com/laravel/9.x/ja/eloquent.html>
- 参考:認可
  - <https://readouble.com/laravel/9.x/ja/authorization.html>

## database

### migrations

以下のような生成日時が入ったmigrationファイルが出来ているので`up`メソッドを編集します。  
DB仕様通りに定義します。  

```txt
database/migrations/YYYY_MM_DD_hhmmss_create_jobs_table.php
```

```php
    public function up()
    {
        $tableName = 'jobs';
        Schema::create($tableName, function (Blueprint $table) {
            $table->id()->comment('ID'); // id
            $table->string('name')->comment('名称'); // name
            $table->softDeletes()->comment('削除日時'); // deleted_at
            // コメントが不要であれば $table->timestamps() でcreated_at、updated_atの作成が可能
            $table->timestamp('created_at')->nullable()->comment('作成日時'); // created_at
            $table->timestamp('updated_at')->nullable()->comment('更新日時'); // updated_at
        });
        DB::statement("ALTER TABLE {$tableName} COMMENT '職業'");
    }
```

commentメソッドを使うことで、テーブル・カラムにコメントを追加することが出来ます。  
基本的には論理名（日本語名）を入れることが多いです。  
編集が終わったら、migrationを実行してテーブルを作成しましょう。

```bash
php artisan migrate
```

- 参考: マイグレーション
  - <https://readouble.com/laravel/9.x/ja/migrations.html>

### factories

テスト用のテーブルレコードを生成する処理を定義します。  

```txt
database/factories/JobFactory.php
```

```php
class JobFactory extends Factory
{
    private int $i = 1;

    public function definition()
    {
        return [
            'name' => sprintf('JOB_%04d', $this->i++),
            'deleted_at' => null,
            'created_at' => '2021-12-30 11:22:33',
            'updated_at' => '2021-12-31 23:58:59',
        ];
    }
}
```

- 参考: データベーステスト
  - <https://readouble.com/laravel/9.x/ja/database-testing.html>

### seeders

Seederクラスを使って初期レコードやテスト用のレコードを追加します。  
開発環境の場合のみ、JobFactoryクラスで生成したレコード100件を追加する処理を記述します。

```txt
database/seeders/JobSeeder.php
```

```php
    public function run()
    {
        // 開発環境のみ100レコードを追加する。
        if (app()->isLocal()) {
            // 全件削除
            Job::truncate();
            // JobFactoryクラスを使って100件追加
            Job::factory()
                ->count(100)
                ->create();
        }
    }
```

開発環境の判定については`isLocal`メソッドを使います。  
`.env`ファイルの`APP_ENV`に「`local`」が設定されていた場合、trueとなります。

```txt
APP_ENV=local
```

```txt
database/seeders/DatabaseSeeder.php
```

```php
    public function run()
    {
        $this->call([
            JobSeeder::class,
        ]);
    }

```

編集が終わったら、Seederを実行してレコードを追加しましょう。

```bash
php artisan db:seed
```

- 参考: データベース：シーディング
  - <https://readouble.com/laravel/9.x/ja/seeding.html>
