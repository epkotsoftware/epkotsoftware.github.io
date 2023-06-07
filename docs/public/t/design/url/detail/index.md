# URL設計詳細

## はじめに

実務において、全てを理解する必要はありません。  
以下については覚えておきましょう。

- URLとURIはほぼ同じ
- クエリ（引数）
- フラグメント（アンカー）
- パス（絶対パス、ルートパス、相対パス）
- パーセントエンコーディング（URLエンコード）

## URLとURI

呼び方については、WHATWGによってURLに統一する動きもあります。  
※ 文中のIRIはURIを拡張したものです。

```txt
Standardize on the term URL.
URI and IRI are just confusing.
In practice a single algorithm is used for both so keeping them distinct is not helping anyone.
URL also easily wins the search result popularity contest.

URL という用語で標準化する。
URI と IRI は混同され易い。
実際には、どちらに対しても同じアルゴリズムが利用されるので、それらを区別する利点は無い。
Web の検索結果 でも URL の方が優位にある。
```

- URL Standard
  - <https://url.spec.whatwg.org/>
  - 日本語訳
    - <https://triple-underscore.github.io/URL-ja.html>
- 検索キーワードの比較
  - <https://trends.google.com/trends/explore?q=url,uri>

## URI

- 構文：`<scheme>://<host><port><path><query><fragment>`
- 例：`http://localhost:443/admin/index.php?k1=v1&k2=v2#a`

| コンポーネント | 例 | 解説 |
| --- | --- | --- |
| スキーム<br>(scheme) | `https`<br>`http` | 最初のうちは`https`または`http`を使うことを覚えておきましょう。 |
| ホスト<br>(host) | `www.example.com`<br>`localhost`<br>`127.0.0.1` | WebサイトのFQDN（完全修飾ドメイン名）、IPアドレスを記述します。<br>サーバー名or住所を記述すると覚えておきましょう。<br>開発時は「`localhost`」や「`127.0.0.1`」をよく使います。 |
| ポート<br>(port) | `:443`<br>`:80` | 【省略可】`:`の後ろにポート番号を記述します。<br>HTTPSは443、HTTPは80が標準ポートになり省略可能になっています。<br>それ以外のポートを使う場合に必須です。 |
| パス<br>(path) | `/admin/index.php` | 対象へのルートパス（`/`から始める）を記述します。 |
| クエリ<br>(query) | `?k1=v1&k2=v2` | 【省略可】引数(Parameters)とも呼ばれます。<br>`?`の後ろにクエリを記述します。<br>クエリはKeyとValueのペアを`&`で区切ることで複数のパラメータを設定できます。<br>用途としては、検索ワードやページ番号などのユーザーに見られても問題ない情報を設定します。 |
| フラグメント<br>(fragment) | `#a` | 【省略可】アンカー(Anchor)とも呼ばれます。<br>`#`の後ろにフラグメントを記述します。<br>主にページ内リンクなどに使われます。 |

### 例

URIの例です。  
**※表は横スクロールができます。**

| URI | Scheme | Host | Port | Path | Query | Fragment |
| --- | --- | --- | --- | --- | --- | --- |
| `https://www.example.com` | `https` | `www.example.com` | - | - | - | - |
| `http://localhost` | `http` | `localhost` | - | - | - | - |
| <https://www.google.com/search?q=url+uri&tbm=isch> | `https` | `www.google.com` | - | `/search` | `q=url+uri&tbm=isch` | - |
| <https://epkotsoftware.github.io/training/design/url/#パス> | `https` | `epkotsoftware.github.io` | - | `/training/design/url/` | - | `パス` |
| `https://www.example.com:8080/admin/index.php?key1=value1&key2=value2#contents` | `https` | `www.example.com` | `8080` | `/admin/index.php` | `key1=value1&key2=value2` | `contents` |

