# Linux 課題(chmod)

## 事前準備

以下を作成してください。

- `dir-test` ディレクトリ
  - `file-test-sub.txt` ファイル
- `file-test.txt` ファイル

```bash
mkdir chmod-exercises/
cd chmod-exercises/
mkdir dir-test
touch file-test.txt
touch dir-test/file-test-sub.txt
```

ls コマンドで確認  
`-R`(`--recursive`)オプションを使うと  
ディレクトリ内も対象になる  

```bash
$ # 確認コマンド
$ ls -R
.:
dir-test  file-test.txt

./dir-test:
file-test-sub.txt
$
```

## Q1:ファイルのアクセス権限を表示するコマンドは？

<details>
<summary>クリックで回答を見る</summary>

```bash
ls -l
```

ディレクトリやファイルを指定して表示することも可能

```bash
$ # 現在のディレクトリ直下のディレクトリ・ファイルのアクセス権限を確認
$ ls -l
total 0
drwxr-xr-x 2 root root 64 Apr 21 17:18 dir-test
-rw-r--r-- 1 root root  0 Apr 21 17:18 file-test.txt
$
$ # 「dir-test」のアクセス権限を確認（-d オプションを使用する）
$ ls -ld dir-test
drwxr-xr-x 2 root root 64 Apr 21 17:18 dir-test
$
$ # 「file-test.txt」のアクセス権限を確認
$ ls -l file-test.txt
-rw-r--r-- 1 root root 0 Apr 21 17:18 file-test.txt
```

</details>

## Q2:「file-test.txt」ファイルへのアクセス許可を「r--r--r--」に変えるコマンドは？

<details>
<summary>クリックで回答を見る</summary>

```bash
chmod 444 file-test.txt
```

-v オプションを使用すると  
変更内容の確認が可能

```bash
$ chmod -v 444 file-test.txt
mode of 'file-test.txt' changed from 0644 (rw-r--r--) to 0444 (r--r--r--)root 0 Apr 21 17:18 file-test.txt
$
```

</details>

## Q3:「file-test.txt」ファイルへのアクセス許可を「rw-r-----」に変えるコマンドは？

<details>
<summary>クリックで回答を見る</summary>

```bash
chmod 640 file-test.txt
```

```bash
$ chmod -v 640 file-test.txt
mode of 'file-test.txt' changed from 0444 (r--r--r--) to 0640 (rw-r-----)
```

</details>

## Q4:「file-test.txt」ファイルへのアクセス許可を「rwxr-x--x」に変えるコマンドは？

<details>
<summary>クリックで回答を見る</summary>

```bash
chmod 751 file-test.txt
```

```bash
$ chmod -v 751 file-test.txt
mode of 'file-test.txt' changed from 0640 (rw-r-----) to 0751 (rwxr-x--x)
```

</details>

## Q5:「file-test.txt」ファイルへのアクセス許可を「rw-rw-r--」に変えるコマンドは？

<details>
<summary>クリックで回答を見る</summary>

```bash
chmod 664 file-test.txt
```

```bash
$ chmod -v 664 file-test.txt
mode of 'file-test.txt' changed from 0751 (rwxr-x--x) to 0664 (rw-rw-r--)
```

</details>

## Q6:「dir-test」ディレクトリ及び配下のディレクトリ・ファイルのアクセス許可を「rwxrw-rw-」に変えるコマンドは？

<details>
<summary>クリックで回答を見る</summary>

```bash
chmod -R 766 dir-test
```

```bash
$ chmod -vR 766 dir-test
mode of 'dir-test' changed from 0755 (rwxr-xr-x) to 0766 (rwxrw-rw-)
mode of 'dir-test/file-test-sub.txt' changed from 0644 (rw-r--r--) to 0766 (rwxrw-rw-)
```

</details>

## 参考資料

- `Linux Introduction`
  - <https://launchcodetechnicaltraining.org/>
