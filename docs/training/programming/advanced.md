# プログラミング編 応用

PHPをベースに解説します。  

## 命名

### 定数名

- アッパースネークケースとする、一般的なコーディング規約に利用されるPSR-1(PSR-12に内包)のルール
  - 例: `EXAMPLE_VALUE`
  - [PSR-1](https://www.php-fig.org/psr/psr-1/#41-constants) 参照

### 変数・引数名

- キャメルケース(先頭小文字、単語の先頭大文字)を用いる事が多い
  - 例: `$exampleValue`
- 配列の場合、複数であることがわかる名称にする。
  - 例
    - 複数形にする （参考: [英語【名詞の複数形】作り方※8つのルール・不規則変化と例外](https://english-club.jp/blog/english-noun-plural/)）
    - 単数形 + Array
    - 単数形 + List

以下は変数名の例です。

```php
// PHP
// ユーザーテーブルのレコード(連想配列)配列なので複数形の users を変数名とする。
$users = [
    ['id' => 101, 'name' => 'taylor'],
    ['id' => 102, 'name' => 'abigail'],
];

// レコード配列から1レコードとるので、単数形の user を変数名とする。
$user = $users[0];

// userレコードのnameを取得するので userName を変数名とする。
$userName = $user['name'];
```

```php
// PHP
// ユーザーテーブルのレコード(連想配列)配列
$users = [
    ['id' => 101, 'name' => 'taylor'],
    ['id' => 102, 'name' => 'abigail'],
];

// 配列から添え字をとるので、プログラミングで一般的である i (Index, Integer等の頭文字)を変数名とする。
// レコード配列から1レコードずつとるので、単数形の user を変数名とする。
foreach ($users as $i => $user) {
    // 処理
}
```

```php
// PHP
// product_idをキーとする連想配列（LaravelのCollectionで keyBy を使った場合、このような配列が出来る）
$products = [
    'prod-100' => ['product_id' => 'prod-100', 'name' => 'Desk'],
    'prod-200' => ['product_id' => 'prod-200', 'name' => 'Chair'],
];

// 今回のproducts連想配列変数は product_id をキーとしているので、productId を変数名とする。
foreach ($products as $productId => $product) {
    // 処理
}
```

### メソッド名

- キャメルケースとする(PSR-1ルール)
  - 例: `createUser`
  - [PSR-1](https://www.php-fig.org/psr/psr-1/#43-methods) 参照
- codic (メソッド名自動生成)
  - <https://codic.jp/engine>
- うまくメソッド名を付けるための参考情報
  - <https://qiita.com/KeithYokoma/items/2193cf79ba76563e3db6>

## 多次元配列を使う

APIを使用して際に結果を多次元配列で受け取るケースが多いです。  
また、データベースからレコード配列を取得することがあり、これも多次元配列になります。  

- 動画
  - PHPの多次元連想配列徹底攻略【PHPによるWebアプリケーション開発講座#ex1】
    - <https://youtu.be/PDG7tD2FZrc>

以下、レコード配列のイメージです。

```php
// PHP
// レコード配列
$records = [
    ['id' => 101, 'name' => 'NAME01'],
    ['id' => 102, 'name' => 'NAME02'],
    ['id' => 103, 'name' => 'NAME03'],
];
```

上記の場合、変数 `records` は連想配列と思われがちですが  
実際は連想配列の配列になります。  
以下のように一つ一つ分解するとわかりやすいです。  
変数 `records` は上記と同一の内容になります。

```php
// PHP

// レコード (連想配列)
$record1 = ['id' => 101, 'name' => 'NAME01'];
$record2 = ['id' => 102, 'name' => 'NAME02'];
$record3 = ['id' => 103, 'name' => 'NAME03'];

// レコード配列 (連想配列を要素に持つ配列)
$records = [
    $record1,
    $record2,
    $record3,
];
```

上記のレコード配列からid値配列を作る関数の例です。

```php
function pluckId(array $recs): array
{
    // ids配列(空配列)
    $ids = [];

    // recs の要素数分ループ、rec変数にはレコード(連想配列)が入る
    foreach ($recs as $rec) {
        // レコード(連想配列)のキー'id' の値を取り出し、ids配列に追加
        $ids[] = $rec['id'];
    }

    // ids配列を戻り値として返す
    return $ids;
}

// pluckId 関数を使う
$result = pluckId($records);
var_dump($result); // [101, 102, 103]
```

## 静的メソッドを定義する

クラスに所属する関数をメソッドと呼びます。  
2022年現在では関数を直接定義することは稀で  
基本的にはメソッドを定義することが多いです。  

例えば以下の関数の場合

```php
<?php

function subtract(int $num1, int $num2): int
{
    return $num1 - $num2;
}
```

クラスに定義する場合は以下のようになります。  
インスタンス(オブジェクト)を生成する必要がないので static で定義します。
※ 例としてクラス名は「MyMath」、名前空間は「App\Support」としています。

```php
<?php

namespace App\Support;

class MyMath
{
    /**
     * 引数の差分を返します。
     * ※ 静的呼び出しが出来るように static で定義しています。
     *
     * @param int $num1
     * @param int $num2
     * @return int
     */
    public static function subtract(int $num1, int $num2): int
    {
        return $num1 - $num2;
    }
}
```

上記のメソッドを使用する場合は以下のように行います。

```php
<?php
// オートローダーを導入していない場合、require_onceで使用するPHPファイルを読み込む必要がある。
// require_once('MyMath.php');

namespace App\Http\Controllers;

use App\Support\MyMath;

class XxxController
{
    public function index()
    {
        // スコープ定義演算子「::」を使いメソッドにアクセス
        $result = MyMath::subtract(3, 1);
        var_dump($result);
    }
}
```

## メソッドの切り出し

1メソッドの行数はコメントを含めて20行以下にするのが望ましいと言われています。  
以下は、既に出来上がっている `ExampleService::getJpTitles($releaseList)` メソッドですが  
20行を超えており処理が見難いため、メソッドの切り出しを検討します。

```php
<?php

namespace App\Services;

class ExampleService
{
    public static function getJpTitlesTest()
    {
        // DDEX NewReleaseMessage フォーマットを参考に配列を作成しています。
        // 実際の構成をシンプルにし、一部変更しています。
        //   参考: http://service.ddex.net/dd/ERN38/dd/ern_ReleaseList.html

        // ReleaseList
        $releaseList = [
            [
                'ReleaseId' => 101,
                'DetailsByTerritory' => [
                    [
                        'TerritoryCode' => 'Worldwide',
                        'Titles' => [
                            [
                                'LanguageAndScriptCode' => 'en',
                                'TitleText' => 'Title101',
                            ],
                        ],
                    ],
                    [
                        'TerritoryCode' => 'JP',
                        'Titles' => [
                            [
                                'LanguageAndScriptCode' => 'en',
                                'TitleText' => 'Title101',
                            ],
                            [
                                'LanguageAndScriptCode' => 'ja-Jpan',
                                'TitleText' => 'タイトル101',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'ReleaseId' => 102,
                'DetailsByTerritory' => [], // ※ DetailsByTerritory を省略
            ],
        ];

        $jpTitles = self::getJpTitles($releaseList);
        var_dump($jpTitles);
    }

    /**
     * ReleaseList からRelease毎に TerritoryCode=JP, LanguageAndScriptCode=ja-Jpan のタイトル配列を取得する。
     * 存在しない場合はブランク(空文字列)をタイトルとして格納する。
     *
     * @param array $releaseList ReleaseList
     * @return array
     */
    public static function getJpTitles(array $releaseList): array
    {
        $jpTitles = [];
        // ReleaseList
        foreach ($releaseList as $release) {
            $titleText = null;
            // ReleaseList/Release/DetailsByTerritory
            foreach ($release['DetailsByTerritory'] as $detail) {
                if ($detail['TerritoryCode'] === 'JP') {
                    // ReleaseList/Release/DetailsByTerritory/Detail/Titles
                    foreach ($detail['Titles'] as $title) {
                        if ($title['LanguageAndScriptCode'] === 'ja-Jpan') {
                            $titleText = $title['TitleText'];
                            // Titlesのループを抜ける
                            break;
                        }
                    }
                    // DetailsByTerritoryのループを抜ける
                    break;
                }
            }
            // TitleText が見つからなかった場合、ブランクにする。
            $jpTitles[] = $titleText ?? '';
        }
        return $jpTitles;
    }
}
```

上記の悪い点としては、foreach・if のネストが深く  
ループを抜けるためのbreakも数か所使われていて処理が追いにくくなっています。  
`getJpTitles` の一部処理を `getJpTitle` に切り出してみましょう。

```php
    public static function getJpTitles(array $releaseList): array
    {
        $jpTitles = [];
        // ReleaseList/Release
        foreach ($releaseList as $release) {
            // ループ内のTitleText取得処理を getJpTitle メソッドに切り出し
            $jpTitles[] = self::getJpTitle($release);
        }
        return $jpTitles;
    }

    /**
     * Releaseから TerritoryCode=JP, LanguageAndScriptCode=ja-Jpan のタイトルを取得する。
     * 存在しない場合はブランク(空文字列)を返す。
     * ※ 外部で使用しない想定のため private で定義
     *
     * @param array $release ReleaseList/Release
     * @return string
     */
    private static function getJpTitle(array $release): string
    {
        // ReleaseList/Release/DetailsByTerritory
        foreach ($release['DetailsByTerritory'] as $releaseDetail) {
            if ($releaseDetail['TerritoryCode'] === 'JP') {
                // ReleaseList/Release/DetailsByTerritory/Detail/Titles
                foreach ($releaseDetail['Titles'] as $title) {
                    if ($title['LanguageAndScriptCode'] === 'ja-Jpan') {
                        // 対象の TitleText が見つかったので返す。
                        return $title['TitleText'];
                    }
                }
                // TitleText が見つからなかった場合、ブランクを返す。
                return '';
            }
        }
        // TitleText が見つからなかった場合、ブランクを返す。
        return '';
    }
```

`getJpTitles` メソッドの処理全体が見やすくなり  
`getJpTitle` に切り出した事により、 `return` で `TitleText` を返せるようになったため  
`break`を使って処理を抜ける必要がなくなりました。  
これだけで十分そうですが、更に`getJpTitle`の処理を切り出してみましょう。  

```php
    private static function getJpTitle(array $release): string
    {
        // ReleaseList/Release/DetailsByTerritory/Detail
        $releaseDetail = self::getJpDetail($release);
        if ($releaseDetail === null) {
            // Detail が見つからなかった場合、ブランクを返す。
            return '';
        }

        // ReleaseList/Release/DetailsByTerritory/Detail/Titles
        foreach ($releaseDetail['Titles'] as $title) {
            if ($title['LanguageAndScriptCode'] === 'ja-Jpan') {
                // 対象の TitleText が見つかったので返す。
                return $title['TitleText'];
            }
        }

        // TitleText が見つからなかった場合、ブランクを返す。
        return '';
    }

    /**
     * Releaseから TerritoryCode=JP のDetailを取得する。
     * 存在しない場合はnullを返す。
     * ※ 外部で使用しない想定のため private で定義
     *
     * @param array $release ReleaseList/Release
     * @return array|null
     */
    private static function getJpDetail(array $release): ?array
    {
        // ReleaseList/Release/DetailsByTerritory
        foreach ($release['DetailsByTerritory'] as $releaseDetail) {
            if ($releaseDetail['TerritoryCode'] === 'JP') {
                return $releaseDetail;
            }
        }
        // 見つからなかった場合、nullを返す。
        return null;
    }
```

Detail取得を`getJpDetail` に切り出した事により、 `foreach` のネストが浅くなりましたが  
Detailが取得できなかった時の処理が必要になったため、逆にコードが肥大化してしまいました。  

ただ、切り出した利点があり `getJpDetail` は他の機能でも使える可能性があることです。  
今回はタイトルをとっていますが、例えばリリース日等の詳細情報を別機能で取得する場合  
今回のように`TerritoryCode=JP`のDetailを使用することになります。  
`getJpDetail`メソッドを他の機能からも使えるように共通クラスに定義しておけば手間が省けます。  

メソッド切り出しのコツは、プログラミングをしている時に  
「こういうメソッドがあったらいいのに」と考えることです。  

## 現場で経験した機能

### AWS SDK for PHP

基礎をフル活用する実業務であった例としては「`AWS SDK for PHP`」の `Aws\Ec2\Ec2Client` クラスの  
`describeInstances` メソッドを使って、複数あるEC2サーバー情報・状態を取得し、表示するという処理を行ったことがあります。  
公式ページでAPI仕様を理解すること、「`foreach`」、「`if`」、関数、文字列連結、配列、連想配列、例外処理等の基礎的なプログラミング知識がないと実装出来ない内容になります。  

- Amazon EC2
  - <https://aws.amazon.com/jp/ec2/>
- Ec2Client DescribeInstances
  - <https://docs.aws.amazon.com/aws-sdk-php/v3/api/api-ec2-2016-11-15.html#describeinstances>
  - APIを使用する場合、「Result Syntax」に書かれているような階層の深い配列を処理する必要があります。

APIを使う場合、非同期処理（同時に複数処理を動かす）が求められる事もあります。  
実際にはAWSの大量のS3オブジェクトに対して、非同期処理を使いタグ付けするという処理を行ったことがあります。  

- Amazon S3
  - <https://aws.amazon.com/jp/s3/>
- Promises in the AWS SDK for PHP Version 3
  - <https://docs.aws.amazon.com/sdk-for-php/v3/developer-guide/guide_promises.html>
- 非同期処理とは何か？【超入門編/JavaScript/プログラミング】
  - <https://youtu.be/OBqj4I5NAEg>
