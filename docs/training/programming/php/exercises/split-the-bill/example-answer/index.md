# 株式会社エプコットソフトウェア ～ PHPプログラミング編 課題(Split the bill)解答例

## 例

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

- [演算子](./../../../operators/index.md)
- floor
  - <https://www.php.net/manual/ja/function.floor.php>
- array_fill
  - <https://www.php.net/manual/ja/function.array-fill.php>

## 例2

```php
// クラス・メソッド
class PaymentHelper
{
    public static function splitBill(int $amount, int $numPeople): array
    {
        $perPerson = (int)floor($amount / $numPeople) + 1; // 支払い金額を算出し +1（余り追加）
        $remainder = $amount % $numPeople; // 余りを求める

        $result = []; // 空配列
        for ($i = 0; $i < $numPeople; $i++) {
            if ($i === $remainder) {
                $perPerson--; // 余りがなくなったら -1
            }
            $result[] = $perPerson; // 支払い金額を配列に追加
        }
        return $result;
    }
}
```
