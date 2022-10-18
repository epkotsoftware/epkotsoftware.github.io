# PHP試験

## インデックス

| No. |  |
| --- | --- |
| 1 | [試験](#試験) |
| 2 | [参考資料](#参考資料) |

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
担当者まで、お送りください。

```txt
△△△ = 
××× = 
□□□ = 
```

## 参考資料

- [名前空間の学習](./namespaces/index.md)（弊社研修資料の一部）
