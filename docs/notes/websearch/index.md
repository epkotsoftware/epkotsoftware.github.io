# Web検索

## はじめに

本資料はWeb検索（主にGoogle）方法をまとめた資料です。

## セキュリティ

```txt
検索する際は、検索ワードに機密情報が入っていないか確認しましょう。  
```

よくあるケースで、機密情報を含んだエラーメッセージをよく読まずに  
そのまま検索にかける人もいるため注意しましょう。  

検索ワードはクエリストリングに記載されるため  
HTTPSであっても、アクセスログから判別が可能です。  
現場内であっても、他部署の人間に見られる可能性があります。  

### 被害事故事例

```txt
■被害内容

Ｄ社の社員が、ノートパソコンを紛失したが、ハードディスクには機密情報を保存しないように心がけていたため、特段の措置を講じなかった。
後日、ＬＡＮ管理者が社内の電波状況をチェックしたところ、社内の無線ＬＡＮのアクセスポイントと同じＳＳＩＤと情報セキュリティ方式が設定されている別のアクセスポイントが、社外に設置されていることが判明した。

１．社員が紛失による情報漏えい（ＳＳＩＤ、パスワード）。
２．Ｄ社の社員が当該アクセスポイントを正規のものと誤認してアクセスし、情報が窃取されていたおそれもある。
```

引用: [`被害事故事例（WiFi) - スペクトラム・テクノロジー株式会社`](https://spectrum-tech.co.jp/incident.html)  

上記のようなアクセスポイントの偽装は、ノートパソコンを使っても可能で  
カフェなどの施設のフリーWiFiを偽装しているケースもあります  
偽装アクセスポイントに繋いだ状態で  
検索すると情報が抜かれる可能性があります。  
現場でも可能性は0とは言えません。  

少し検索とは違いますが、偽装アクセスポイントで  
某サービスのログイン画面を差し替え  
IDやパスワードを抜き取るということが実際に可能なようです。  

こういったことから、自宅やオフィス以外での  
ネットワーク接続を禁止している現場もあります。  

- `クエリストリングから情報が漏れる`
  - <https://www.ipa.go.jp/security/awareness/vendor/programmingv1/pdf/a01_04.pdf>
- `第5章 暴露対策 コンテンツ間パラメータ対策`
  - <https://www.ipa.go.jp/security/awareness/vendor/programmingv2/contents/403.html>
- `スマートフォン・サイバー攻撃対策ガイド`
  - <https://www.jssec.org/column/20210521.html>
- `被害事故事例（WiFi)`
  - <https://spectrum-tech.co.jp/incident.html>

## エンジニアの検索のコツ

```txt
★検索時に意識すること★

・エラーメッセージは英語であっても、翻訳し内容を理解した上で必要な情報を検索する。
・最初はブログなどでヒントを得ても良いが、最終的には公式ドキュメントで正しい情報を得る。
```

理由としては、投稿内容自体に誤りがあったり、言語やフレームワークのバージョンアップにより  
非推奨や廃止された内容になっていることがあります。  

エラーメッセージについては、そのまま検索する人が多いですが  
エラー発生の要因は、人によって異なることが多いので  
検索でヒットした対処法を鵜呑みにし、甚大な被害になるケースもあります。

```txt
★実際にあった失敗例★

Gitでエラーが発生し、出てきたエラーメッセージをそのまま検索にかけ
ヒットした対処方法をそのまま実践したところ、GitHubのブランチが壊れてしまい
他のメンバーにも迷惑をかけてしまった。
```

## Google

筆者がよく使う検索方法です。

### 特定のサイト内を検索する

検索ボックスに以下を入力して検索します。

```txt
site:ドメイン {キーワード}
```

例えば公式サイトのPHP公式サイト<https://www.php.net/>の場合  
URLのドメイン部分「`www.php.net`」を取って  
検索ワードを「`site:www.php.net {調べたいキーワード}`」のようにします。  
（ドメインの「www.」は省略可）  

- 【PHPマニュアル】検索ワード「`site:www.php.net {キーワード}`」
  - PHPマニュアルで「文字列」を検索
    - [site:www.php.net 文字列](https://www.google.com/search?q=site:www.php.net+文字列)
  - PHPマニュアルで「配列」を検索
    - [site:www.php.net 配列](https://www.google.com/search?q=site:www.php.net+配列)
  - PHPマニュアルで「演算子」を検索
    - [site:www.php.net 演算子](https://www.google.com/search?q=site:www.php.net+演算子)
  - PHPマニュアルで「配列 ループ」を検索
    - [site:www.php.net 配列 ループ](https://www.google.com/search?q=site:www.php.net+演算子)
- 【MDN Web Docs】検索ワード「`site:developer.mozilla.org {キーワード}`」
  - MDN Web Docsで「HTML」を検索
    - [site:developer.mozilla.org HTML](https://www.google.com/search?q=site:developer.mozilla.org+HTML)
  - MDN Web Docsで「CSS」を検索
    - [site:developer.mozilla.org CSS](https://www.google.com/search?q=site:developer.mozilla.org+CSS)
  - MDN Web Docsで「JavaScript」を検索
    - [site:developer.mozilla.org JavaScript](https://www.google.com/search?q=site:developer.mozilla.org+JavaScript)
  - MDN Web Docsで「JavaScript 配列」を検索
    - [site:developer.mozilla.org JavaScript 配列](https://www.google.com/search?q=site:developer.mozilla.org+JavaScript+配列)
- 【SAMURAI ENGINEER】検索ワード「`site:www.sejuku.net {キーワード}`」
  - SAMURAI ENGINEERで「JavaScript 配列」を検索
    - [site:www.sejuku.net JavaScript 配列](https://www.google.com/search?q=site:www.sejuku.net+JavaScript+配列)

### その他の検索方法

Google公式で出している検索方法は以下になります。

- `Google 検索 ヘルプ`
  - <https://support.google.com/websearch>
  - `Google での検索のコツ - Google 検索 ヘルプ`
    - <https://support.google.com/websearch/answer/134479>
  - `ウェブ検索の精度を高める - Google 検索 ヘルプ`
    - <https://support.google.com/websearch/answer/2466433>

### Google検索の実例

- [PHPに関する検索](./google-case-php/index.md)
- [Dockerに関する検索](./google-case-docker/index.md)
