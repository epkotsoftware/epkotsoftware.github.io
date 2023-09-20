# Laravel CRUD CSVダウンロード

[Laravel CRUD](./../index.md) で作成したアプリの職業一覧画面に  
職業一覧をCSVダウンロード出来る機能を追加してみましょう。

## 仕様

「職業 一覧画面」にCSVボタンを追加し、一覧のCSVダウンロード機能を追加します。  
一覧画面ではページングで数件ずつ表示されていますが、本機能では全件対象となります。  

- 仕様
  - カラム
    - ID - jobs.id
    - 名称 - jobs.name
  - ヘッダー行あり
  - ファイル名は「`jobs.csv`」

| URI | HTTP<br>メソッド | 機能・画面コード | 種別 | 機能・画面名 | 備考 |
| --- | --- | --- | --- | --- | --- |
| admin/jobs/csv | POST   | admin.jobs.csv   | 機能 | 職業 CSVダウンロード | Controllerメソッド名は「`downloadCsv`」 |

## CSVについて

ファイル編を復習しましょう。

- [ファイル編](./../../../../public/t/file/index.md)

## Controllers

`JobController`にCSVのストリームダウンロードを行う「`downloadCsv`」メソッドを追加します。  
また、他の機能でも使い回しが出来るように「`streamDownloadCsv`」メソッドにダウンロード処理  
「`getJobCsvRecords`」メソッドでレコード作成処理を切り出しています。  
こうすることで、TSVダウンロード等の機能拡張が容易になります（区切り文字をTABに変えるだけ）。

---

```txt
app/Http/Controllers/JobController.php
```

```php
    public function downloadCsv()
    {
        // CSVダウンロード
        //   CSVレコード配列取得
        $csvRecords = self::getJobCsvRecords();

        //   CSVストリームダウンロード
        return self::streamDownloadCsv('jobs.csv', $csvRecords);
    }

    private static function getJobCsvRecords(): array
    {
        // id 降順で全レコード取得
        $jobs = Job::orderByDesc('id')->get();

        $csvRecords = [
            ['ID', '名称'], // ヘッダー
        ];
        foreach ($jobs as $job) {
            $csvRecords[] = [$job->id, $job->name]; // レコード
        }
        return $csvRecords;
    }

    private static function streamDownloadCsv(
        string $name,
        iterable $fieldsList,
        string $separator = ',',
        string $enclosure = '"',
        string $escape = "\\",
        string $eol = "\r\n"
    ) {
        // Content-Type
        $contentType = 'text/plain'; // テキストファイル
        if ($separator === ',') {
            $contentType = 'text/csv'; // CSVファイル
        } elseif ($separator === "\t") {
            $contentType = 'text/tab-separated-values'; // TSVファイル
        }
        $headers = ['Content-Type' => $contentType];

        return response()->streamDownload(function () use ($fieldsList, $separator, $enclosure, $escape, $eol) {
            $stream = fopen('php://output', 'w');
            foreach ($fieldsList as $fields) {
                fputcsv($stream, $fields, $separator, $enclosure, $escape, $eol);
            }
            fclose($stream);
        }, $name, $headers);
    }
```

上記の例ではresponseの`streamDownload`メソッドを使って  
CSVのダウンロード機能を実装しています。  
`streamDownload`メソッドの第一引数には、コールバック関数を指定する必要があり  
今回は、PHPの「無名関数」を使用しています。  

「`getJobCsvRecords`」メソッドで、レコードを全件取得してきているため  
テーブルに格納しているレコード数が多くなってくるとメモリ不足になることがあります。  

それを解決する方法として、Laravelの「`lazyById`」等のメソッドや  
PHPのジェネレーター(`Generator`)を使って対応することが出来ます。  
下記のコードは上記の例と機能的には違いがありません。  

```php
    private static function getJobCsvRecords(): Generator
    {
        // id 降順で全レコード取得(1000件ずつ)
        $jobs = Job::lazyByIdDesc(1000);

        yield ['ID', 'NAME']; // ヘッダー
        foreach ($jobs as $job) {
            yield [$job->id, $job->name]; // レコード
        }
    }∑
```

「`yield`」キーワードを使うことで自動的に戻り値が`Generator`になり  
配列と同様に`foreach`でループさせる事が出来、以下の実行結果のような順番で処理が実行されます。  
配列にデータを格納する必要がなくなるので、メモリ効率が良くなります。

