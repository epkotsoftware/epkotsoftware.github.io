# PHPプログラミング編 課題(median)

## はじめに

よくある処理のため、検索するとすぐ出てきてしまいます。  
「中央値」、「median」などの検索はしないで作りましょう。  

- 使用するもの
  - [関数](./../../functions/index.md)
  - if文
  - [演算子](./../../operators/index.md)
  - [インデックス付き配列](./../../arrays/index.md)
  - 関数
    - count
      - <https://www.php.net/manual/ja/function.count.php>
    - floor
      - <https://www.php.net/manual/ja/function.floor.php>
    - sort
      - <https://www.php.net/manual/ja/function.sort.php>
  - 中央値
    - <https://ja.wikipedia.org/wiki/中央値>

## 課題

数字配列から中央値を返す  
`Math`クラスの`median`メソッドを実装してください。

## 仕様

- クラス名: `Math`
- メソッド名: (static) `median`
- パラメータ(引数): (array)`$numbers` - 数値配列
- 戻り値: (mixed)中央値

```php
class Math
{
    public static function median(array $numbers)
    {
        // TODO: ここに処理を書きます。
    }
}
```

実行例

```php
// 実行
$result = \Math::median([20, 30, 10]);
var_dump($result); // 20
```

### 引数($numbers)

数値（int or double）の配列  
数値の順序については保証されません。

### 戻り値

中央値を返してください。  

- 引数が空配列（[]）の場合、nullを返す。
- データ数が奇数の場合、中央順位の値を返す。
- データ数が偶数の場合、中央順位2個の値の平均値を返す。

#### 中央値とは

```txt
出典: フリー百科事典『ウィキペディア（Wikipedia）』
中央値（ちゅうおうち、英: median）あるいはメジアン、メディアンとは、データや集合の代表値の一つで、
順位が中央である値のことである。ただし、データの大きさが偶数の場合は、中央順位2個の値の算術平均をとる。

例えば5人の年齢10歳、32歳、96歳、100歳、105歳からなるデータの中央値は、順位が上からも下からも3である96（歳）となる。
0歳の子供が2人増えて7人になると、中央値は32歳となる。
```

- 中央値
  - <https://ja.wikipedia.org/wiki/中央値>

## 補足

- 完成時にメソッド内で `echo`、`var_dump`、`var_export`が残っていないことを確認しましょう。
- クラス内にprivateメソッドを追加しても問題ありません。
- 未使用変数・関数は削除しましょう。

## テストコード付きサンプル

テストコード付きのサンプルです。  
Helperクラス内を実装しましょう。

```php
<?php
// クラス・メソッド
class Math
{
    public static function median(array $numbers)
    {
        // TODO: ここに処理を書きます。
    }
}

// ↓↓↓テストケース（code=実行コード  expected=期待結果）
$cases = [
    ['code' => '\Math::median([])', 'expected' => null],
    ['code' => '\Math::median([123])', 'expected' => 123],
    ['code' => '\Math::median([20, 60])', 'expected' => 40],
    ['code' => '\Math::median([60, 20])', 'expected' => 40],
    ['code' => '\Math::median([10, 20, 30])', 'expected' => 20],
    ['code' => '\Math::median([20, 30, 10])', 'expected' => 20],
    ['code' => '\Math::median([1, 2, 3, 4, 5, 6])', 'expected' => 3.5],
    ['code' => '\Math::median([2, 1, 6, 3, 4, 5])', 'expected' => 3.5],
    ['code' => '\Math::median([11.1, 22.1, 33.1, 44.1, 55.1, 66.1, 77.1])', 'expected' => 44.1],
    ['code' => '\Math::median([77.1, 11.1, 44.1, 22.1, 33.1, 55.1, 66.1])', 'expected' => 44.1],
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
