# PHP課題(Split the bill)解答例

## AIに最適化してもらう

まず、自身の解答をAIにチェックしてもらいましょう。
下記のメッセージの後に、適度に改行を入れて作成したコードを貼り付けてください。

```txt
以下のPHPコードを最適化し、PSR-12形式に修正してください。
```

- [AI（初めての利用の場合、こちらを参照）](./../../../../../../ai/index.md)
- ChatGPT
  - <https://chat.openai.com/chat>
- BingAI（Microsoft Edge）
  - <https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx>

## 例1

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

- [解説](./detail1/index.md)

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

- [解説](./detail2/index.md)