```php
<?php
// Generatorテスト
function getWords(): Generator
{
    echo 'A' . "\n";
    yield 'a';
    echo 'B' . "\n";
    yield 'b';
    echo 'C' . "\n";
    yield 'c';
}

$words = getWords();
echo "ループ開始\n";
foreach ($words as $w) {
    echo "Word: {$w}\n";
}
// ループ開始
// A
// Word: a
// B
// Word: b
// C
// Word: c
```

「`lazyByIdDesc`」メソッドもGeneratorの動作と同様に  
ループする時に、必要になったら1000件ずつレコードを取ってきます。  
クエリは、以下のようなイメージです(1万レコードあった場合)。

```sql
-- 1回目
select * from `jobs` order by `id` desc limit 1000;
-- 2回目 (前回の最終レコードのid=9001)
select * from `jobs` where `id` < 9001 order by `id` desc limit 1000;
-- 3回目 (前回の最終レコードのid=8001)
select * from `jobs` where `id` < 8001 order by `id` desc limit 1000;
```

この1000件ずつ取ってくるテクニックはLaravel以外でも使える内容なので  
覚えておきましょう。

- 参考
  - HTTPレスポンス  ストリームダウンロード
    - <https://readouble.com/laravel/9.x/ja/responses.html#streamed-downloads>
  - streamDownloadメソッド
    - <https://laravel.com/api/9.x/Illuminate/Contracts/Routing/ResponseFactory.html#method_streamDownload>
  - データベース：クエリビルダ  ルーズなストリーミング結果
    - <https://readouble.com/laravel/9.x/ja/queries.html#streaming-results-lazily>
  - PHP
    - サポートするプロトコル/ラッパー (`php://`)
      - <https://www.php.net/manual/ja/wrappers.php.php>
    - fopen
      - <https://www.php.net/manual/ja/function.fopen.php>
    - fputcsv
      - <https://www.php.net/manual/ja/function.fputcsv.php>
    - fclose
      - <https://www.php.net/manual/ja/function.fclose.php>
    - ジェネレータ
      - <https://www.php.net/manual/ja/language.generators.php>
    - 無名関数
      - <https://www.php.net/manual/ja/functions.anonymous.php>
  - Comma-Separated Values
    - <https://ja.wikipedia.org/wiki/Comma-Separated_Values>
  - Tab-Separated Values
    - <https://ja.wikipedia.org/wiki/Tab-Separated_Values>
  - MIME Content-Type 表
    - <https://www.kyoto-su.ac.jp/ccinfo/use_web/mine_contenttype/index.html>

## Routes

JobControllerのグループ内に csv のルートを追加しましょう。

---

```txt
routes/web.php
```

```php
Route::post('csv', 'downloadCsv')->name('.csv');
```

## Views

職業一覧画面の任意の場所にCSVボタンを追加しましょう。

---

```txt
resources/views/admin/jobs/index.blade.php
```

```html
<form action="{% raw %}{{ route('admin.jobs.csv') }}{% endraw %}" method="POST">
  @csrf
  <button type="submit" class="btn btn-primary">CSV</button>
</form>
```

## 動作確認

ここまででCSVダウンロードが可能になっているはずなので
一覧画面のCSVボタンでダウンロードしてみましょう。

以下のようなファイルがダウンロードされます。

```csv
ID,名称
100,JOB_0100
99,JOB_0099
98,JOB_0098
97,JOB_0097
96,JOB_0096
  ・
  ・
  ・
```

## 課題

TSVファイルのダウンロード機能も追加しましょう。  

- 仕様
  - カラムはCSV同様
  - ヘッダー行あり
  - ファイル名は「`jobs.tsv`」
- 開発メモ
  - `getJobCsvRecords`メソッドは複製せず、そのまま流用しましょう。
  - `streamDownloadCsv`メソッドは複製せず、そのまま流用しましょう。
    - 呼び出す時の`$separator`引数をtab文字にするとTSVになります。  

| URI | HTTP<br>メソッド | 機能・画面コード | 種別 | 機能・画面名 | 備考 |
| --- | --- | --- | --- | --- | --- |
| admin/jobs/tsv | POST   | admin.jobs.tsv   | 機能 | 職業 TSVダウンロード |  |

TSVファイル例（項目間の空白はTab文字であること）

```tsv
ID	名称
100	JOB_0100
99	JOB_0099
98	JOB_0098
97	JOB_0097
96	JOB_0096
  ・
  ・
  ・
```

機能追加が確認できたら、CSVダウンロード機能に影響がないか再度テストしましょう。
