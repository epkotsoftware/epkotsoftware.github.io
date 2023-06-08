# 設計編

## はじめに

- 計30時間を目安に学習しましょう。
- 内容を全て暗記する必要はありません。
- 「URL設計詳細」については真面目に読み込むと時間がかかるので1時間読む程度でOKです。

## システム設計

動画については、「開発手法編」で閲覧したものと同一のものなので飛ばしても問題ありません。

- システム設計の流れ｜基本設計と詳細設計の違いや、設計書の書き方を解説！
  - <https://youtu.be/OXJtc_aBm9M>
- システム設計とは？基本情報技術者試験の重要用語解説！
  - <https://www.foresight.jp/fe/column/system-design/>

## データベース設計

- データベース入門講座
  - <https://www.youtube.com/playlist?list=PL-1KBX2gDRujQaRgEByueezHBiqHP8KDD>
- 基本情報技術者試験の鬼門であるデータベースの正規化について解説
  - <https://www.foresight.jp/fe/column/normalization/>

### ER図

ER図はプログラマーも修正することの多い資料なので  
Mermaidを使って、適当なテーブルを追加したり、カラムを追加したり編集してみましょう。  
「Mermaid Live Editor」でテキストを更新することで
図が更新されURLが変わり、URL内に変更した内容が保持されるので、URLを残しておくと  
誰でも途中から再編集が可能になります。

- `ER図を簡単に作成してみよう【DB設計】【Mermaid】`
  - <https://zenn.dev/seiya0/articles/tech-mermaid-erd>
