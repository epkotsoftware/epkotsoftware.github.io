# PHP試験

## インデックス

| No. |  |
| --- | --- |
| 1 | [試験](#試験) |
| 2 | [参考資料](#参考資料) |

## 試験

以下のようにProductクラスを使用する場合  
Productクラス定義の「`△△△`」、「`×××`」、「`□□□`」に入るものを答えて下さい。

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

## 参考資料

- [名前空間の学習](./namespaces/index.md)（弊社研修資料の一部）
