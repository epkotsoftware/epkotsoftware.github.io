# 株式会社エプコットソフトウェア ～ 新人研修に参加する方へ

## 環境構築

### インストール

以下をインストールしてください、いずれもデフォルト設定でOKです。

- 【ブラウザ】`Google Chrome` (クローム)
  - <https://www.google.co.jp/intl/ja/chrome/>
- 【バージョン管理】`Git` (ギット)
  - <https://git-scm.com/downloads>
- 【エディタ】`Visual Studio Code` (ビジュアル スタジオ コード)
  - <https://azure.microsoft.com/ja-jp/products/visual-studio-code/>

### Visual Studio Code 詳細設定

難しければ飛ばしてもOKです。

- 拡張機能のインストール
  - 「`Japanese Language Pack for Visual Studio Code`」 VSCodeを日本語化出来ます。
    - <https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ja>
  - 「`Trailing Spaces`」 行末のスペースを可視化してくれる機能です。
    - <https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces>
  - 「`markdownlint`」 Markdown(`.md`)ファイルのスタイルチェックをしてくれる機能です。
    - <https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint>
  - 「`Code Spell Checker`」 スペルミスを検出してくれる機能です（名詞等はかかりやすいので ignoreWords に設定）
    - <https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker>
  - 「`Rainbow CSV`」 CSV・TSVファイルが見やすくなる機能です。
    - <https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv>
  - 「`open in browser`」 HTMLをブラウザで開く機能です。
    - <https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser>
- `setting.json` の開き方
  - メニューバー「表示」→「コマンドパレット」で「`Open Settings (JSON)`」
  - `setting.json` の以下の設定は任意で

  ```json
  {
      "explorer.copyRelativePathSeparator": "/", // 「相対パスをコピー」の時の区切り文字
      "editor.fontFamily": "'BIZ UDゴシック', Consolas, 'Courier New', monospace",
      "editor.rulers": [120], // エディタの120文字目の所にルーラーを表示
      "editor.renderWhitespace": "all", // スペースを可視化
      "editor.linkedEditing": true, // HTMLタグ等の編集時、関連する記号が更新される（PHPには無効）
      "editor.bracketPairColorization.enabled": true, // 「{}」のペアに色がつく
      "editor.guides.bracketPairs": true, // アクティブな「{}」のペアを強調表示
      "files.eol": "\n", // 既定の改行文字、新規作成時のデフォルト
      "files.trimTrailingWhitespace": true, // 保存時に行末のスペースを削除する
      "[log]": {
          // LOG ファイル設定
          "editor.wordWrap": "off", // 行を折り返さない
          "editor.insertSpaces": false, // Tabキーを押した時にスペースに変換されない
      },
      "[csv]": {
          // CSV ファイル設定
          "editor.wordWrap": "off", // 行を折り返さない
      },
      "[tsv]": {
          // TSV ファイル設定
          "editor.wordWrap": "off", // 行を折り返さない
          "editor.insertSpaces": false, // Tabキーを押した時にスペースに変換されない
      },
      "[markdown]": {
          // Markdown(.md) ファイル設定
          "files.trimTrailingWhitespace": false, // 保存時に行末のスペースを削除しない
          "editor.tabSize": 2
      },
      // 拡張機能: markdownlint 設定
      "markdownlint.config": {
          "MD033": false // html: Markdown のテーブル内改行で<br>を使うことがあるため
      },
      // 拡張機能: Code Spell Checker 設定
      "cSpell.ignoreWords": [
          // チェック対象外のワード
          "epkot",
          "markdownlint",
          "laravel",
      ],
      // ↓↓↓ その他設定は略
  }
  ```

## 予習

実践については研修時に行います。  
まずは動画を見て必要な知識や、プログラミングはどういうものなのかをイメージをつかみましょう。

### 動画

- Webアプリケーションを作るために学ぶべき技術
  - <https://www.youtube.com/watch?v=aC4O0thuTyw>
- Webプログラミングの始め方
  - <https://www.youtube.com/watch?v=zxX8YMTxvyI>
- エンジニアは検索力が大事。プログラミングスキル向上にググり力は必須です。
  - <https://youtu.be/kNiD4rfNkFA>
- Chrome DevToolsの使い方を徹底解説！Chrome Developer Toolsを使いこなすと開発効率が上がる！
  - <https://youtu.be/awRkFcv51r4>
- HTML講座
  - <https://www.youtube.com/playlist?list=PLwM1-TnN_NN457PTxsvNXxVxN8fkbYHKU>
- CSS講座
  - <https://www.youtube.com/playlist?list=PLwM1-TnN_NN5jWN09yjtxWng2XZa88ate>
- JavaScript講座
  - <https://www.youtube.com/playlist?list=PLwM1-TnN_NN7-zdRV8YsGUB82VVhfYiWW>
- 【基本知識】GitHubとは？できることや基礎用語を解説！
  - <https://youtu.be/yzNPC_QzgFM>
- 【Git入門】Git + Github使い方入門講座
  - <https://youtu.be/LDOR5HfI_sQ>

## 研修内容

研修では、主に「CBC」というオンライン学習サイトを使い、学習していきます。  
何か作ってみたい方は「入門コース」からやってみましょう。

- CBC (CRI BOOT CAMP)
  - <https://cbc-study.com/>
