# PHP試験

## インデックス

| No. |  |
| --- | --- |
| 1 | [参考資料](#参考資料) |
| 2 | [試験](#試験) |
| 3 | [提出について](#提出について) |

## 参考資料

学習用のリンクです。

- [PHP名前空間の学習](./namespaces/index.md)（EPKOT研修資料の一部）

## 試験

Product クラスを以下のように使うためには、
どのようにProduct クラスを定義するべきか答えなさい。

---

Productクラス使用例

```php
<?php

namespace App\Controllers;

use App\Product;

class ProductController
{
    function index()
    {
        Product::first();
    }
}
```

---

Productクラス定義

```php
<?php

namespace △△△;

class ×××
{
    public function static □□□()
    {
        // 処理
    }
}
```

---

## 提出について

以下に解答を入力し、メール本文に記載の上  
担当者まで、ご送付ください。

```txt
△△△ = 
××× = 
□□□ = 
```
