# パス

## パスの種類

パスについてはWebに限らず、Linuxでも必要になってくるので  
エンジニア必須の知識になります、しっかり学習しておきましょう。

- 【Web業界の常識】「パス」の書き方、説明できますか？Webデザイナー・プログラマー志望の皆さんへ 初心者向け【HTML・CSS コーディング】
  - <https://youtu.be/R7tNviqrMzo>

| パスの種類 | 例 | 解説 |
| --- | --- | --- |
| 絶対パス | `https://example.com/css/common.css` | 目的のファイルまでの道筋を全部書く。<br>主に外部サイトへのアクセスに使用する。 |
| ルートパス | `/css/common.css` | ルートディレクトリから、目的のファイルまでの道筋を全部書く。<br>同一サイトで使用可、「`/`」から始まる。 |
| 相対パス | 現在位置がルートの場合<br>`css/common.css`<br><br>現在位置が`/admin`の場合<br>`../css/common.css` | 現在の位置から、目的のファイルまでの道筋を全部書く。<br>同一サイトで使用可。 |

## Webでの注意点

CSSのurl関数で画像を表示しようとしている場合、CSSファイルからの相対パスとなりますので注意してください。  
MDNにもそのように記載があります。  

```txt
相対 URL が使用された場合は、スタイルシートの URL からの相対となります (ウェブページの URL からではありません)。
```

- `url() - CSS: カスケーディングスタイルシート | MDN`
  - <https://developer.mozilla.org/ja/docs/Web/CSS/url>