- 例
  - [Mermaid Live Editor](https://mermaid.live/edit#pako:eNrNk0FLwzAUgP9KyHn1B_Q8hDEEwWthxOa5BdZ0pK-KdLu0Hqag7KQOPU6F6WEH9TTxx1Sr_guTrNMJRTyaQyB533uB770k1A85UJc6juNJFNgFl3g0T5_zdJJnwzy79agnbRRUXbC2YoEniV5xBCoi_b7jhAnBPQCMiMk1_CqRLA5mbYu2kEgEJ5tNTTbqhl0Gd5nyO0wRyQLQwdfR8dvNrAowZUsoz67zbJ6nj3rXCVU0h8hXoocilDrhfXpXnJ-scigCiJAFPU12AYG3GJrnD48-xpPi7KoYp9W4r4B94S9Pl8Vw9Bse9_g3XlzcF6ezn_hgqa10-VdvZZDF2AlVSzPrTdvBqTXzoPdG3bWtWBO8ypB9z8o8sE2f677_T0O0RgNQARNcT6z141HsQAAeNZPHYYfFXTS4QbWRcGtf-tRFFUONLuqXM7y8BC4wVBuLT2D_wuATLSEnZQ) ※ 自由に編集が可能です

### テーブル定義書

- テーブル定義書サンプル
  - SQLクライアントソフトの「`A5:SQL Mk-2`」を使い、データベースからテーブル定義書を自動出力したサンプルです。  
    - [テーブル定義書.xlsx](./files/テーブル定義書.xlsx)
    - [テーブル定義書.pdf](./files/テーブル定義書.pdf) （ExcelをPDF変換したもの）

## UML

- UMLとは？クラス図・シーケンス図など種類や書き方、ツールを解説！【統一モデリング言語】UML入門
  - <https://youtu.be/EvO_BvCJUCA>
- diagrams.net（Draw.io）
  - こちらで無料で図の作成が可能です。
  - <https://app.diagrams.net/>
- Mermaid
  - こちらでもシーケンス図やER図等の作成が可能です。
    - GitHubで正式にサポートされているため、以下のように図として表示されます。
      - [ER図](https://gist.github.com/seiya0-g/395d650594ed425a05033956a419e5df)
      - [ER図 Raw（テキスト）](https://gist.githubusercontent.com/seiya0-g/395d650594ed425a05033956a419e5df/raw/41d9da5d3e6b0088457653fb23112e4a5d0c7bda/erd.md)
    - コードを書いて作成するため、細かいレイアウト調整は難しいですが、簡易的な図を作成する場合に有用です。
    - SVG形式で出力することで、リンクも使用でき。Markdownでの設計書作成時に使われる事がある。
- PlantUML
  - こちらでもシーケンス図やER図等の作成が可能です。
    - 書式は違いますがMermaidと同様にUMLの作成が可能です。
  - <https://plantuml.com/ja/>
  - サンプル: 別ページに現場で使用経験のあるものを集めました。
    - [PlantUML](./../plantuml/index.md)

## 設計書テンプレート

- テンプレートが多くありますが現場で使うのは「基本設計」・「詳細設計書」になります。  
  基本設計では「テーブル定義書」「画面レイアウト」は、ほぼ確実に現場で見ることになります。
- 設計書仕様書テンプレート PocketDOC
  - <https://pocket9.net/pocketdoc>

## 画面設計

画面に使用する部品は覚えておきましょう。

- 画面部品
  - [画面部品](./forms/forms.html)

CSSフレームワークは何かしら使われる現場が多いので  
「Bootstrap」というフレームワークを紹介します。  
スターターテンプレートを使うとすぐに使い始める事ができます。  

- Bootstrap（ブートストラップ）
  - スターターテンプレート
    - <https://getbootstrap.jp/docs/5.0/getting-started/introduction/#スターターテンプレート>
  - コンポーネント
    - Alerts (アラート) <https://getbootstrap.jp/docs/5.0/components/alerts/>
    - Buttons (ボタン) <https://getbootstrap.jp/docs/5.0/components/buttons/>
    - Forms (フォーム) <https://getbootstrap.jp/docs/5.0/forms/overview/>
  - サンプル <https://getbootstrap.jp/docs/5.0/examples/>

## URL設計

こちらを参照してください。

- [URL設計](./url/index.md)

## 設計例

- [設計例](./examples/index.md)

## 用語

以下の用語は覚えておきましょう。

- [外部設計（基本設計）](https://e-words.jp/w/%E5%A4%96%E9%83%A8%E8%A8%AD%E8%A8%88.html)
  - [画面設計（画面レイアウト）](https://e-words.jp/w/%E7%94%BB%E9%9D%A2%E3%83%AC%E3%82%A4%E3%82%A2%E3%82%A6%E3%83%88.html)
  - [帳票](https://e-words.jp/w/%E5%B8%B3%E7%A5%A8.html)設計
  - データベース設計
    - [ER図](https://e-words.jp/w/ER%E5%9B%B3.html)
    - テーブル定義書
    - データベース用語
      - [リレーションシップ](https://e-words.jp/w/%E3%83%AA%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%B7%E3%83%83%E3%83%97.html)
      - [リレーショナルデータベース](https://e-words.jp/w/%E3%83%AA%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%8A%E3%83%AB%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9.html)
      - [テーブル](https://e-words.jp/w/%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB.html)
      - [カラム（列）](https://e-words.jp/w/%E5%88%97.html)
      - [レコード（行）](https://e-words.jp/w/%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89.html)
      - [PK（主キー）](https://e-words.jp/w/%E4%B8%BB%E3%82%AD%E3%83%BC.html)
      - [FK（外部キー）](https://e-words.jp/w/%E5%A4%96%E9%83%A8%E3%82%AD%E3%83%BC.html)
      - [UK（一意キー）](https://e-words.jp/w/%E4%B8%80%E6%84%8F%E5%88%B6%E7%B4%84.html)
  - [UML](https://e-words.jp/w/UML.html)
    - [ユースケース図](https://e-words.jp/w/%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9%E5%9B%B3.html)
    - [シーケンス図](https://e-words.jp/w/%E3%82%B7%E3%83%BC%E3%82%B1%E3%83%B3%E3%82%B9%E5%9B%B3.html)
  - [ユーザーインターフェース](https://e-words.jp/w/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%95%E3%82%A7%E3%83%BC%E3%82%B9.html)
    - 各ウィジェット
- [URL](https://e-words.jp/w/URL.html)
- [URI](https://e-words.jp/w/URI.html)
