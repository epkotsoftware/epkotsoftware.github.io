# 株式会社エプコットソフトウェア ～ PHPプログラミング編 課題(Split the bill)

## はじめに

- 使用するもの
  - [関数](./../../functions/index.md)
  - [演算子](./../../operators/index.md)
  - [インデックス付き配列](./../../arrays/index.md)
  - [ループ](./../../loops/index.md)
  - 関数
    - floor
      - <https://www.php.net/manual/ja/function.floor.php>

## 課題

指定した金額を指定した人数で  
割り勘するメソッドを実装してください。

## 仕様

- クラス名: `PaymentHelper`
- メソッド名: (static) `splitBill`
- パラメータ(引数):
  - (int)`$amount` - 金額
  - (int)`$numPeople` - 人数
- 戻り値: (array)金額配列（int型の配列）

実行例

```php
// 実行 3300 を 3人で割り勘　→　それぞれ 1100 ずつ
$result = \PaymentHelper::splitBill(3300, 3);
var_export($result); // array ( 0 => 1100, 1 => 1100, 2 => 1100, )
```

```php
// 実行 3302 を 3人で割り勘　→　2人は 1101、1人は 1100
$result = \PaymentHelper::splitBill(3302, 3);
var_export($result); // array ( 0 => 1101, 1 => 1101, 2 => 1100, )
```

### 引数($amount)

支払う金額です。  
int型で必ず1以上の値が指定されます。

### 引数($numPeople)

割り勘する人数です。  
int型で必ず1以上の値が指定されます。

### 戻り値

金額をint型配列で返します。  
余りが出た場合、1円ずつ分配していきます。

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
    ['code' => '\PaymentHelper::splitBill(1, 1)', 'expected' => [1]],
    ['code' => '\PaymentHelper::splitBill(2, 1)', 'expected' => [2]],
    ['code' => '\PaymentHelper::splitBill(1, 3)', 'expected' => [1, 0, 0]],
    ['code' => '\PaymentHelper::splitBill(5, 2)', 'expected' => [3, 2]],
    ['code' => '\PaymentHelper::splitBill(99, 5)', 'expected' => [20, 20, 20, 20, 19]],
    ['code' => '\PaymentHelper::splitBill(100, 5)', 'expected' => [20, 20, 20, 20, 20]],
    ['code' => '\PaymentHelper::splitBill(101, 5)', 'expected' => [21, 20, 20, 20, 20]],
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
