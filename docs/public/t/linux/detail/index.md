# Linux

## パス

- [パス](./../path/index.md)

## コマンド

## 開発で使うコマンド

| コマンド | 説明 | 実行例 | 備考 |
| --- | --- | --- |
| pwd | カレントディレクトリパス表示 | `pwd` | pwd (ピーダブリューディー、print working directory) |
| cd | カレントディレクトリ変更 | 「dir1」ディレクトリに変更する例<br>`cd dir1` | cd (シーディー、change directory) |
| ls | ディレクトリ内のファイル・ディレクトリ一覧表示 | `ls -l` | ls（エルエス） |
| mkdir | ディレクトリの作成 | 「dir1」ディレクトリ作成例<br>`mkdir dir1` |  |
| rm | ファイル・ディレクトリの削除 | 「dir1」ディレクトリ削除<br>`rm dir1` | 本番環境では取り扱い注意 |
| chmod | ファイル・ディレクトリのパーミッションを変更 | `chmod 777 dir1` | 本番環境では取り扱い注意 |

date
cp - ファイルのコピー
mv - ファイルの移動・リネーム
cat - ファイルの内容を表示
grep - 文字列の検索
find - ファイルの検索

## pwd

pwd (ピーダブリューディー)コマンドは、カレントディレクトリのパスを表示します。  

```bash
$ # カレントディレクトリを表示する
$ pwd
/var/www/test
```

## chmod

chmod コマンドを使用してファイル・ディレクトリの  
パーミッション（アクセス権限）を変更する場合は、以下のように行います。

```bash
$ # chmod [所有者権限(0-7)][グループ権限(0-7)][その他のユーザ権限(0-7)]
$ #   下3桁目: 所有者に対する権限　例の場合「7」
$ #   下2桁目: グループに対する権限　例の場合「5」
$ #   下1桁目: その他のユーザーに対する権限　例の場合「4」
$ chmod 754 file.txt
$
```

```txt
4(2進数0100) = 読み込み(r:read)
2(2進数0010) = 書き込み(w:write)
1(2進数0001) = 実行(x:execute)
```

上記の数値を足すことで  
組み合わせる事ができます。

| 設定値 | 設定値式 | 表記 | 与えられる権限 |
| :---: | --- | :---: | --- |
| 7 (2進数0111) | 4(r) + 2(w) + 1(x) | rwx | 読み込み、書き込み、実行 |
| 6 (2進数0110) | 4(r) + 2(w)        | rw- | 読み書き |
| 5 (2進数0101) | 4(r) + 1(x)        | r-x | 読み込み、実行 |
| 4 (2進数0100) | 4(r)               | r-- | 読み込み |
| 3 (2進数0011) | 2(w) + 1(x)        | -wx | 書き込み、実行 |
| 2 (2進数0010) | 2(w)               | -w- | 書き込み |
| 1 (2進数0001) | 1(x)               | --x | 実行 |
| 0 (2進数0000) | 0                  | --- | なし |

```bash
$ mkdir chmod-exercises/
$ cd chmod-exercises/
chmod-exercises$ mkdir dir-test
chmod-exercises$ touch file-test.txt
chmod-exercises$ ls
dir-test  file-test.txt
chmod-exercises$
```

## 参考資料

- `Linux Introduction`
  - <https://launchcodetechnicaltraining.org/>
