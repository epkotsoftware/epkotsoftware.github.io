# 株式会社エプコットソフトウェア ～ PHP課題(median) 解答例

## 例1

```php
<?php
// クラス・メソッド
class Math
{
    public static function median(array $numbers)
    {
        $count = count($numbers); // 要素数を取得
        if ($count === 0) {
            return null; // 要素数が0の場合、nullを返す
        }

        $i = (int)floor($count / 2); // 要素数を割る2して、端数を切り捨て
        sort($numbers); // numbersを昇順ソート
        // 要素数の奇数・偶数判定
        if ($count % 2 === 1) {
            // 要素数が奇数
            return $numbers[$i]; // 真ん中の要素を返す
        }
        // 要素数が偶数
        return ($numbers[$i - 1] + $numbers[$i]) / 2; // 真ん中2要素を足して、割る2して返す
    }
}
```

## 奇数・偶数判定方法

簡単に出来るもので2つあります。

- 余剰　〜　2で割って余りがあるかで判定
- ビット積　〜　1とのビット積で判定

### 余剰

```php
if ($value % 2 === 1) {
    // valueが奇数 $value % 2 = 1
} else {
    // valueが偶数 $value % 2 = 0
}
```

```php
if ($value & 1 === 1) {
    // valueが奇数 $value & 1 = 1
} else {
    // valueが偶数 $value & 1 = 0
}
```

| 10進数 | 2進数<br>（4桁の場合） | 16進数 |
| 0 | 0000 | 0 |
| 1 | 0001 | 1 |
| 2 | 0010 | 2 |
| 3 | 0011 | 3 |
| 4 | 0100 | 4 |
| 5 | 0101 | 5 |
| 6 | 0110 | 6 |
| 7 | 0111 | 7 |
| 8 | 1000 | 8 |
| 9 | 1001 | 9 |
| 10 | 1010 | A |
| 11 | 1011 | B |
| 12 | 1100 | C |
| 13 | 1101 | D |
| 14 | 1110 | E |
| 15 | 1111 | F |
