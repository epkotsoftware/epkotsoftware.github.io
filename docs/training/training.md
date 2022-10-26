# 株式会社エプコットソフトウェア ～ 新人研修

## カリキュラム

| No. | 終了目安<br>(営業日数) | 開始月 | 内容 | 備考 |
| :---: | ---: | ---: | --- | --- |
| 1 | - | 0ヶ月 | [はじめに](#はじめに) |  |
| 2 | 半日 | 0ヶ月 | [準備](#準備) |  |
| 3 | 3日 | 0ヶ月 | [コーダー編](#コーダー編) |  |
| 4 | 5日 | 0ヶ月 | [マークアップエンジニア編](#マークアップエンジニア編) |  |
| 5 | 7日 | 0ヶ月 | [フロントエンドエンジニア編](#フロントエンドエンジニア編) |  |
| 6 | 3日 | 0ヶ月 | [Linux編](#linux編) |  |
| 7 | 1日 | 1ヶ月 | [開発手法編](#開発手法編) |  |
| 8 | 5日 | 1ヶ月 | [設計編](#設計編) |  |
| 9 | 3日 | 1ヶ月 | [テスト編](#テスト編) |  |
| 10 | 1日 | 1ヶ月 | [ファイル編](#ファイル編) |  |
| 11 | 1日 | 1ヶ月 | [セキュリティ編](#セキュリティ編) |  |
| 12 | 10日 | 1ヶ月 | [バックエンド編](#バックエンド編) |  |
| 13 | 1日 | 2ヶ月 | [バージョン管理システム編](#バージョン管理システム編) |  |
| 14 | 2日 | 2ヶ月 | [Git編](#git編) |  |
| 15 | 20日 | 2ヶ月 | [PHPプログラミング編](#phpプログラミング編) |  |
| 16 | 2日 | 3ヶ月 | [1対1PG研修](#1対1pg研修) |  |
| 17 | 15日 | 3ヶ月 | [データベース編](#データベース編) |  |
| 18 | 20日以上 | 4ヶ月 | [カリキュラム終了](#カリキュラム終了) | 面談対策・自己学習等 |

## はじめに

前提として、全てを理解する必要はありません。  
研修では広く浅く楽しみながら学び、分からない所は  
研修担当者に聞いたり、後で調べるためのワードだけ覚えておき  
必要になった時、時間が出来た時に深く学習していきましょう。  

まずは、Webプログラミングのイメージをつかみましょう。  
課題の提出は「GitHub」を使うので何をするものか確認してください  
提出の仕方については、提出時にお教えします。  
また、エンジニアになると検索することが多くなりますので検索力も身につけましょう。

- 動画
  - <https://youtube.com/playlist?list=PLCX3wwS3Gg4x7RMa9JE5uelCqvzmdmVfA>
    - `4:57` 【初心者向け】Webエンジニアとして独り立ちするために学ぶべきスキルマップ【プログラミング】
    - `6:56` 【初心者向け】Webプログラミングの始め方 スキル0⇒1のためにやるべき具体的な手順
    - `11:02` GitHubとは？【分かりやすい解説シリーズ #14】【プログラミング】
    - `12:30` 8割の人が知らない検索術・ググり方【知らないと損】
    - `23:25` エンジニアは検索力が大事。プログラミングスキル向上にググり力は必須です。
    - `14:39` プログラミングにおける正しい質問の仕方とは？おすすめ質問サイトも紹介

### 休止時間

ほぼ全てがPCを使った研修となるため  
VDT症候群予防の観点から、1時間連続でPC上で作業した場合、10分程度の休止時間(ディスプレイを見ない時間)を設けましょう。  
休止時間の使い方はお任せします（情報整理、書籍での学習、小休憩、運動等）  

上記の休止時間を考慮して、1日の研修時間は**8.0h**ではなく**6.5h**程度が目安です。

## 準備

### Git設定確認

[GitHub ～ Git設定確認](./../github/index.md#git設定確認) の設定が漏れていると  
コミットが失敗しますので再度ご確認ください。

### ユーザーディレクトリ作成

開発環境を構築し、プログラムファイルを格納するための  
ブランチ(`feature/{★ユーザー名}`)及び、個人フォルダー（ディレクトリ）を作成します。  
詳しくは [研修用リポジトリ(training)](https://github.com/epkotsoftware/training) のREADMEをご覧ください。  

  ※ GitHubを開く時に Microsoft Edge を使用している場合、自動翻訳されることがあるので翻訳を解除してください。  
    URLの右の方に「`aあ`」のアイコンがあり、翻訳設定が可能です。  
  ※ [研修用リポジトリ(training)](https://github.com/epkotsoftware/training)の権限がないと失敗します。リポジトリが見えない方は管理者にご連絡ください。  

上記の手順でGitHub上には「`feature/{★ユーザー名}`」ブランチにユーザーディレクトリが出来ていて  
ローカルには「`training`」ディレクトリが出来ているので  
Visual Studio Code(VSCode) で開きましょう。  
メニューバー「ファイル」→「フォルダーを開く」→「`training`」フォルダーを選択  

![vscode_training](./../image/vscode_training.png)

ターミナルが表示されていない場合は  
メニューバー「表示」→「ターミナル」を押下してください。  

ターミナルの種類はお好みで良いですが「Git Bash」がおすすめです。  
ターミナルの「`+`」のすぐ横にあるアイコンで選択可能です。

#### ユーザーディレクトリ作成報告

研修担当者にユーザーディレクトリを作成した旨、報告をお願いします。  
正しく出来ているか確認します。  

**※ 以降は自分のユーザーディレクトリ内で作業をお願いします。**

## コーダー編

コーダー編は課題提出がありますので予めご確認下さい。

- [研修課題提出](https://github.com/epkotsoftware/training/blob/template/docs/submission/index.md#研修課題提出)

まずは動画で学習しましょう。

- 動画
  - <https://youtube.com/playlist?list=PLCX3wwS3Gg4wQs1w27nhrURdByT3cSNBp>
    - `10:17` 【2021年最新】HTML入門🔰初心者向けにHTMLの基礎を解説！
    - `11:33` 【CSS入門講座🔰】HTMLとCSSの基本を解説！WEBデザインの言語CSSを理解しよう
      - ※ 動画内で`<header>`タグが出てきますが`<head>`タグの間違いです。`<header>`タグは別の用途で使用します。
    - `11:25` 【Web業界の常識】「パス」の書き方、説明できますか？Webデザイナー・プログラマー志望の皆さんへ 初心者向け【HTML・CSS コーディング】
    - `14:24` 【Webデザイナー・プログラマーになりたい皆さんへ】Web業界の常識シリーズ10選！知らないままではマズいです… キャッシュ/スーパーリロード/アクセス制限の方法etc【初心者必見】
    - `8:22` HTML入門講座 #02：初めてのHTMLページを作ろう／ファイル名の付け方
  - VSCode フォルダ・ファイル追加方法
    ![vscode_add_dir_and_file.gif](./../image/vscode_add_dir_and_file.gif)

動画を見終わったら、[CBC](https://cbc-study.com/)の入門コースをやっていきましょう。

- 入門1（コーダー 初級）
  - <https://cbc-study.com/training/beginner/page1>
  - <https://cbc-study.com/training/beginner/page2>
  - <https://cbc-study.com/training/beginner/page3>
  - <https://cbc-study.com/training/beginner/page4>
- 入門2（コーダー 中級）
  - <https://cbc-study.com/training/beginner/page5>
  - <https://cbc-study.com/training/beginner/page6>
  - <https://cbc-study.com/training/beginner/page7>
- 入門3（コーダー 上級）
  - <https://cbc-study.com/training/beginner/page8>
  - **注意: [「8. 枠が完成！」](https://cbc-study.com/training/beginner/page8#pl-12) の「このようになります。」のリンクをクリックすると誤ったサンプルが出てきますので無視してください。**

2022/6/15でブラウザの「`Internet Explorer(IE)`」が廃止されることにより  
CSSの「`grid-template`」が、ほぼ全てのブラウザでサポートされます。  
今後、使われる事が増えそうなので以下も覚えておきましょう。

- 動画
  - 【HTML/CSSレイアウト】Gridを使うとFlexboxより簡単に複雑なレイアウトを組めます
    - <https://youtu.be/cwkkD0ejX8Q>

### コーダー編課題

1日で出来る範囲で、自由にページを作成しましょう。  
思いつかなければ「実践を踏まえたコーディング」で作ったページのレイアウト変更でもOKです。  
課題提出についてはGitHubで行います。

- 要件
  - 対応ブラウザ
    - Google Chrome
  - 表示
    - 自分のユーザーディレクトリの「`01_beginner/htdocs/index.html`」をブラウザで開くと、作成したページが見れる。
    - 横幅:`1024px` で表示が崩れないようにする（横スクロールバーが出ないようにする）
  - その他
    - 自分のユーザーディレクトリの「`01_beginner/htdocs/`」ディレクトリ内にHTML・CSSが入っていること
- フリー素材  ***※ フリー素材を使用する際は、利用規約は確認してください。***
  - `商用利用可能なアイコン・イラスト素材ならICON HOIHOI`
    - <http://iconhoihoi.oops.jp/>
  - `O-DAN (オーダン）- 無料写真素材・フリーフォト検索`
    - <https://o-dan.net/ja/>
  - `ぱくたそ - すべて無料の写真素材（フリー素材）人物や背景・テクスチャなどの写真をダウンロード`
    - <https://www.pakutaso.com/>
  - `かわいいフリー素材集 いらすとや`
    - <https://www.irasutoya.com/>

横幅を指定した確認方法

1. Google Chrome のDevToolsを開く(Windowsであれば「F12」キー)
1. デバイスツールバーを開く
  ![google_chrome_dev_tools_device](./../image/google_chrome_dev_tools_device.png)
1. デバイスを選択する（今回の場合`iPad Pro`の縦表示で横幅が1024pxになるのでちょうど良い）  
  「`Responsive`」で自由にピクセル指定も可能です。
  ![google_chrome_dev_tools_device_ipad_pro](./../image/google_chrome_dev_tools_device_ipad_pro.png)

- Edit でデバイスを追加することも可能です、以下は入力例
  - Device Name: Desktop Test
  - Width: 1024
  - Height: 620
  - Device pixel ratio: 1
  - User agent string: 未入力
  - User agent type: Desktop

#### コーダー編課題提出

以下を参照してください。

- [研修課題提出](https://github.com/epkotsoftware/training/blob/template/docs/submission/index.md#研修課題提出)

### Chrome DevTools

- Chrome DevToolsの使い方を徹底解説！Chrome Developer Toolsを使いこなすと開発効率が上がる！
  - <https://youtu.be/awRkFcv51r4>
  - 設計やテストエビデンス等で、スクリーンショットを撮る事が多いです。
    - DevToolで 「Ctrl」 + 「Shift」を押しながら 「P」 を押すと、コマンドパレットが出るので  
      「screenshot」と打つと、いくつかのキャプチャ方法が出てきます。
      - ![google_chrome_dev_tools](./../image/google_chrome_dev_tools.png)
      - `Capture area screenshot` : 手動で選択範囲を指定してキャプチャ、画面上のカーソルが「+」になるのでドラッグして範囲を決める。
      - `Capture full size screenshot` : スクロールした分も含めてページ全体をキャプチャ
      - `Capture node screenshot` : 選択しているノードをキャプチャ
      - `Capture screenshot` : iPhone等のフレームも含めてキャプチャ、顧客向けの資料作成に便利。

## マークアップエンジニア編

マークアップエンジニア編は課題提出がありますので予めご確認下さい。

- [研修課題提出](https://github.com/epkotsoftware/training/blob/template/docs/submission/index.md#研修課題提出)

まずは動画で学習しましょう。

- 動画
  - <https://youtube.com/playlist?list=PLCX3wwS3Gg4y99r2bSBpir2nmMv4rzfcL>
    - `12:56` HTTPの仕組み｜GET・POSTリクエスト/ステータスコード/サーバー通信/ユーザエージェントなどの基礎を解説
    - `15:56` IPアドレスの仕組みとは🔰プライベートIP/パブリックIPやIPv6など、IPアドレスの基本を解説
    - `5:57` ポートとは？【TCP/IP基礎】｜プログラマー養成講座
    - `6:28` ドメイン、サーバーとは？ホームページの仕組みを解説😃これでDNSやIPアドレスもわかるようになる！
    - `6:24` WEBサーバーの仕組み入門｜ApacheやNginxなどWEBサーバーの基本を初心者向けに解説
    - `16:19` 【超入門】初心者向け レスポンシブデザイン完全攻略！メディアクエリ等解説【HTML・CSS コーディング】

### Excel

[CBC](https://cbc-study.com/)の基礎コースをやっていきましょう。  
Excelをお持ちでない方は、無料のOffice OnlineでもOKです。

- Microsoft Office Online (Excel)
  - <https://www.office.com/launch/excel>

```txt
■ GoogleスプレッドシートでのExcelファイル(.xlsx)の開き方
Googleマイドライブ → 「新規」 → 「ファイルのアップロード」→ アップロードしたファイルをダブルクリック

■ GoogleスプレッドシートでのExcelファイル(.xlsx)のダウンロード
「ファイル」→「ダウンロード」→「Microsoft Excel (.xlsx)」
```

- 基礎1（マークアップエンジニア 初級）
  - CBC基礎コースを読むだけです。
  - <https://cbc-study.com/training/basic/page1>
  - <https://cbc-study.com/training/basic/page2>
  - <https://cbc-study.com/training/basic/page3>
- 基礎2（マークアップエンジニア 中級）
  - <https://cbc-study.com/training/basic/page4>
  - <https://cbc-study.com/training/basic/page5>
  - `https://cbc-study.com/training/basic/page6` ※ page6はないようです。

### jQuery

- 基礎2（マークアップエンジニア 中級）#5 jQueryってなに？〜
  - <https://cbc-study.com/training/basic/page7>  
      → 「`02_basic/htdocs/kadai_07.html`」
  - <https://cbc-study.com/training/basic/page8>  
      → 「`02_basic/htdocs/kadai_08.html`」

**※ 基礎3（マークアップエンジニア 上級） は研修外とします。興味があれば自己学習でお願いします。**  
**※ `css/common.css` はindex.htmlにも使われているCSSファイルで、共通で使うスタイルを想定しています。**  
　**ページ固有のスタイルは入れないように注意しましょう（よくあるのが #change_btn 等のスタイルを入れてしまっている）。**

### マークアップエンジニア編課題

- 作成したエクセルファイル
  - 必須: 「`#2 エクセル関数（売上票を作る）`」、「`#3 エクセル関数（成績表を作る）`」
  - 任意: 「`#4 オートカレンダーを作る`」
- jQuery課題
  - 必須
    - 「`#7 簡単な機能をjQueryで実装しよう`」  
      → 「`02_basic/htdocs/kadai_07.html`」
    - 「`#8 変数を使う`」、「`#9 関数を使う`」、「`#10 コンソールでデータの確認`」、「`#11 モーダルウィンドウを作ろう`」  
      見た目も`kadai_07.html`と似せましょう。
      → 「`02_basic/htdocs/kadai_08.html`」

#### マークアップエンジニア編課題提出

以下を参照してください。

- [研修課題提出](https://github.com/epkotsoftware/training/blob/template/docs/submission/index.md#研修課題提出)

## フロントエンドエンジニア編

フロントエンドエンジニア編は課題提出がありますので予めご確認下さい。

- [研修課題提出](https://github.com/epkotsoftware/training/blob/template/docs/submission/index.md#研修課題提出)

フロントエンドエンジニア編ではCBCの応用コースをやっていきます。  
開発環境については以下の仮想環境を構築します。

### 仮想環境

まず仮想環境について学習しましょう。

- 仮想環境とは？
  - <https://bcblog.sios.jp/what-is-virtualenvironment-vmware/>
- Dockerやってる人向けのVagrant超入門
  - <https://qiita.com/nnishimura/items/b6fd4b665b25a411fbeb>

#### Docker

今回はコンテナ型の仮想化環境である「Docker」を使います。

- 動画
  - 【2021年最新】Docker環境構築入門｜14分でdocker-composeまで完全解説！【windows/mac対応】Dockerの使い方
    - <https://youtu.be/VIzLh4BgKck>

##### Dockerインストール

Docker Desktop をインストールしてください。

- [Docker Desktopインストール](./docker/install.md)

##### 構築手順

trainingリポジトリの [users/{★ユーザー名}/03_advanced/README.md](https://github.com/epkotsoftware/training/blob/template/users/_template/03_advanced/README.md) をご覧ください。

- コンテナ起動がうまくいかなかったらご連絡ください。
  - [Docker トラブルシューティング](./docker/troubleshoot.md)

### PHP入門

- 動画
  - <https://www.youtube.com/playlist?list=PLCX3wwS3Gg4wr82E46gEdFnT6VTo_uehr>
    - `10:01` サーバーサイドとは？サーバーサイドとクライアントサイド言語の違い
    - `1:02:33` PHPプログラミング入門講座🔰【初心者でも1時間で学べるPHP入門！フル字幕】
    - `4:05` セッション変数とは？【分かりやすい解説シリーズ #17】【プログラミング】

### PHP VSCode拡張機能

以下の導入を推奨します。  
「`PHP DocBlocker`」はPHPDocが必須の現場では重宝します。

- PHP Intelephense
  - コード補完・PSR-12コードフォーマット等、PHPに関する様々な機能が追加されます。
  - <https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client>
- PHP DocBlocker
  - 関数等のメンバーの上で「`/**`」を入力してEnterキーを押すだけで、自動的にPHPDocが生成されます。
  - <https://marketplace.visualstudio.com/items?itemName=neilbrayfield.php-docblocker>
  - PHPDocリファレンス
    - <https://zonuexe.github.io/phpDocumentor2-ja/references/phpdoc/index.html>

### CBC 応用

CBCと開発環境が異なるので、気を付けてください。  

- 応用1（フロントエンドエンジニア 初級）
  - <https://cbc-study.com/training/advanced/page1>
    - **MAMP、XAMPPは不要です！**
    - 環境はDockerで構築するため内容を確認するだけでOKです。
  - <https://cbc-study.com/training/advanced/page2>
  - <https://cbc-study.com/training/advanced/page3>
  - <https://cbc-study.com/training/advanced/page4>
    - **[②テーブルの作成](https://cbc-study.com/training/advanced/page4#pl-12) でアニメーションGifでは「`left_x`」、「`top_y`」カラムの NULL にチェックを入れ忘れているのでご注意ください（CREATE文で作成した場合は問題なし）。**
      ![cbc_sortable.png](./../image/cbc_sortable.png)
- 応用2（フロントエンドエンジニア 中級1）
  - <https://cbc-study.com/training/advanced/page5>
    - PDO(DB_DNS)設定について
      - CBCの設定(host)と異なりますのでご注意ください。[詳しくは03_advanced/README.md ～ PHP 参照](https://github.com/epkotsoftware/training/blob/template/users/_template/03_advanced/README.md#php)
        - `define('DB_DNS', 'mysql:host=mysql; dbname=cri_sortable; charset=utf8');`
  - <https://cbc-study.com/training/advanced/page6>
  - <https://cbc-study.com/training/advanced/page7>
  - <https://cbc-study.com/training/advanced/class1>

#### エラーが出た場合

- URL(パス)に誤りがないか確認しましょう。
- HTML側（`<input name="xxx">`）とPHP側（`$_POST['xxx']`）の名称が一致していることを確認しましょう。

### フレームワーク

- フレームワークとは
  - <https://www.otsuka-shokai.co.jp/words/framework.html>
- 動画
  - フレームワークとは？プログラミングに必須のフレームワークを初心者向けに解説！
    - <https://youtu.be/eTCjvTo5KgQ>

### フロントエンドエンジニア編課題

- 「フロントエンドエンジニア編」で作成したファイル

#### フロントエンドエンジニア編課題提出

以下を参照してください。

- [研修課題提出](https://github.com/epkotsoftware/training/blob/template/docs/submission/index.md#研修課題提出)  

## Linux編

LPIC等のLinux資格をお持ちの方は、こちらの研修は免除となります。  

Linuxコマンドについて学んでいきましょう。  
フロントエンドエンジニア編で作成した環境の[WEB Server](https://github.com/epkotsoftware/training/blob/template/users/_template/03_advanced/README.md#web-server)へ入ると操作が出来ます（OSはDebian）。  
[04_linux](https://github.com/epkotsoftware/training/tree/template/users/_template/04_linux) にUbuntu環境も用意しました（どちらもコマンドに大きい違いはありません）。
情報量が多く全て覚えるのは難しいので、「[vi](#vi)」までを2日、「[Linux模擬問題](#linux模擬問題)」を1日の計3日を目安としてください。

- Linux OS
  - Ubuntu
    - <https://www.ubuntulinux.jp/ubuntu>
  - Debian
    - <https://www.debian.or.jp/using/>
  - CentOS
    - <<https://www.centos.org/>
    - 「CentOS Linux」は開発終了となり、今後は「CentOS Stream」に移行。
    - Comparing Centos Linux and CentOS Stream
      - <https://www.centos.org/cl-vs-cs/>
    - 「CentOS Stream 9」、ダウンロード提供が開始
      - <https://japan.zdnet.com/article/35180408/>
  - 12月Webサイト向けLinuxシェア、Ubuntuの増加傾向続く
    - <https://news.mynavi.jp/techplus/article/20211203-2211480/>
- 動画
  - <https://youtube.com/playlist?list=PLCX3wwS3Gg4zOMS9ezkea4tDt5U7s2yRa>
    - `13:03` Linuxコマンドの使い方入門｜CUIとGUIの違いやシェルについて解説！【プログラマー必須スキル】
    - `6:31` シェルスクリプトとは？【分かりやすい解説シリーズ #68】【プログラミング】
    - `7:47` CRONとは？【分かりやすい解説シリーズ #64】【プログラミング】
- 初心者マークのUNIX/Linux
  - <https://www.creatology.jp/unix/>
  - UNIX/Linux コマンド「超」基本操作
    - <https://www.creatology.jp/unix/beginner.html>
  - UNIX/Linux 設定「超」基本知識
    - <https://www.creatology.jp/unix/settei.html>
  - 図解：標準入力、標準出力、標準エラー出力、パイプとは ?
    - <https://www.creatology.jp/unix/outin.html>
- 【bash入門】bashシェルスクリプトの書き方
  - <https://tech-blog.rakus.co.jp/entry/20210525/shellscript>
  - bashの実行例

```bash
root@training-web:/var/www/html# # hoge.sh を作成
root@training-web:/var/www/html# cat << 'EOF' > hoge.sh
> #!/bin/bash
>
> NUM=8
> MESSAGE=Hello_bash
>
> echo $NUM
> echo $MESSAGE
> EOF
root@training-web:/var/www/html# # hoge.sh をテキスト表示
root@training-web:/var/www/html# cat hoge.sh
#!/bin/bash

NUM=8
MESSAGE=Hello_bash

echo $NUM
echo $MESSAGE
root@training-web:/var/www/html# # hoge.sh を実行
root@training-web:/var/www/html# bash hoge.sh
8
Hello_bash
root@training-web:/var/www/html# 
```

- 初心者必見！よく使うLinuxコマンド一覧表【全33種】
  - <https://www.sejuku.net/blog/5465>
- ターミナルソフト（今の所、研修では使用しない）
  - RLogin
    - <https://kmiya-culti.github.io/RLogin/>
  - Tera Term
    - <https://forest.watch.impress.co.jp/library/software/utf8teraterm/>
  - ターミナルソフトはTeratermよりRLoginがおすすめの理由
    - <https://infrasenavi.com/mibunrui/361>

### シェル実行の注意点

UbuntuやDebianでシェルを実行する際に「`sh "ファイル名"`」で実行すると「`bash`」ではなく「`Debian Almquist shell(dash)`」で実行されます。  
「`#!/bin/bash`」の記載があるシェルを実行する際は、「`bash "ファイル名"`」で実行します。  

```bash
bash hoge.sh
```

Debian(Ubuntu)の「`/bin/sh`」のシンボリックリンクが「`/bin/dash`」になっているため  
このようなことが発生します。  

### vi

vi（ヴィーアイ）はLinuxのテキストエディタです。  
サーバー上のcronやコンフィグファイル等の修正を行うことがあるので  
適当なテキストファイルを配置し、実際に編集してみましょう。

- Linuxの標準エディタvi(vim)の超基本的な使い方！動画で初心者にもわかりやすく解説！
  - <https://blog.proglus.jp/4194/>

### Linux模擬問題

Linux技術者認定試験(LPIC)の一部にチャレンジしてみましょう。  
問題数が多く、現場ではほぼ使用しないものもあるため1日で出来る範囲でOKです。  
全問正解する必要はありませんが、答えの解説はしっかり確認してください。

- LPIC模擬問題
  - <https://lpic-study.com/>
    - LPIC102 シェル、スクリプト、およびデータ管理の問題
      - <https://lpic-study.com/exam/LPIC+102-no_1-next.php>
    - LPIC101 GNUとUnixのコマンド **※ 問題数が多いため出来るところまで**
      - <https://lpic-study.com/exam/LPIC+101-GNUとUnixのコマンド-no_1-next.php>

## 開発手法編

- 動画
  - ウォーターフォール型の開発手法とは？要件定義・基本設計などシステム開発の進め方を解説！
    - <https://youtu.be/qVsRGd2bvcU>
  - アジャイル開発入門！スクラムで実践するアジャイル開発のやり方と勉強法とは
    - <https://youtu.be/Jm3I6QXzjXw>
- 基本情報技術者試験で問われるシステム開発手法の解説！
  - <https://www.foresight.jp/fe/column/system-development-method/>

## 設計編

- システム設計の流れ｜基本設計と詳細設計の違いや、設計書の書き方を解説！
  - <https://youtu.be/OXJtc_aBm9M>
- システム設計とは？基本情報技術者試験の重要用語解説！
  - <https://www.foresight.jp/fe/column/system-design/>
- DB設計
  - データベース入門講座
    - <https://www.youtube.com/playlist?list=PL-1KBX2gDRujQaRgEByueezHBiqHP8KDD>
  - テーブル定義書サンプル
    - SQLクライアントソフトの「`A5:SQL Mk-2`」を使い、データベースからテーブル定義書を自動出力したサンプルです。  
      フロントエンドエンジニア編で作成したテーブルの定義書になります。
      - [テーブル定義書.xlsx](./files/テーブル定義書.xlsx)
      - [テーブル定義書.pdf](./files/テーブル定義書.pdf) （ExcelをPDF変換したもの）
  - 基本情報技術者試験の鬼門であるデータベースの正規化について解説
    - <https://www.foresight.jp/fe/column/normalization/>
- 設計書テンプレート
  - テンプレートが多くありますが現場で使うのは「基本設計」・「詳細設計書」になります。  
    基本設計では「テーブル定義書」「画面レイアウト」は、ほぼ確実に現場で見ることになります。
  - 設計書仕様書テンプレート PocketDOC
    - <https://pocket9.net/pocketdoc>
- UML
  - UMLとは？クラス図・シーケンス図など種類や書き方、ツールを解説！【統一モデリング言語】UML入門
    - <https://youtu.be/EvO_BvCJUCA>
  - diagrams.net（Draw.io）
    - こちらで無料で図の作成が可能です。
    - <https://app.diagrams.net/>
  - PlantUML
    - こちらでもシーケンス図やER図等の作成が可能です。
      - コードを書いて作成するため、細かいレイアウト調整は難しいですが、簡易的な図を作成する場合に有用です。
      - SVG形式で出力することで、リンクも使用でき。Markdownでの設計書作成時に使われる事がある。
    - <https://plantuml.com/ja/>
    - サンプル: 別ページに現場で使用経験のあるものを集めました。
      - [PlantUML](./training_plantuml.md)

### 画面設計

画面に使用する部品は覚えておきましょう。

- 画面部品
  - [画面部品](./design/forms/forms.html)

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

### 設計例

こちらを参考にしてください。

- [Laravel CRUD 設計](./laravel/crud/design/index.md)

※ Laravel CRUDの開発は今後の学習で行いますので、飛ばしてください。

## テスト編

PHPUnit・Laravelに関しては、現場で採用されることもありますが  
今は詳細なところまで学習する必要はありません。  

- 動画
  - <https://www.youtube.com/playlist?list=PLCX3wwS3Gg4woCtbeXq9KTT4_HevW-vVz>
    - `11:58` テスト入門講座01 テストの概要・流れ・前提知識
    - `13:42` テスト入門講座02 テストケース設計のコツ・ポイント
    - `6:58` テスト入門講座03 テストデータ作成のコツ・ポイント
    - `9:13` テスト入門講座04 テスト自動化！JUnitの使い方
    - `19:24` テスト入門講座05 バッチ処理のテスト自動化！生産性を劇的に上げるDBUnitの使い方
    - `10:51` 【開発実況シリーズ】Web日報登録システムを作る #17 検証フェーズ編【プログラミング】
- システム開発におけるテストとは？基本情報技術者試験の重要用語解説！
  - <https://www.foresight.jp/fe/column/conducting-test/>

動画内でJavaの場合は「JUnit」を使っていますが  
PHPでは「PHPUnit」を使用します。  

以下の資料を流し読みして、イメージだけしておきましょう。  
実践についてはカリキュラム終了後の自己学習でお願いします。  

- 8時間耐久PHPUnitの教室
  - <https://www.slideshare.net/yandod/8phpunit>

ブラックボックステスト・ホワイトボックステストについては理解を深めておきましょう。

- 動画
  - ブラックボックステストとは
    - <https://youtu.be/05iyTsuhahk>
  - ホワイトボックステストとは？ブラックボックステストとの違い
    - <https://youtu.be/H__gN5Jpuvk>
- 「ブラックボックステスト」と「ホワイトボックステスト」の違い
  - <https://medium-company.com/ブラックボックス-ホワイトボックス-違い/>

## ファイル編

画像ファイルやCSV等のファイルについて学習します。

- [ファイル編](./file/index.md)

## セキュリティ編

セキュリティについて学習していきます。  
いずれも開発で求められる知識になります。  
  
参考コードとして載せている処理については、現場では既に用意されていたり  
フレームワークを使用していることが多いので、参考程度に見ておきましょう。

- 動画
  - <https://youtube.com/playlist?list=PLCX3wwS3Gg4xfAHP_c5aGDzfO7r22u-ed>
    - `6:21` バリデーションとは何なのか、現役エンジニアが解説【超入門編】
    - `3:34` 【初心者向け】ハッシュ化と暗号化の違いとは？不可逆変換とは？
    - `7:27` CSRFとは？ サイバー攻撃＆対策【分かりやすい解説シリーズ #58】【プログラミング】
    - `8:03` SQLインジェクション【サイバー攻撃＆対策】【分かりやすい解説シリーズ #60】【プログラミング】
    - `8:09` SSHとは？【分かりやすい解説シリーズ #65】【プログラミング】
    - `4:56` 公開鍵認証とは？【分かりやすい解説シリーズ #24】【プログラミング】
- 基本情報技術者試験で問われる情報セキュリティの基本を解説！
  - <https://www.foresight.jp/fe/column/information-security/>

## バックエンド編

バックエンド編課題は課題提出がありますので予めご確認下さい。

- [研修課題提出](https://github.com/epkotsoftware/training/blob/template/docs/submission/index.md#研修課題提出)

バックエンド編ではCBCの実践（バックエンド Laravel）をやっていきます。  
開発環境についてはフロントエンドエンジニア編と同様に以下、Dockerで構築します。

### Laravel開発環境構築

trainingリポジトリの [users/{★ユーザー名}/05_laravel/README.md](https://github.com/epkotsoftware/training/blob/template/users/_template/05_laravel/README.md) をご覧ください。

### CBC 実践（バックエンド Laravel）

LaravelのバージョンがCBCと異なるため、一つ一つコードを理解して進めましょう。  
  CBC → Laravel6(2022/09/06にセキュリティ修正終了)  
  EPKOT → Laravel9  

- `#1`～`#3` は環境構築になりますがDockerで構築済みのため、読み込みだけ行います。
  - <https://cbc-study.com/training/backend/laravel1>
- `#4`～`#9` は手順通り進めてみましょう。
  - 注意
    - RoutingについてはLaravel6は手法が古いため、以下で学習し実装してください（「`#7 Laravelでデータベースのデータを表示する方法`」の手法が古いです）。
      - [ルーティング](./laravel/routing/index.md)
    - 「`Target class [SortableController] does not exist.`」のエラーが出る  
      - [名前空間](./programming/php/namespaces/index.md) について学習して下さい、「use」を使用します。
    - ディレクトリ構成がCBCと違うので読み替えてください。
      - 「`CBC_Laravel/resources/views/`」の場合、「`05_laravel/app/resources/views/`」
    - Laravel9では、Modelクラスが追加される個所が変わります。
      - 「`05_laravel/app/app/Models`」ディレクトリ内に追加され、名前空間(namespace)も変わります。
  - <https://cbc-study.com/training/backend/laravel2>
  - <https://cbc-study.com/training/backend/laravel3>
  - <https://cbc-study.com/training/backend/laravel4> (`#9`まで)
- `#10` からの「タスク管理ツール」ですが、同一プロジェクト・DBに作ってみましょう。
  - <https://cbc-study.com/training/backend/laravel4#s10>
  - 「前準備」は飛ばしましょう。
  - マイグレーションを使ってDB(cbc_laravel)に「tasks」テーブルを作成してください。
  - Routingについては以下で「タスク管理ツール」にアクセスできるようにしてください。
    - <http://localhost:8026/task>

### バックエンド編課題

#### バックエンド編課題題提出

以下を参照してください。

- [研修課題提出](https://github.com/epkotsoftware/training/blob/template/docs/submission/index.md#研修課題提出)  

この時点でのレビュー依頼は不要です。  
[バージョン管理システム編](#バージョン管理システム編) にて、PR(Pull Request)の確認で行うため、そのまま次へお進みください。  

## バージョン管理システム編

ここまでバージョン管理システムとしてGit + GitHubを使用してきました。  
他にもSubversion（SVN）等があり、現在でも使われている現場が多いです。  
運用方法についても現場によって様々ですが、一般的なgit flow等の動画も紹介します。

- 動画
  - バージョン管理ツールの2大勢力！Git VS SVN
    - <https://youtu.be/jOFSn59q6IY>
  - 【Git入門】Git + Github使い方入門講座🐒Gitの仕組みや使い方を完全解説！パーフェクトGit入門！
    - <https://youtu.be/LDOR5HfI_sQ>
  - イケてるgitのブランチ運用｜git flowとgithub flowとは！？
    - <https://youtu.be/0ge7ZJQvYLw>

Git で `master` という名称のブランチが使われていることが多いですが  
現在では `main` がデフォルトとなっています。

- Twitter、コードやドキュメント内の用語「Whitelist/Blacklist」「Master/Slave」「Dummy value」などを好ましい用語へ置き換え、具体例も発表
  - <https://www.publickey1.jp/blog/20/twitterwhitelistblacklistmasterslavedummy_value.html>

### バージョン管理システム編課題

ここまで課題をアップしてきた自分のFeatureブランチを  
`main` ブランチへマージするPR(Pull Request)を出しましょう。

- 「Compare changes」画面
  1. <https://github.com/epkotsoftware/training/compare/main...feature/{user}>
  1. ブランチを `base: main ← compare: feature/{★ユーザー名}` に設定してください。
  1. 「Create pull request」ボタンを押下してください。「Open a pull request」画面に遷移します。
- 「Open a pull request」画面
  1. 「Title」を「【バージョン管理システム編課題】」等、適当に入力してください。
  1. 「Reviewers」講師を選択しましょう。
  1. 「Assignees」に自分を選択しましょう。
  1. 「Create pull request」ボタンを押下してください。
- 研修講師へ、レビュー依頼をしてください。
- 問題なければ研修講師がマージ＆Featureブランチを削除します。
  - 今後もtrainingリポジトリの自分のユーザーディレクトリを使用したい場合は`main`ブランチをお使いください。

## Git編

Gitについて、より深く学んでいきます。  
別資料で用意していますので、以下を参照してください。  

- [Git編](./git/index.md)

## PHPプログラミング編

プログラミングの基礎について、より深く学んでいきます。  
別資料で用意していますので、以下を参照してください。  
こちらは課題の提出はありません。

- [PHPプログラミング編](./programming/php/index.md)

## 1対1PG研修

講師によるプログラミング研修です。  
講師がスケジュール調整をしますので、次のカリキュラムに進んでください。

## データベース編

フロントエンドエンジニア編等で使ったDocker環境に  
MySQL・phpMyAdmin環境が入っているので、練習してみましょう。

- 基本情報技術者試験で覚えておきたいSQL文の基本構文について
  - <https://www.foresight.jp/fe/column/sql/>
- 動画
  - SQL入門講座
    - <https://www.youtube.com/playlist?list=PLs3eD4QT7ow6mguoDEUsS-dRbzf_nkeei>
      - `1:02:14`【SQL入門講座 合併版】SQLの基本をたった1時間で学べます【初心者向けデータベース入門】
      - `15:34` 小学生でもわかるSQLの基本【SQL講座①】
      - `8:22` 小学生でもわかるSQLのGROUP BYと集計関数【SQL講座②】
      - `11:49` 小学生でもわかるSQLのテーブル結合【SQL講座③】
      - `8:21` 小学生でもわかるSQLのCASE式【SQL講座④】
      - `11:56` 小学生でもわかるサブクエリ【SQL講座⑤】
      - `6:46` 知らないと恥をかくIT用語「SQL」を解説！DBとの違いを説明できますか？
  - 【MySQL入門決定版】2時間半で学ぶ初心者向けMySQLデータベースチュートリアル【MySQLの基本とSQLの基礎文法の徹底的にマスター】
    - <https://youtu.be/kKMm1acGt3I>
  - こんな設計してない？ダメな理由を知って良い設計にしていこう！DB設計・SQLアンチパターン
    - <https://youtu.be/CephPUUS09k>
    - 補足
      - アンチパターンとはなっていますが、状況によってはアンチパターンを採用することもある事は覚えておきましょう。
      - IDリクワイアド
        - 昔はナチュラルキー（idカラムは使わない）のパターンが多かったんですが  
          最近ではサロゲートキーを設けるパターンが多くなりました。  
          サロゲートキーを採用しないデメリットとして、フレームワークやシステムなどに対応していなかったり  
          コード体系の変更（例:品目CDの先頭をIからCIに変更する）に弱く、サロゲートキーを採用しなかったことによる失敗は実際に多くみてきました。  
          サロゲートキーを追加する改修も何度か経験しています。
        - サロゲートキーを設ける際、動画のパターンだと「受注ID」、「品目CD」はユニーク制約を設ける必要があります。
      - キーレスエントリ
        - 経験上データベースに外部キーを設定するパターンはかなり少なかったです。  
          通常問題はありませんが、テーブルに大きい変更の必要がある際に外部キーを設定していたことにより  
          対象外のレコードを更新する必要が出たりと手間・時間がかかることがあります。  
- SQL練習問題 – 一覧まとめ
  - <https://tech.pjin.jp/blog/2016/12/05/sql練習問題-一覧まとめ/>

## カリキュラム終了

新人研修の必須科目としては以上となります。  
これからは面談対策・自己学習に入っていきます。

### 面談

#### 内部開発

内部開発の資料は以下にまとめています。  
アクセス出来ない場合は講師までお問い合わせください。  

- <https://github.com/epkotsoftware/training#社内開発>

#### 面談対策

面談時に聞かれそうなことや、実際に聞かれたこと  
用語等を資料にまとめました。

- [面談](./interview.md)

以下、準備を進めましょう。

- 面談資料について読み込んでおくこと
  - [開発手法編](#開発手法編)、[設計編](#設計編)も復習しておくこと（実際の面談でも聞かれることが多いため）
- 経歴について説明できるようになっておくこと
- スキルシート(ファイル)
  - 営業との作戦会議後の時点で紙媒体でしかもらっていない場合、社長・営業に問い合わせてください。

面談練習をしたい方は講師・営業までお願いします。  
面談を案件がまだ、決まっていない方はPHP・Laravel等の現場を想定して行います。

#### 案件例

| 案件 | 社内システムの画面改修 |
| --- | --- |
| 内容 | 画面周りの開発、テスト |
| 工程 | 開発、テスト |
| 必要スキル | PHP、Laravelでの開発経験 |

### Laravel CRUD

LaravelでのCRUD機能を作成出来るレベルまで学習しましょう。  
※ **作成中の部分もあるため、カリキュラム外となっていますが、今後カリキュラムに組み込み予定です。**

- [Laravel CRUD](./laravel/crud/index.md)

### 内部開発再現

Laravelの学習を活かし  
実際に設計書・画面イメージ等から再現しましょう。  

- <https://github.com/epkotsoftware/training#社内開発>

### 自己学習

ここまでのカリキュラムの復習をしたら  
自己学習に進みましょう。

- [自己学習](./../self-learning/index.md)
