# 株式会社エプコットソフトウェア ～ PHPプログラミング編 課題(Amazon S3)

## はじめに

- 使用するもの
  - [関数](./../../functions/index.md)
  - [配列](./../../arrays/index.md)
  - [ループ](./../../loops/index.md)

## 課題

「AWS SDK for PHP」の`\Aws\S3\S3Client::listObjectsV2`メソッドのレスポンス情報から  
`Contents[].Key`情報を取得し、配列で返すクラス・メソッドを実装してください。

- `ListObjectsV2 - AWS SDK for PHP リファレンス - ListObjectsV2`
  - <https://docs.aws.amazon.com/aws-sdk-php/v3/api/api-s3-2006-03-01.html#listobjectsv2>
- `aws/aws-sdk-php: Official repository of the AWS SDK for PHP (@awsforphp)`
  - <https://github.com/aws/aws-sdk-php>

## 仕様

- クラス名: `S3Helper`
- メソッド名: (static) `extractKeysFromListObjectsV2Response`
- パラメータ(引数):
  - (array)`$listObjectsV2Response` - ListObjectsV2 レスポンス情報
- 戻り値: (array)`ListObjectsV2レスポンス.Contents[].Key`配列（文字列配列）

実行例

```php
// 引数
$res = [
    'IsTruncated' => false,
    'Contents' => [
        ['ETag' => 'xxxxxxx', 'Key' => '1.txt'],
        ['ETag' => 'xxxxxxx', 'Key' => '2.txt'],
        ['ETag' => 'xxxxxxx', 'Key' => '3.txt'],
    ],
    'Name' => 'test',
    // NOTE: その他メンバーは省略
];
// 実行
$result = S3Helper::extractKeysFromListObjectsV2Response($res);
var_export($result); // array ( 0 => '1.txt', 1 => '2.txt', 2 => '3.txt', )
```

### 引数($listObjectsV2Response)

ListObjectsV2 レスポンス情報です。  
詳細についてはリファレンスの「Result Syntax」、「Result Details」を参照してください。  
型は実際には`\Aws\Result`クラスになりますが、配列（array）型とします。  
Contentsの最大件数は1000件までとします。  

- `ListObjectsV2 - AWS SDK for PHP リファレンス - ListObjectsV2`
  - <https://docs.aws.amazon.com/aws-sdk-php/v3/api/api-s3-2006-03-01.html#listobjectsv2>

### 戻り値

ListObjectsV2 レスポンス情報の  
`Contents[].Key` を配列にまとめて返します。

- Contentsがない場合は、空配列を返してください。

## 補足

- 完成時にメソッド内で `echo`、`var_dump`、`var_export`が残っていないことを確認しましょう。
- クラス内にprivateメソッドを追加しても問題ありません。
- 未使用変数・関数は削除しましょう。

## テストコード付きサンプル

テストコード付きのサンプルです。  
「`TODO: ここにクラスを書きます。`」コメントの所に実装しましょう。

```php
<?php
// クラス・メソッド
// TODO: ここにクラスを書きます。

// ↓↓↓テストケース（code=実行コード  expected=期待結果）
$cases = [
    ['code' => '\S3Helper::extractKeysFromListObjectsV2Response([])', 'expected' => []],
    ['code' => '\S3Helper::extractKeysFromListObjectsV2Response(["IsTruncated" => false, "Name" => "x"])', 'expected' => []],
    [
        'code' => '\S3Helper::extractKeysFromListObjectsV2Response(["Contents" => [["Key" => "1.txt"]]])',
        'expected' => ['1.txt'],
    ],
    [
        'code' => '\S3Helper::extractKeysFromListObjectsV2Response(["Contents" => [["Key" => "1.txt"], ["Key" => "2.txt"], ["Key" => "3.txt"]]])',
        'expected' => ['1.txt', '2.txt', '3.txt'],
    ],
    [
        'code' => '\S3Helper::extractKeysFromListObjectsV2Response(["IsTruncated" => false, "Contents" => [["ETag" => "x", "Key" => "1.txt"], ["ETag" => "x", "Key" => "2.txt"], ["ETag" => "x", "Key" => "3.txt"]], "Name" => "x"])',
        'expected' => ['1.txt', '2.txt', '3.txt'],
    ],
];
// ↑↑↑テストケース
// ↓↓↓テスト用クラス
class PhpFunctionTest
{
    public static function executeCasesToHtmlTable(array $cases): string
    {
        $executedCases = self::executeCases($cases);
        $trInnerHtmlList = [];
        foreach ($executedCases as $executedCase) {
            $trInnerHtmlList[] = '<td>' . implode('</td><td>', [
                htmlspecialchars($executedCase['code']),
                htmlspecialchars($executedCase['expected']),
                htmlspecialchars($executedCase['actual']),
                $executedCase['result'] === 'OK' ? '<span class="ok">OK</span>' : '<span class="ng">NG</span>',
            ]) . '</td>';
        }
        $style = '<style>table {border-collapse: collapse;} th, td {padding: 8px; border: 1px solid #000;} td span {border-radius: 8px; padding: 4px; color: #fff} .ok {background-color: #198754;} .ng {background-color: #dc3545;}</style>';
        $tbodyInnerHtml = '<tr>' . implode('</tr><tr>', $trInnerHtmlList) . '</tr>';
        $theadInnerHtml = '<tr><th>実行コード</th><th>期待結果<br />(expected)</th><th>実行結果<br />(actual)</th><th>テスト結果</th></tr>';
        return "{$style}<table><thead>{$theadInnerHtml}</thead><tbody>{$tbodyInnerHtml}</tbody></table>";
    }

    public static function executeCases(array $cases): array
    {
        $executedCases = [];
        foreach ($cases as $i => $case) {
            $actual = null;
            try {
                $actual = self::valueToString(eval('return ' . $case['code'] . ';'));
            } catch (\Throwable $th) {
                $actual = 'エラー: ' . self::valueToString($th);
            }
            $expected = self::valueToString($case['expected']);
            $executedCases['Case' . ($i + 1)] = [
                'code' => $case['code'],
                'expected' => $expected,
                'actual' => $actual,
                'result' => $expected === $actual ? 'OK' : 'NG',
            ];
        }
        return $executedCases;
    }

    private static function valueToString($value): string
    {
        if ($value === null) {
            return 'null';
        } elseif (is_int($value)) {
            return '(int)' . var_export($value, true);
        } elseif (is_bool($value)) {
            return '(bool)' . var_export($value, true);
        }
        return '(' . gettype($value) . ')' . var_export($value, true);
    }
}
// ↑↑↑テスト用クラス
// テストコード実行
echo  PhpFunctionTest::executeCasesToHtmlTable($cases);
```

## プログラムの実行

プログラムの実行については「paiza.io」でも可能です。  
テストコード付きサンプルはHTMLで出力されるので  
「Text」から「HTML」に変更してください。

- `paiza.io`
  - <https://paiza.io/ja/projects/new>

## 解答例

課題が出来たら解答例も見てみましょう。

- [解答例](./example-answer/index.md)
