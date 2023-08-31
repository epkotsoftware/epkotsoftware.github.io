# Linux編

## はじめに

LPIC（エルピック）、LinuC（リナック）等のLinux資格をお持ちの方は、こちらの研修は任意となります。  

Linuxコマンドについて学んでいきましょう。  
情報量が多く全て覚えるのは難しいので、「[用語](#用語)」までを2日、「[模擬問題](#模擬問題)」を1日の計3日を目安としてください。

## 環境構築

Dockerを使って構築可能です。  

- Ubuntu日本語環境の構築（Docker）
  - <https://zenn.dev/seiya0/articles/tech-docker-ubuntu-environment>

## 動画

- 動画
  - <https://youtube.com/playlist?list=PLCX3wwS3Gg4zOMS9ezkea4tDt5U7s2yRa>
    - `13:03` Linuxコマンドの使い方入門｜CUIとGUIの違いやシェルについて解説！【プログラマー必須スキル】
    - `6:31` シェルスクリプトとは？【分かりやすい解説シリーズ #68】【プログラミング】
    - `7:47` CRONとは？【分かりやすい解説シリーズ #64】【プログラミング】

## 資料

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

vi（ブイアイ）はLinuxのテキストエディタです。  
サーバー上のcronやコンフィグファイル等の修正を行うことがあるので  
適当なテキストファイルを配置し、実際に編集してみましょう。

- Linuxの標準エディタvi(vim)の超基本的な使い方！動画で初心者にもわかりやすく解説！
  - <https://blog.proglus.jp/4194/>

## 用語

以下の用語は覚えておきましょう。  
理解の目安としては、検索したら思い出せる程度の理解で良いので  
「**用語を聞いた（見た）時に何となく思い出せる**」、「**こういうことができる物があった気がする**」程度で問題ありません。

- [Linux (リナックス)](https://e-words.jp/w/Linux.html)
  - [Linuxディストリビューション](https://e-words.jp/w/Linux%E3%83%87%E3%82%A3%E3%82%B9%E3%83%88%E3%83%AA%E3%83%93%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3.html)
    - [Debian GNU/Linux (デビアン グヌーリナックス)](https://e-words.jp/w/Debian_GNU-Linux.html)
      - [Ubuntu Linux](https://e-words.jp/w/Ubuntu_Linux.html)
    - [CentOS (セントオーエス)](https://e-words.jp/w/CentOS.html) ※ 2024年6月30日サービス終了
    - CentOS Stream (セントオーエス ストリーム) [Google検索](https://www.google.com/search?q=CentOS+Stream)
- [CLI (シーエルアイ) (コマンドラインインターフェース)](https://e-words.jp/w/CLI.html)
- コマンド
  - pwd (ピーダブリューディー) (print working directory) [Google検索](https://www.google.com/search?q=Linux+pwd)
  - cd (シーディー) (change directory) [Google検索](https://www.google.com/search?q=Linux+cd)
  - ls (エルエス) [Google検索](https://www.google.com/search?q=Linux+ls)
  - [cp (シーピー) (copy)](https://e-words.jp/w/cp%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89.html)
  - mv (エムブイ) (move) [Google検索](https://www.google.com/search?q=Linux+mv)
  - rm (アールエム) (remove) [Google検索](https://www.google.com/search?q=Linux+rm)
  - mkdir (メイクディレクトリ) (make directory) [Google検索](https://www.google.com/search?q=Linux+mkdir)
  - touch (タッチ) [Google検索](https://www.google.com/search?q=Linux+touch)
  - [chmod (チェンジモード)](https://e-words.jp/w/chmod.html)
    - [パーミッション](https://e-words.jp/w/%E3%83%91%E3%83%BC%E3%83%9F%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3.html)
  - [cat (カット / キャット)](https://e-words.jp/w/cat%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89.html)
  - find (ファインド) [Google検索](https://www.google.com/search?q=Linux+find)
  - [grep (グレップ)](https://e-words.jp/w/grep.html)
  - [diff (ディフ)](https://e-words.jp/w/diff.html)
  - [wc (ダブリューシー)](https://e-words.jp/w/wc%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89.html)
  - [sed (セド)](https://e-words.jp/w/sed.html)
  - [curl (カール / シーユーアールエル)](https://e-words.jp/w/CURL.html)
  - [echo (エコー)](https://e-words.jp/w/%E3%82%A8%E3%82%B3%E3%83%BC.html)
  - [&#124; (パイプ)](https://e-words.jp/w/%E3%83%91%E3%82%A4%E3%83%97.html)
  - リダイレクト [Google検索](https://www.google.com/search?q=Linux+リダイレクト)
    - `<` (標準入力)
    - `>` (標準出力)
    - `>>` (標準出力（追記）)
    - `2>` (標準エラー出力)
    - `2>>` (標準エラー出力（追記）)
  - [/dev/null (デブヌル)](https://e-words.jp/w/-dev-null.html)
  - [awk (オーク)](https://e-words.jp/w/awk.html)
  - ps (ピーエス) [Google検索](https://www.google.com/search?q=Linux+ps)
  - [at (アット)](https://e-words.jp/w/at%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89.html)
  - [cron (クロン / クーロン / クローン)](https://e-words.jp/w/cron.html)
  - [make (メイク)](https://e-words.jp/w/make%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89.html)
  - [vi (ブイアイ)](https://e-words.jp/w/vi.html)
  - [sudo (スードゥー / エスユードゥー)](https://e-words.jp/w/sudo.html)
  - [bash (バッシュ / ビーエーシェル)](https://e-words.jp/w/bash.html)

## 模擬問題

Linux技術者認定試験(LPIC)の一部にチャレンジしてみましょう。  
問題数が多く、現場ではほぼ使用しないものもあるため1日で出来る範囲でOKです。  
全問正解する必要はありませんが、答えの解説はしっかり確認してください。

- LPIC模擬問題
  - <https://lpic-study.com/>
    - LPIC102 シェル、スクリプト、およびデータ管理の問題
      - <https://lpic-study.com/exam/LPIC+102-no_1-next.php>
    - LPIC101 GNUとUnixのコマンド **※ 問題数が多いため出来るところまで**
      - <https://lpic-study.com/exam/LPIC+101-GNUとUnixのコマンド-no_1-next.php>
