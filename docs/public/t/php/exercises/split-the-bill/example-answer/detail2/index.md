# PHP課題(Split the bill)解答例2 解説

## コード

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

## 参考

- [演算子](./../../../operators/index.md)
- floor
  - <https://www.php.net/manual/ja/function.floor.php>
- array_fill
  - <https://www.php.net/manual/ja/function.array-fill.php>

## ChatGPT解説

このコードは、支払い金額を複数人で分割するためのヘルパークラスです。

- `splitBill` メソッドは、 `$amount`(支払総額) と `$numPeople`(人数) の2つの引数をとり、それらを使って支払い金額の配列を計算します。
- `$perPerson = (int)floor($amount / $numPeople) + 1;` では、与えられた支払総額を人数で割った商に1を加えることで、一人あたりの支払金額を求めています。
  - (`(int)` がキャスト演算子であり、 `floor()` 関数は小数点以下を切り捨てます。)
- `$remainder = $amount % $numPeople;` では、支払い総額を人数で割った余りを求めています。
- `$result = [];` は、後の for ループ内で使う空の配列の初期化です。
- for ループは、0から `$numPeople - 1` まで繰り返され、それぞれのループで下記が実行されます。
  - `$i === $remainder` において、現在の周回数 `$i` が余り `$remainder` と等しいかどうかを確認し、等しい場合は `$perPerson--` を実行します。これは、余りの分だけ支払い金額を1減らすためです。
  - 最後に、 `$result[] = $perPerson;` で配列に支払い金額を追加しています。
- 最後に、forループから抜けて `$result`(支払い金額の配列) を返して処理が終了します。

尚、日本語コメントが含まれている部分はプログラマーにとって理解しやすい記述方法かもしれませんが、他の人とコードを共有する際に言語バリエーションなどが異なる場合には、英語に書き換えた方がよろしいかと思います。
