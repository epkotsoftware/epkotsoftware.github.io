# 株式会社エプコットソフトウェア ～ PHP課題(median) 解答例

## 例

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

- count
  - <https://www.php.net/manual/ja/function.count.php>
- floor
  - <https://www.php.net/manual/ja/function.floor.php>
- sort
  - <https://www.php.net/manual/ja/function.sort.php>

## 奇数・偶数判定方法

簡単に出来るもので2つあります。  
処理速度的にはどちらも大きい差はありません（PHP8.1でも確認済み）。

- 余剰　〜　2で割って余りがあるかで判定
- ビット積　〜　1とのビット積で判定

### 余剰

余剰（余り）が1なら奇数、0なら偶数

```php
if ($value % 2 === 1) {
    // valueが奇数 $value % 2 = 1
} else {
    // valueが偶数 $value % 2 = 0
}
```

### ビット積

こちらは無理に覚える必要はありません。  
興味があれば学習しましょう。  

1とのビット積が1なら奇数、0なら偶数

```php
if ($value & 1 === 1) {
    // valueが奇数 $value & 1 = 1
} else {
    // valueが偶数 $value & 1 = 0
}
```

- 整数
  - <https://www.php.net/manual/ja/language.types.integer.php>
- ビット演算子
  - <https://www.php.net/manual/ja/language.operators.bitwise.php>

#### ビット積の例

ビット積は2進数で算出します。  

```php
<?php
// 1110  ← 10進数だと 15（奇数）
// 0001  ← 10進数だと 1
//  ↓ ビット積（縦に見て両方1だったら1）
// 0001  ← 10進数だと 1

$value1 = 15; // 0b1111 でもOK
$value2 = 1; // 0b0001 でもOK

var_dump($value1 & $value2);
// int(1)
```

```php
<?php
// 1110  ← 10進数だと 14（偶数）
// 0001  ← 10進数だと 1
//  ↓ ビット積（縦に見て両方1だったら1）
// 0000  ← 10進数だと 0

$value1 = 14; // 0b1110 でもOK
$value2 = 1; // 0b0001 でもOK

var_dump($value1 & $value2);
// int(0)
```

今回の課題とは関係ありませんが  
10進数の10と6のビット積を求めてみましょう。

```php
<?php
// 1010  ← 10進数だと 10
// 0110  ← 10進数だと 6
//  ↓ ビット積（縦に見て両方1だったら1）
// 0010  ← 10進数だと 2

$value1 = 10; // 0b1010 でもOK
$value2 = 6; // 0b0110 でもOK

var_dump($value1 & $value2);
// int(2)
```

#### 一覧

| 10進数 | 2進数 | 16進数 | 備考 |
| 0 | 0000 | 0 |  |
| 1 | 0001 | 1 |  |
| 2 | 0010 | 2 | 2進数では2桁になる |
| 3 | 0011 | 3 |  |
| 4 | 0100 | 4 |  |
| 5 | 0101 | 5 |  |
| 6 | 0110 | 6 |  |
| 7 | 0111 | 7 |  |
| 8 | 1000 | 8 |  |
| 9 | 1001 | 9 |  |
| 10 | 1010 | A |  |
| 11 | 1011 | B |  |
| 12 | 1100 | C |  |
| 13 | 1101 | D |  |
| 14 | 1110 | E |  |
| 15 | 1111 | F |  |
| 16 | 0001 0000 | 10 | 16進数では2桁になる |
| 255 | 1111 1111 | FF | 8bit最大値 |
| 65535 | 1111 1111 1111 1111 | FFFF | 16bit最大値 |
| 16777215 | 1111 1111 1111 1111 1111 1111 | FFFFFF | 24bit最大値 |
