# 新人研修予習

## はじめに

入社前に予習をしたいという声が多かったため、このページを用意しました。  
入社前ですので強制はしませんが、新人研修ではパソコンが扱える前提で話が進みますので  
「[パソコンが不慣れな方へ](#パソコンが不慣れな方へ)」は予め確認しておくことをおすすめします。

## パソコンが不慣れな方へ

研修時点では、お使いのパソコン(PC)にあわせて「Windows」か「Mac」のどちらかが出来れば問題ありません。  
「ファイル拡張子」、コピー・貼り付け・保存等の「ショートカットキー」がわかり  
操作についても慣れているようであれば、飛ばしてください。

- 動画
  - パソコンの使い方。基本講座【初心者向けPC教室】Windows/Mac対応
    - <https://youtu.be/cxmRzjQgHHk>
  - Windows パソコン初心者講座
    - <https://www.youtube.com/playlist?list=PLqfgbYDnRRWD_8kpAXFmRldGnyDVeaVOQ>
  - 【MacBook初心者向け】パソコンを買う前に知るべきマックブック基本の使い方
    - <https://youtu.be/ydvXNRsZLLs>
- サイト
  - PCに不慣れな新入社員さんに伝えたい基本操作
    - <https://pc-pier.com/blog/2020/02/20/basic-operation/>
  - 初心者のためのMacBookシリーズ 使い方の基本【intel Mac】
    - <https://funq.jp/flick/article/652845/>

### ファイル操作

現場によって管理方法が様々ですが  
Dropbox等、共有しているファイルの扱いには注意しましょう。

- PCに不慣れな新入社員、伝えるべきファイル操作の基本
  - <https://xtech.nikkei.com/atcl/nxt/column/18/00667/032900003/>

### ファイル拡張子

ファイル拡張子を表示しておくようにしましょう。

- 動画
  - 拡張子とは何かを解説【PC必須知識】
    - <https://youtu.be/45BQZWjlRls>
  - 拡張子とは何かを説明！パソコン・プログラミングを学習する上で重要な基礎知識です！
    - <https://youtu.be/_UjT-xsE6Oc>
- 拡張子とは
  - <https://www.google.com/search?q=ファイル+拡張子とは>
- Windows
  - <https://www.google.com/search?q=Windows+ファイル+拡張子+表示>
- Mac
  - <https://www.google.com/search?q=Mac+ファイル+拡張子+表示>

### 圧縮ファイル

- ZIP形式をはじめとするデータの圧縮や解凍方法、ZIP形式の注意点についてご紹介
  - <https://www.dospara.co.jp/5info/cts_str_pc_comp-file>
- ZIPファイル
  - 【Windows,ZIP】フォルダを圧縮、展開(解凍)する方法、超簡単！
    - <https://youtu.be/Gc08O5JEmbw>
- 【gzip】 ファイルを圧縮・展開する（拡張子.gz）
  - <https://xtech.nikkei.com/it/article/COLUMN/20060227/230791/>

### ショートカットキー

ショートカットキーを覚えると便利です。

- パソコンで初心者が覚えるべき基本テクニック集【保存版】
  - <https://youtu.be/WWphrRjWyAQ>
- 【絶対に覚えておきたい！】MacBookの生産性を上げる便利なショートカットキー21選！【入門編】
  - <https://youtu.be/WaW2IMMsijk>
- Windows 10 スクリーンショットを撮る4つの方法
  - <https://www.pc-koubou.jp/magazine/35994>
- Mac でスクリーンショットを撮る
  - <https://support.apple.com/ja-jp/HT201361>

その他ショートカットキーは以下にまとめています。

- [ショートカットキー一覧](./../../training/shortcutkey/index.html)

### タイピング

- 高速タイピング練習のコツ｜3日でマスター！タッチタイピング（ブラインドタッチ）【初心者向け入門講座】
  - <https://youtu.be/XiFZnCZEG1E>

## 学習方法

プログラミングの学習において、アナログのノートをとる事は適切ではありません。  
プログラミングを全てノートに書き写すのは時間もかかり困難です。  
また、学校で習ってきたものとは異なり、すぐに知識が古くなってしまうのでノートの更新に膨大な時間がかかります。  

現在では検索するだけで、すぐに必要な最新情報を得ることが出来るので  
どうしてもアナログのノートをとりたい場合は、検索ワードとその概要をメモする程度にするのが良いかと思います。  
また、書籍を購入して、忘れそうな所や理解が不足している部分に付箋等を貼っておくのも良いかもしれません。

- 【学習法】プログラミングの勉強でノートはNG？メリットはない？
  - <https://kredo.jp/media/programming-study-note/>
- 動画
  - プログラミングにはやってはいけない勉強法がある！？爆速で成長する王道のプログラミング学習法を紹介！
    - <https://youtu.be/ZJqVQJwvwNI>

## 予習

実践については研修時に行います。  
まずは実際に動かしてみたり動画を見て必要な知識や  
プログラミングはどういうものなのかをイメージをつかみましょう。

### プログラムを動かしてみる

以下のサイトでコードを動かすことができます。

- `paiza.io`
  - <https://paiza.io/ja/projects/new>

「PHP」という言語を選択して以下のコードを実行してみましょう。

```php
<?php

function same($value1, $value2) {
    return $value1 === $value2;
}

$result1 = same(1, 1);
$result2 = same(1, 2);
$result3 = same(1, '1');

var_dump($result1, $result2, $result3);
```

以下のように出力されます。

```txt
bool(true)
bool(false)
bool(false)
```

### 検索

エンジニアのWeb検索方法については以下にまとめています。  

- [Web検索](./../../notes/websearch/index.md)

### 学習方法について

- FAQ
  - ★動画学習の時に、話すのが早すぎてついていけない。
    - YouTube等の動画共有サービスでは、再生速度を変更することが可能です。  
      逆に遅いと感じる場合、再生速度をあげましょう。
      - YouTubeの場合
        1. 動画下部にある設定アイコン(歯車)をクリック
        1. 「再生速度」をクリック
  - ★海外の動画を参考にしようと思ったが、英語で話している内容が聞き取れない。
    - YouTubeでは字幕の表示が可能です（デフォルトは自動翻訳されたもので誤翻訳されている場合もある）。
      1. 動画下部にある設定アイコン(歯車)をクリック
      1. 「字幕」をクリック
  - ★わからない用語が出てきた。
    - 現場に入ってからも、わからない用語がたくさん出てくるかと思います  
      検索力を身につけましょう。
      - Google検索ヘルプ ～ ウェブ検索の精度を高める
        - <https://support.google.com/websearch/answer/2466433>
      - 画像検索も便利です。以下は「MVC」を画像検索した例
        - <https://www.google.com/search?q=mvc&tbm=isch>
      - リアルタイム検索は障害情報等を確認する時に便利、以下は「AWS」を検索した例
        - <https://search.yahoo.co.jp/realtime/search?p=aws>

### 動画

- Webアプリケーションを作るために学ぶべき技術
  - <https://www.youtube.com/watch?v=aC4O0thuTyw>
- Webプログラミングの始め方
  - <https://www.youtube.com/watch?v=zxX8YMTxvyI>
- Chrome DevToolsの使い方を徹底解説！Chrome Developer Toolsを使いこなすと開発効率が上がる！
  - <https://youtu.be/awRkFcv51r4>
  - 設計やテストエビデンス等で、スクリーンショットを撮る事が多いです。
    - DevToolで 「Ctrl」 + 「Shift」を押しながら 「P」 を押すと、コマンドパレットが出るので  
      「screenshot」と打つと、いくつかのキャプチャ方法が出てきます。
      - ![google_chrome_dev_tools](./../../image/google_chrome_dev_tools.png)
      - `Capture area screenshot` : 手動で選択範囲を指定してキャプチャ、画面上のカーソルが「+」になるのでドラッグして範囲を決める。
      - `Capture full size screenshot` : スクロールした分も含めてページ全体をキャプチャ
      - `Capture node screenshot` : 選択しているノードをキャプチャ
      - `Capture screenshot` : iPhone等のフレームも含めてキャプチャ、顧客向けの資料作成に便利。
- HTML講座
  - <https://www.youtube.com/playlist?list=PLwM1-TnN_NN457PTxsvNXxVxN8fkbYHKU>
- CSS講座
  - <https://www.youtube.com/playlist?list=PLwM1-TnN_NN5jWN09yjtxWng2XZa88ate>
- JavaScript講座
  - <https://www.youtube.com/playlist?list=PLwM1-TnN_NN7-zdRV8YsGUB82VVhfYiWW>
- PHPプログラミング入門講座🔰【初心者でも1時間で学べるPHP入門！フル字幕】
  - <https://youtu.be/J_pASVQXElA>
- 【基本知識】GitHubとは？できることや基礎用語を解説！
  - <https://youtu.be/yzNPC_QzgFM>
- 【Git入門】Git + Github使い方入門講座
  - <https://youtu.be/LDOR5HfI_sQ>

### サイト

- HTML&CSS入門 Webデザインをイチから学ぼう
  - <https://saruwakakun.com/html-css/basic>
  - HTML・CSSの基礎について分かりやすく解説があります。
- JavaScript入門
  - <https://www.javadrive.jp/javascript/>
  - 変数・配列・関数は、PHP等の他の言語でも存在するものになります。  
    しっかり学んでおくと、今後の学習がスムーズに進みます。

### 用語集

現場等で使われる用語は  
以下の資料にまとめています。

- [用語集](./../../training/glossary.md)

### プログラミング

主に公式サイトやWikipediaのプログラミング関連のリンク等を載せています。  
公式サイトでは難しく書かれているため、プログラミング経験者ではない方は、まだ見ないでおきましょう。  

- [プログラミング](./../../training/programming/index.md)

### 基本情報技術者試験

資格取得は必須ではありませんが  
基本情報技術者試験の学習は実務でも必要な、知識が身につきます。

- `IPA 独立行政法人 情報処理推進機構：情報処理技術者試験における出題範囲・シラバス等の変更内容の公表について（基本情報技術者試験、情報セキュリティマネジメント試験の通年試験化）`
  - <https://www.jitec.ipa.go.jp/1_00topic/topic_20220425.html>
  - `「基本情報技術者試験（レベル2）」シラバス（Ver.8.0）`
    - <https://www.jitec.ipa.go.jp/1_13download/syllabus_fe_ver8_0.pdf>
  - `基本情報技術者試験（科目A試験）サンプル問題（60問）`
    - 問題
      - <https://www.jitec.ipa.go.jp/1_13download/fe_kamoku_a_set_sample_qs.pdf>
    - 解答
      - <https://www.jitec.ipa.go.jp/1_13download/fe_kamoku_a_set_sample_ans.pdf>
  - `基本情報技術者試験（科目B試験）サンプル問題（20問）`
    - 問題
      - <https://www.jitec.ipa.go.jp/1_13download/fe_kamoku_b_set_sample_qs.pdf>
    - 解答
      - <https://www.jitec.ipa.go.jp/1_13download/fe_kamoku_b_set_sample_ans.pdf>

## その他

### 読解力

この業界では仕様書・設計書・説明資料等、ドキュメントを読む機会が非常に多く  
文章を読めるだけではなく、適切に解釈し、要約するスキルが求められます。  

- あなたの読解力をテスト！読み解く力を鍛える方法とは？
  - <https://www.sokunousokudoku.net/media/?p=2802>