JavaScriptの[URL API](https://developer.mozilla.org/ja/docs/Web/API/URL_API)で生成したオブジェクトを  
`console.log`で出力すると構成がわかりやすいです。

```js
const uri = 'https://www.example.com:8080/admin/index.php?key1=value1&key2=value2#contents';

console.log(new URL(uri));
// URL {
//   href: 'https://www.example.com/admin/index.php?key1=value1&key2=value2#contents',
//   origin: 'https://www.example.com',
//   protocol: 'https:',
//   username: '',
//   password: '',
//   host: 'www.example.com',
//   hostname: 'www.example.com',
//   port: '8080',
//   pathname: '/admin/index.php',
//   search: '?key1=value1&key2=value2',
//   searchParams: URLSearchParams { 'key1' => 'value1', 'key2' => 'value2' },
//   hash: '#contents'
// }
```

## パーセントエンコーディング

クエリ・フラグメントなどで  
URIに使用できない文字を使うにはパーセントエンコーディングを行います。  
URLエンコードとも呼ばれます。  

例えば以下の様に変換されます（暗記する必要なし）。

| 文字 | パーセントエンコーディング |
| :---: | :---: |
| `#` | `%23` |
| `%` | `%25` |
| `&` | `%26` |
| `<` | `%3C` |
| `=` | `%3D` |
| `>` | `%3E` |
| `?` | `%3F` |
| `あ` | `%E3%81%82` |
| `ん` | `%E3%82%93` |
| `ア` | `%E3%82%A2` |
| `ン` | `%E3%83%B3` |

翻訳のように、Web上で変換してくれるサイトもあります。

- URLエンコード・デコード
  - <https://tech-unlimited.com/urlencode.html>

### エンコード・デコード

URLエンコードに限らず、エンコード・デコードという言葉が出てきます。  
違いについては覚えておきましょう。

| 用語 | 解説 |
| --- | --- |
| エンコード<br>（符号化） | ある形式に変換する |
| デコード<br>（復号※） | エンコードされたものを元の形式に戻す |

※ 復号には「化」はつかない

### プログラミング言語でのエンコーディング方法

以下の関数が用意されています。  
利用する際は、公式サイトの説明を読んだ上でご利用ください。

- JavaScript
  - [encodeURIComponent](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
  - [decodeURIComponent](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)

```js
const value = 'パス';

const encodedValue = encodeURIComponent(value);
const decodedValue = decodeURIComponent(encodedValue);

console.log({value, encodedValue, decodedValue});
// { value: 'パス', encodedValue: '%E3%83%91%E3%82%B9', decodedValue: 'パス' }
```

クエリを生成する場合、URLSearchParamsも使えます。

- JavaScript
  - [URLSearchParams](https://developer.mozilla.org/ja/docs/Web/API/URLSearchParams)

```js
const params = {'k1': 'パス', 'k2': '<value>'};

const urlSearchParams = new URLSearchParams(params);

console.log(urlSearchParams.toString());
// k1=%E3%83%91%E3%82%B9&k2=%3Cvalue%3E
```

- PHP
  - [rawurlencode](https://www.php.net/manual/ja/function.rawurlencode.php)
  - [rawurldecode](https://www.php.net/manual/ja/function.rawurldecode.php)

```php
<?php

$value = 'パス';

$encodedValue = rawurlencode($value);
$decodedValue = rawurldecode($encodedValue);

var_export(compact('value', 'encodedValue', 'decodedValue'));
// array (
//   'value' => 'パス',
//   'encodedValue' => '%E3%83%91%E3%82%B9',
//   'decodedValue' => 'パス',
// )
```

## クリーンURL

Laravelを使っている場合、意識する必要はほとんどありませんが  
HTMLファイルを使った静的サイトや、フレームワークを使わないPHPの場合  
意識するようにしましょう。

- `Clean URL - Wikipedia`
  - <https://en.wikipedia.org/wiki/Clean_URL>

| Original URL | Clean URL |
| --- | --- |
| `http://example.com/about.html` | `http://example.com/about` |
| `http://example.com/user.php?id=1` | `http://example.com/user/1` |
| `http://example.com/index.php?page=name` | `http://example.com/name` |
| `http://example.com/kb/index.php?cat=1&id=23` | `http://example.com/kb/1/23` |
| <http://en.wikipedia.org/w/index.php?title=Clean_URL> | <http://en.wikipedia.org/wiki/Clean_URL> |

### 実現方法

基本的に `xxx.php` や `xxx.html` などのファイル名は見えないようにすると良いでしょう。  
WebサーバーソフトウェアのApacheでは、`index.php` や `index.html` というファイル名であれば省略が可能です。  
よって `/about.html` を `/about/index.html` にすると `/about` でアクセス出来るようになります。  

id等のパラメータをパスに含める方法としてはApacheの `.htaccess` ファイルをうまく使います。  
Apache + PHPの環境を使って以下を作ってみます。  

- `show.php`

```php
<?php
// /users/show.php
$id = $_GET['id'] ?? 'null';
echo "idは {$id} です。";
```

- `.htaccess`

```xml
# /users/.htaccess
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteRule ^([0-9]+)$ show.php?id=$1 [QSA,L]
</IfModule>
```

上記2ファイルを`/users`ディレクトリに格納し、下記のURIでアクセスすると同じページが開けるようになります。  
使うことが少ないため詳細については割愛します、`.htaccess` ファイルを使うとこういうことが出来ると覚えておきましょう。  

- URI
  - `/users/show.php?id=100`
  - `/users/100`
- 結果

```txt
idは 100 です。
```

## 参考

本資料作成に参考にしたページです。

- `Internationalized Resource Identifier - Wikipedia`
  - <https://ja.wikipedia.org/wiki/Internationalized_Resource_Identifier>
- `RFC 1737: Functional Requirements for Uniform Resource Names`
  - <https://www.rfc-editor.org/rfc/rfc1737>
- `RFC 1738: Uniform Resource Locators (URL)`
  - <https://www.rfc-editor.org/rfc/rfc1738>
- `RFC 3986: Uniform Resource Identifier (URI): Generic Syntax`
  - <https://www.rfc-editor.org/rfc/rfc3986>
- `RFC 3987: Internationalized Resource Identifiers (IRIs)`
  - <https://www.rfc-editor.org/rfc/rfc3987>
- `URL とは？ - MDN`
  - <https://developer.mozilla.org/ja/docs/Learn/Common_questions/What_is_a_URL>
- `The Real Difference Between a URL and a URI`
  - <https://danielmiessler.com/study/difference-between-uri-url/>
- `URL Standard`
  - <https://url.spec.whatwg.org/>
- `Laravel 9.x コントローラ　〜　リソースコントローラ`
  - <https://readouble.com/laravel/9.x/ja/controllers.html#resource-controllers>
