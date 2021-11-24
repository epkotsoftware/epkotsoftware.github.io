# 株式会社エプコットソフトウェア ～ 新人研修

## 入社された方へ

入社初日は以下の作業をお願いします。  
翌営業日から[カリキュラム](#カリキュラム)に入ります。

### 入社初日の作業

| No. | 作業 |
| :---: | --- |
| 1 | [Discordの会社用アカウント作成](#discordの会社用アカウント作成) |
| 2 | [GitHub組織アカウントへの参加](#github組織アカウントへの参加) |
| 3 | [予習](#予習) |

#### Discordの会社用アカウント作成

**※ 今後、「Discord」ではなく「Microsoft Teams」の使用を検討しています。**  
  
 会社用アカウントと言っても、会社メールアドレスで作成していただくだけなので  
通常のアカウント作成と変わりません。  
作成しましたら、研修用のグループに招待しますので研修担当者にご連絡ください。  
Discordはパソコンにインストールし、ビデオ通話・画面共有、研修の進捗報告・質問等に使用する予定です。

- Discord
  - <https://discord.com/>
  - 画面共有設定
    - Mac
      - 「システム環境設定」→「セキュリティとプライバシー」  
        →「プライバシー」タブ→「画面収録」→対象アプリにチェック
        - <https://moji-seikatsu.net/2021/04/03/macdiscord/>

#### GitHub組織アカウントへの参加

- 「[GitHub組織アカウントへの参加](./../github.md)」参照

#### 予習

- 「[新人研修に参加する方へ](./index.md)」で予習を行ってください。
  - 「[パソコンが不慣れな方へ](./index.md#パソコンが不慣れな方へ)」は必須知識になります（時間が足りない場合はご相談ください）。
  - 「`パソコンが不慣れ`」の定義として、以下のいずれかに該当する場合とします。
    - 基本操作が出来ない。
    - ファイル・フォルダがわからない。
    - 保存するショートカットキーがわからない。
    - コピー・ペーストのショートカットキーがわからない。
    - ひとつ前に戻るショートカットキーがわからない。
    - パソコン画面のスクリーンショットを撮る方法がわからない。
    - 拡張子が何かわからない。

## カリキュラム

| No. | 日数 | 内容 |
| :---: | --- | --- |
| 1 | - | [`はじめに`](#はじめに) |
| 2 | - | [`準備`](#準備) |
| 3 | - | [`コーダー編`](#コーダー編) |
| 4 | - | [`マークアップエンジニア編`](#マークアップエンジニア編) |
| 5 | - | [`フロントエンドエンジニア編`](#フロントエンドエンジニア編) |
| 6 | 3.0 | [`Linux編`](#linux編) |
| 7 | 0.5 | [`コーディング規約編`](#コーディング規約編) |
| 8 | - | [`開発手法編`](#開発手法編) |
| 9 | - | [`設計編`](#設計編) |
| 10 | - | [`テスト編`](#テスト編) |
| 11 | - | [`ファイル編`](#ファイル編) |
| 12 | - | [`セキュリティ編`](#セキュリティ編) |
| 13 | - | [`バージョン管理システム編`](#バージョン管理システム編) |
| 14 | 20 | [`自己学習`](#自己学習) |

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

### 休止時間

ほぼ全てがPCを使った研修となるため  
VDT症候群予防の観点から、1時間連続でPC上で作業した場合、10分程度の休止時間(ディスプレイを見ない時間)を設けましょう。  
休止時間の使い方はお任せします（情報整理、書籍での学習、小休憩、運動等）  

上記の休止時間を考慮して、1日の研修時間は**8.0h**ではなく**6.5h**程度が目安です。

## 準備

### PC設定・インストール

- 「[新人研修に参加する方へ（PC設定・インストール）](./index.md#pc設定)」参照

### Git設定確認

[GitHub ～ Git設定確認](./../github.md#git設定確認) の設定が漏れていると  
コミットが失敗しますので再度ご確認ください。

### ユーザーディレクトリ作成

開発環境を構築し、プログラムファイルを格納するための  
ブランチ(`feature/{★ユーザー名}`)及び、個人フォルダー（ディレクトリ）を作成します。  
詳しくは [研修用リポジトリ(training)](https://github.com/epkotsoftware/training) のREADMEをご覧ください。  

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

## コーダー編

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
    - 横幅:`1000px` で表示が崩れないようにする。
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
  - Width: 1000
  - Height: 620
  - Device pixel ratio: 1
  - User agent string: 未入力
  - User agent type: Desktop

### コーダー編課題GitHubアップロード

VSCodeでのアップ方法は以下を参考にしてください。

- Gitクライアントはもういらない！ VSCodeで、Gitを使いこなそう (3:09～)
  - <https://youtu.be/vMZ0C06soxA?t=189s>

#### アップ先

trainingリポジトリの [users/{★ユーザー名}/01_beginner/README.md](https://github.com/epkotsoftware/training/blob/template/users/_template/01_beginner/README.md) にアップ先が記載されています。  

- アップ方法 (OR)
  - VSCodeで行う（コマンドと比べると簡単）。
  - `Git Bash` でコマンドで行う。
- 禁止事項
  - 自分のユーザーディレクトリ以外のコミットを禁止（`users/_template` 内のファイル等）
  - GitHub上でのアップロードは禁止します（Gitの学習を兼ねているため）

Git・GitHubについては、「[バージョン管理システム編](#バージョン管理システム編)」で深く学習します。

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

- 動画
  - <https://youtube.com/playlist?list=PLCX3wwS3Gg4y99r2bSBpir2nmMv4rzfcL>
    - `12:56` HTTPの仕組み｜GET・POSTリクエスト/ステータスコード/サーバー通信/ユーザエージェントなどの基礎を解説
    - `15:56` IPアドレスの仕組みとは🔰プライベートIP/パブリックIPやIPv6など、IPアドレスの基本を解説
    - `5:57` ポートとは？【TCP/IP基礎】｜プログラマー養成講座
    - `6:28` ドメイン、サーバーとは？ホームページの仕組みを解説😃これでDNSやIPアドレスもわかるようになる！
    - `6:24` WEBサーバーの仕組み入門｜ApacheやNginxなどWEBサーバーの基本を初心者向けに解説
    - `16:19` 【超入門】初心者向け レスポンシブデザイン完全攻略！メディアクエリ等解説【HTML・CSS コーディング】

[CBC](https://cbc-study.com/)の基礎コースをやっていきましょう。  
Excelをお持ちでない方はGoogleスプレッドシートやOffice OnlineでもOKです（それぞれアカウントが必要）

- Googleマイドライブ
  - <https://drive.google.com/drive/my-drive>
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
  - <https://cbc-study.com/training/basic/page7>
  - <https://cbc-study.com/training/basic/page8>

**※ 基礎3（マークアップエンジニア 上級） は研修外とします。興味があれば自己学習でお願いします。**

### マークアップエンジニア編課題

- 作成したエクセルファイル
- jQuery課題

trainingリポジトリの [users/{★ユーザー名}/02_basic/README.md](https://github.com/epkotsoftware/training/tree/template/users/_template/02_basic/README.md) にアップ先が記載されています。

## フロントエンドエンジニア編

[CBC](https://cbc-study.com/)の応用コースをやっていきます。  
開発環境については仮想環境を構築します。

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

- `Docker Desktop`
  - <https://www.docker.com/products/docker-desktop>

##### 構築手順

trainingリポジトリの [users/{★ユーザー名}/03_advanced/README.md](https://github.com/epkotsoftware/training/blob/template/users/_template/03_advanced/README.md) をご覧ください。

### PHP入門（動画）

- サーバーサイドとは？サーバーサイドとクライアントサイド言語の違い
  - <https://youtu.be/okwLKI6eYbQ>
- PHPプログラミング入門講座🔰【初心者でも1時間で学べるPHP入門！フル字幕】
  - <https://youtu.be/J_pASVQXElA>

### CBC 応用

- 応用1（フロントエンドエンジニア 初級）
  - <https://cbc-study.com/training/advanced/page1> ※ 環境はDockerで構築するため内容を確認するだけでOKです。
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

trainingリポジトリの [users/{★ユーザー名}/03_advanced/README.md](https://github.com/epkotsoftware/training/blob/template/users/_template/03_advanced/README.md) にアップ先が記載されています。

## Linux編

Linuxコマンドについて学んでいきましょう。  
フロントエンドエンジニア編で作成した環境の[WEB Server](https://github.com/epkotsoftware/training/blob/template/users/_template/03_advanced/README.md#web-server)へ入ると操作が出来ます。  
情報量が多く全て覚えるのは難しいので、「[vi](#vi)」までを2日、「[Linux模擬問題](#linux模擬問題)」を1日の計3日を目安としてください。

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
root@training-web:/var/www/html# sh hoge.sh
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

## コーディング規約編

3時間を目安に学習してください。
  
現場に入ると、コーディング規約が設けられている事が多いです  
一般的なコーディング規約のリンクをまとめました。  
  
現場ではベースになるコーディング規約 + α になることが多いかと思います。  
現場が決まっていない場合は、PHPのコーディング規約を見て  
わからないところが出てきたら調べてみましょう。
  
ベテランでも意味を理解していなかったり、違反する事が多いので  
今は「こういうのがあるんだ」程度の理解で大丈夫です。

- PHP
  - PSR （Laravelが採用しているコーディング規約）
    - PSR-1: Basic Coding Standard
      - <https://www.php-fig.org/psr/psr-1/>
    - PSR-4: Autoloader
      - <https://www.php-fig.org/psr/psr-4/>
    - PSR-12: Extended Coding Style
      - <https://www.php-fig.org/psr/psr-12/>
  - PSRは全て英語なので、日本語にしたい場合はブラウザの翻訳を使うか、翻訳しているサイトをご覧ください。
    - 個人によるPSRの日本語訳
      - <https://github.com/thatblue/fig-standards>
- C#
  - コーディングスタイル(Microsoft公式)
    - 識別子名
      - <https://docs.microsoft.com/ja-jp/dotnet/csharp/fundamentals/coding-style/identifier-names>
    - C# のコーディング規則
      - <https://docs.microsoft.com/ja-jp/dotnet/csharp/fundamentals/coding-style/coding-conventions>
- Visual Basic(`VB.Net`)
  - プログラム構造とコード規則(Microsoft公式)
    - <https://docs.microsoft.com/ja-jp/dotnet/visual-basic/programming-guide/program-structure/program-structure-and-code-conventions>
- Java
  - Javaコーディング規約
    - <https://future-architect.github.io/coding-standards/documents/forJava/Javaコーディング規約.html>
- Swift
  - Swift Style Guide(Google公式)
    - <https://google.github.io/swift/>

## 開発手法編

- ウォーターフォール型の開発手法とは？要件定義・基本設計などシステム開発の進め方を解説！
  - <https://youtu.be/qVsRGd2bvcU>
- アジャイル開発入門！スクラムで実践するアジャイル開発のやり方と勉強法とは
  - <https://youtu.be/Jm3I6QXzjXw>

## 設計編

- システム設計の流れ｜基本設計と詳細設計の違いや、設計書の書き方を解説！
  - <https://youtu.be/OXJtc_aBm9M>
- DB設計
  - データベース入門講座
    - <https://www.youtube.com/playlist?list=PL-1KBX2gDRujQaRgEByueezHBiqHP8KDD>
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

### アプリ画面設計

以下、参考程度にご覧ください。  
特にiOSアプリはデザインで審査が通らなくなるケースもあるので  
画面設計時は注意が必要です（実際に手戻りが発生した事がありました）。

- iOS
  - ユーザーインターフェイスのデザインのヒント
    - <https://developer.apple.com/jp/design/tips/>
  - Human Interface Guidelines
    - <https://developer.apple.com/design/human-interface-guidelines/>
- Android
  - Android 向けのデザイン
    - <https://developer.android.com/design?hl=ja>
- マテリアルデザイン
  - <https://material.io/design>
  - <https://material.io/develop>

## テスト編

- 動画
  - <https://www.youtube.com/playlist?list=PLCX3wwS3Gg4woCtbeXq9KTT4_HevW-vVz>
    - `11:58` テスト入門講座01 テストの概要・流れ・前提知識
    - `13:42` テスト入門講座02 テストケース設計のコツ・ポイント
    - `6:58` テスト入門講座03 テストデータ作成のコツ・ポイント
    - `9:13` テスト入門講座04 テスト自動化！JUnitの使い方
    - `19:24` テスト入門講座05 バッチ処理のテスト自動化！生産性を劇的に上げるDBUnitの使い方
- PHPUnit
  - <https://phpunit.readthedocs.io/ja/latest/>
  - テストダブル
    - <https://phpunit.readthedocs.io/ja/latest/test-doubles.html>
- Laravel
  - Laravel テスト
    - <https://readouble.com/laravel/8.x/ja/>
    - Laravel データベーステスト
      - <https://readouble.com/laravel/8.x/ja/database-testing.html>
    - Laravel モック
      - <https://readouble.com/laravel/8.x/ja/mocking.html>
  - Mockery
    - <https://readouble.com/mockery/1.0/ja/>

## ファイル編

XML・CSV・JSON・画像(JPG・PNG・GIF・WEBP・SVG) について学習しましょう。

- 動画
  - <https://youtube.com/playlist?list=PLCX3wwS3Gg4yh-k4eOBoRq1Muco5ianO8>
    - `8:07` XMLとは？8分でわかるXML形式データの使い方入門
    - `11:48` CSVファイルとは？CSV形式の基本から作成方法を完全解説！
    - `8:04` JSONとは？8分でわかるJSON形式データの使い方入門
    - `20:10` Webやブログで重要なJPG・PNG・WEBPなどの【画像拡張子】の特徴や違い＆その使い方を徹底解説！

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
- PHP
  - PHPマニュアル 安全なパスワードハッシュ
    - <https://www.php.net/manual/ja/faq.passwords.php>
  - PHPマニュアル password_hash
    - <https://www.php.net/manual/ja/function.password-hash.php>
  - PHPマニュアル openssl_encrypt
    - <https://www.php.net/manual/ja/function.openssl-encrypt.php>
  - 参考コード
    - [Illuminate\Hashing\BcryptHasher::make](https://github.com/illuminate/hashing/blob/master/BcryptHasher.php)
    - [Illuminate\Encryption\Encrypter::encrypt](https://github.com/illuminate/encryption/blob/master/Encrypter.php)
- Laravel
  - Laravel 基礎、安全、データベース
    - <https://readouble.com/laravel/8.x/ja/>
    - Laravel ハッシュ
      - <https://readouble.com/laravel/8.x/ja/hashing.html>
    - Laravel 暗号化
      - <https://readouble.com/laravel/8.x/ja/encryption.html>
    - Laravel CSRF保護
      - <https://readouble.com/laravel/8.x/ja/csrf.html>
    - Laravel データベース：クエリビルダ
      - <https://readouble.com/laravel/8.x/ja/queries.html>

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
- 研修講師へSlack・Discord等でレビュー依頼をしてください。
- 問題なければ研修講師がマージ＆Featureブランチを削除します。
  - 今後もtrainingリポジトリの自分のユーザーディレクトリを使用したい場合は`main`ブランチをお使いください。

## 自己学習

新人研修の必須科目としては以上となります。  
ここからは決められた研修や課題等はありませんので  
各自で目標を決めて学習をしてください。

- これまで学習したことの復習、更に深い学習。
- CBCで未着手の学習
  - CBC 基礎3（マークアップエンジニア 上級）等
- 伸ばしたいスキルの学習
  - フロントエンド
  - バックエンド
  - フレームワーク (Laravel、Ruby on Rails等)
  - 言語 (Java、C#、Python、Swift、Ruby等)
- 現場で求められる技術の学習（現場が決まった場合）

何を学習したら良いかわからないという場合、研修講師にご相談ください。  
現場に入った後でもサポート致します。  

### 別チームの研修

別チームの研修情報はスプレッドシートにまとめてあります  
Laravel課題等もありますので興味がある方は研修講師まで
