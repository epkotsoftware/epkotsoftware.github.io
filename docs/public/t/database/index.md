# データベース編

## SQL入門

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

## SQLコマンド実行順

SELECTを使う際に実行される順番は、記述順ではなく  
下記の順になります。

| 順序 | コマンド | 説明 |
| :---: | :---: | --- |
| 1 | FROM | どのテーブルからデータを取得するかを指定する |
| 2 | JOIN | 複数のテーブルを結合する |
| 3 | WHERE | 取得するデータを条件に基づいて絞り込む |
| 4 | GROUP BY | データをグループ化する |
| 5 | HAVING | グループ後のデータに対して、条件に基づいて絞り込む |
| 6 | SELECT | 取得するデータの列を指定する |
| 7 | ORDER BY | 取得データを指定した列で昇順or降順にソートする |
| 8 | LIMIT | 取得データの件数を制限する |

## Where句とHaving

初心者には違いがわからないことが多いので、しっかり理解しておきましょう。

- `【SQL】一目でわかる!HAVINGとWHEREの違いと活用方法`
  - <https://www.sejuku.net/blog/73003>

## サブクエリ

[SQL練習問題](#sql練習問題)で、サブクエリ関連でつまずいたら  
以下の資料で復習しましょう。

- `【SQL超入門講座】22.サブクエリ｜SQLの中にSQLを書いて二段階抽出する方法`
  - <https://youtu.be/Oys2AjAzxYE>
- `【SQL】スカラ・サブクエリを１分でわかりやすく解説`
  - <https://it-biz.online/it-skills/scalar-subquery/>
- `SQLでIN句を使おう!基本からサブクエリ活用方法まで一覧紹介`
  - <https://www.sejuku.net/blog/72497>
- `【基本情報技術者】よく分かるSQL⑪ ~副問合せ~`
  - <https://youtu.be/dPYl1CH9X3g>
- `小学生でもわかるサブクエリ【SQL講座⑤】`（動画：SQL入門でも学習済み）
  - <https://youtu.be/6WgcDWcWAUE>
- 【公式】`MySQL :: MySQL 8.0 リファレンスマニュアル :: 13.2.11 サブクエリー` （難しければ飛ばしてください）
  - <https://dev.mysql.com/doc/refman/8.0/ja/subqueries.html>

## SQL練習問題

- SQL練習問題 – 一覧まとめ
  - <https://tech.pjin.jp/blog/2016/12/05/sql練習問題-一覧まとめ/>
  - 学習対象外の課題
    - Viewについては、最近は使用している現場が少ないため、`73, 74, 75`は任意学習とします。  
      「`72 Viewとは`」のみ学習しておきましょう。
      - `73 Viewの作成`
      - `74 Viewの変更・更新`
      - `75 Viewの削除`
