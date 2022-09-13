# 株式会社エプコットソフトウェア ～ ファイル編

## 目次

| No. |  |
| :---: | --- |
| 1 | [動画学習](#動画学習) |
| 2 | [ファイルの種類](#ファイルの種類) |
| 3 | [CSV](#csv) |
| 4 | [TSV](#tsv) |

## 動画学習

XML・CSV・JSON・画像(JPG・PNG・GIF・WEBP・SVG) について学習しましょう。

- 動画
  - <https://youtube.com/playlist?list=PLCX3wwS3Gg4yh-k4eOBoRq1Muco5ianO8>
    - `8:07` XMLとは？8分でわかるXML形式データの使い方入門
    - `11:48` CSVファイルとは？CSV形式の基本から作成方法を完全解説！
    - `8:04` JSONとは？8分でわかるJSON形式データの使い方入門
    - `20:10` Webやブログで重要なJPG・PNG・WEBPなどの【画像拡張子】の特徴や違い＆その使い方を徹底解説！

## ファイルの種類

実務でよく使うファイルの種類です。  
MIMEタイプはファイルダウンロード機能開発時に  
レスポンスヘッダの「Content-Type」に設定する値です。  
必要になったら調べれば良いので、浅い理解で大丈夫です。

| 名称 | 種別 | 拡張子 | MIMEタイプ |
| --- | --- | --- | --- |
| XML<br>(エックスエムエル) | テキスト | `.xml` | `application/xml`<br>`text/xml` (一般ユーザーが読めるものの場合) |
| CSV<br>(シーエスブイ) | テキスト | `.csv` | `text/csv` |
| TSV<br>(ティーエスブイ) | テキスト | `.tsv` | `text/tab-separated-values` |
| JSON<br>(ジェイソン) | テキスト | `.json` | `application/json` |
| JPEG<br>(ジェイペグ) | ラスター画像<br>(非可逆圧縮) | `.jpg`<br>`.jpeg` | `image/jpeg` |
| PNG<br>(ピング) | ラスター画像<br>(可逆圧縮) | `.png` | `image/png` |
| GIF<br>(ジフ or ギフ) | ラスター画像<br>(可逆圧縮) | `.gif` | `image/gif` |
| WEBP<br>(ウェッピー) | ラスター画像<br>(可逆・非可逆圧縮) | `.webp` | `image/webp` |
| SVG<br>(エスブイジー) | テキスト・ベクター画像 | `.svg` | `image/svg+xml` |
| HEIF(ヒーフ)<br>HEIC(ヘイク) | 画像<br>(可逆圧縮) | `.heif`<br>`.heic` | `image/heif`<br>`image/heic` |

- 参考 (難しいのでさらっと確認してください)
  - Content-Type
    - <https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Content-Type>
  - MIME タイプ (IANA メディアタイプ)
    - <https://developer.mozilla.org/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types>
  - よくある MIME タイプ
    - <https://developer.mozilla.org/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types>
  - `mimetype.io`
    - <https://mimetype.io/>

## HEIF

HEIFファイルはJPEGの代替となる新しい画像形式です。  
少ないファイルサイズで鮮明な写真を格納できます。  

- HEIFファイル
  - <https://www.adobe.com/jp/creativecloud/file-types/image/raster/heif-file.html>
- Apple 製のデバイスで HEIF／HEVC メディアを扱う
  - <https://support.apple.com/ja-jp/HT207022>

## CSV

CSV(Comma-Separated Values)はデータの入出力で使うことが多いです。  
テキストで開くことも出来ますが、Excel・Numbers等のアプリケーションで  
表として表示することも出来ます。

- 参考 (難しいのでさらっと確認してください)
  - 国際標準 (RFC4180)
    - <https://www.rfc-editor.org/rfc/rfc4180.txt>
  - Wikipedia Comma-Separated Values
    - <https://ja.wikipedia.org/wiki/Comma-Separated_Values>
  - Wikipedia Tab-Separated Values
    - <https://ja.wikipedia.org/wiki/Tab-Separated_Values>

### CSV例

ヘッダー行ありの例です。  
※ 「`␍␊`」は改行コードCRLF

```csv
field_name1,field_name2,field_name3␍␊
field_value1-1,field_value1-2,field_value1-3␍␊
field_value2-1,field_value2-2,field_value2-3␍␊
```

- ファイル例
  - CSVファイル: [example.csv](./files/example.csv)

```csv
ID,NAME,DATE
1000001,NAME1,2022-09-01
1000002,NAME2,2022-09-02
```

アプリでの表示例

| ID | NAME | DATE |
| --- | --- | --- |
| 1000001 | NAME1 | 2022-09-01 |
| 1000002 | NAME2 | 2022-09-02 |

### CSV例(ヘッダー行なし)

ヘッダー行なしの例です。

```csv
field_value1-1,field_value1-2,field_value1-3␍␊
field_value2-1,field_value2-2,field_value2-3␍␊
```

```csv
1000001,NAME1,2022-09-01
1000002,NAME2,2022-09-02
```

## TSV

CSVの区切り文字がTab文字になった  
TSV(Tab-Separated Values)もよく使われます。  

### TSV例

TSVファイルの例です。

- ファイル例
  - TSVファイル: [example.tsv](./files/example.tsv)

```tsv
ID	NAME	DATE
1000001	NAME1	2022-09-01
1000002	NAME2	2022-09-02
```
