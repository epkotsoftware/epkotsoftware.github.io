# 株式会社エプコットソフトウェア ～ URL

## 目次

| No. |  |
| :---: | --- |
| 1 | [はじめに](#はじめに) |
| 2 | [URLとURI](#urlとuri) |
| 3 | [URI](#uri) |
| 4 | [パス](#パス) |

## はじめに

- URLとURIはほぼ同じものと覚えておく
- クエリ（引数）について理解しておく
- フラグメント（アンカー）について理解しておく
- パスについて理解しておく

## URLとURI

**URLとURIは基本的に同じものという考えで問題ありません。**  

URIはURLを抽象化したものなので、幅広い意味になります。  
URNについては実務でも、ほとんど使われることがないため  
覚える必要はありません（恐らく知っている人も少ない）。  

- [Wikipedia - Uniform Resource Identifier](https://ja.wikipedia.org/wiki/Uniform_Resource_Identifier)
- [Wikimedia Commons](https://commons.wikimedia.org/w/index.php?curid=2649934)  
  ![URI Venn Diagram](./images/uri-venn-diagram.png)

WHATWGによってURLに統一する動きもあります。  
※ 文中のIRIはURIを拡張したものです。

```txt
Standardize on the term URL. URI and IRI are just confusing. In practice a single algorithm is used for both so keeping them distinct is not helping anyone. URL also easily wins the search result popularity contest.

URL という用語で標準化する。 URI と IRI は混同され易い。 実際には、どちらに対しても同じアルゴリズムが利用されるので、それらを区別する利点は無い。 Web の検索結果 でも URL の方が優位にある。
```

- URL Standard
  - <https://url.spec.whatwg.org/>
  - 日本語訳
    - <https://triple-underscore.github.io/URL-ja.html>
- 検索キーワードの比較
  - <https://trends.google.com/trends/explore?q=url,uri>

## URI

- 構文：`<scheme>://<host><port><path><query><fragment>`
- 例：`https://www.example.com:443/admin/index.php?key1=value1&key2=value2#SomewhereInTheDocument`

| コンポーネント | 例 | 解説 |
| --- | --- | --- |
| スキーム<br>(scheme) | `https`<br>`http` | 最初のうちは`https`または`http`を使うことを覚えておきましょう。 |
| ホスト<br>(host) | `www.example.com`<br>`localhost`<br>`127.0.0.1` | WebサイトのFQDN（完全修飾ドメイン名）、IPアドレスを記述します。<br>サーバー名or住所を記述すると覚えておきましょう。<br>開発時は「`localhost`」や「`127.0.0.1`」をよく使います。 |
| ポート<br>(port) | `:443`<br>`:80` | 【省略可】`:`の後ろにポート番号を記述します。<br>HTTPSは443、HTTPは80が標準ポートになり省略可能になっています。<br>それ以外のポートを使う場合に必須です。 |
| パス<br>(path) | `/admin/index.php` | 対象へのルートパス（`/`から始める）を記述します。<br>詳細については「[パス](#パス)」参照 |
| クエリ<br>(query) | `?key1=value1&key2=value2` | 【省略可】引数(Parameters)とも呼ばれます。<br>`?`の後ろにクエリを記述します。<br>クエリはKeyとValueのペアを`&`で区切ることで複数のパラメータを設定できます。<br>用途としては、検索ワードやページ番号などのユーザーに見られても問題ない情報を設定します。 |
| フラグメント<br>(fragment) | `#SomewhereInTheDocument` | 【省略可】アンカー(Anchor)とも呼ばれます。<br>`#`の後ろにクエリを記述します。 |

### 例

| URI | Scheme | Host | Port | Path | Query | Fragment |
| --- | --- | --- | --- | --- | --- | --- |
| `https://www.example.com` | `https` | `www.example.com` | - | - | - | - |
| `http://localhost` | `http` | `localhost` | - | - | - | - |
| <https://www.google.com/search?q=url+uri&tbm=isch> | `https` | `www.google.com` | - | `/search` | `q=url+uri&tbm=isch` | - |
| <https://epkotsoftware.github.io/training/first-day/#インストール> | `https` | `epkotsoftware.github.io` | - | `/training/first-day/` | - | `インストール` |
| `https://www.example.com:443/admin/index.php?key1=value1&key2=value2#SomewhereInTheDocument` | `https` | `www.example.com` | `443` | `/admin/index.php` | `key1=value1&key2=value2` | `SomewhereInTheDocument` |

## パス

パスについてはWebに限らず、Linuxでも必要になってくるので  
エンジニア必須の知識になります、しっかり学習しておきましょう。

- 【Web業界の常識】「パス」の書き方、説明できますか？Webデザイナー・プログラマー志望の皆さんへ 初心者向け【HTML・CSS コーディング】
  - <https://youtu.be/R7tNviqrMzo>

| パスの種類 | 画面名 | 例 |
| --- | --- | --- |
| 絶対パス | 目的のファイルまでの道筋を全部書く。<br>主に外部サイトへのアクセスに使用する。 | `https://example.com/css/common.css` |
| ルートパス | ルートディレクトリから、目的のファイルまでの道筋を全部書く。<br>同一サイトで使用可、「`/`」から始まる。 | `/css/common.css` |
| 相対パス | 現在の位置から、目的のファイルまでの道筋を全部書く。<br>同一サイトで使用可。 | 現在位置がルートの場合：`css/common.css`<br>現在位置が`/admin`の場合：`../css/common.css` |

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
