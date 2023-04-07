# PHP課題(Split the bill)解答例1 解説

## コード

```php
<?php
// クラス・メソッド
class PaymentHelper
{
    public static function splitBill(int $amount, int $numPeople): array
    {
        $perPerson = (int)floor($amount / $numPeople); // 支払い金額を算出
        $remainder = $amount % $numPeople; // 余りを求める
        $result = array_fill(0, $numPeople, $perPerson); // 支払い金額を要素として持った、人数分の配列
        // 余りを分配
        for ($i = 0; $i < $remainder; $i++) {
            $result[$i]++; // 支払い金額に 1 追加
        }
        return $result;
    }
}
```

## 参考

- [演算子](./../../../operators/index.md)
- floor
  - <https://www.php.net/manual/ja/function.floor.php>
- array_fill
  - <https://www.php.net/manual/ja/function.array-fill.php>

## ChatGPT解説

このコードは、支払い金額を複数人で分割するための支援クラス `PaymentHelper` を定義しています。このクラスには、`splitBill()` という名前のメソッドがあります。

```php
public static function splitBill(int $amount, int $numPeople): array
```

このメソッドは、2つの引数 `$amount` と `$numPeople` を受け取ります。`$amount` は支払い金額を表し、`$numPeople` はその金額を分割する人数を表します。メソッドの戻り値は配列です。

```php
$perPerson = (int)floor($amount / $numPeople); // 支払い金額を算出
$remainder = $amount % $numPeople; // 余りを求める
$result = array_fill(0, $numPeople, $perPerson); // 支払い金額を要素として持った、人数分の配列
```

このメソッドでは、まず支払い金額を人数で割って、一人あたりの支払い金額を計算しています。次に、支払い金額を要素として持った、人数分の配列を作成します。ここで使用されている `array_fill()` 関数は、指定された値（ここでは `$perPerson`）で配列を埋めます。

```php
for ($i = 0; $i < $remainder; $i++) {
    $result[$i]++; // 支払い金額に 1 追加
}
```

最後に、余りを分配しています。余りがある場合、配列の先頭から順番に一人ずつ余りを配分し、支払い金額に 1 追加します。

以上がこのコードの概要です。このクラスの `splitBill()` メソッドは、支払い金額を複数人で分割する処理を行う実用的なメソッドです。
