# 新人研修 入社初日

## 業務開始連絡

初日のみ9:30にSlackのダイレクトメッセージで、総務に業務開始連絡をお願いします。

## EPKOT用PCユーザー作成

- [EPKOT用PCユーザー作成](./../../preparation/epkot-user/index.md)

## EPKOT用PCユーザーログイン

作成したユーザーアカウントでログインしましょう。  
研修中はこのユーザーアカウントで進めていきます。

## インストール

- [インストール](./../../preparation/install/index.md)

## GitHub組織アカウントへの参加

GitHubの管理者は総務になりますので  
アカウントを作成しましたら、総務までご連絡ください。

- 「[GitHub組織アカウントへの参加](./../../github/index.md)」参照
  - 「Gitインストール」、「Git設定」、「Git設定確認」もお願いします。

## 通知設定

メール・Slackは、すぐに反応できるようにしてください。  
Macの場合、以下の通知設定をしておきましょう。  

- 【Mac】通知設定について解説
  - <https://macblog.site/system-preferences-notification/>

## その他設定

### パソコン

ファイル名拡張子を表示する設定にしておきましょう。  

- Windows の一般的なファイル名拡張子
  - <https://support.microsoft.com/ja-jp/windows/windows-の一般的なファイル名拡張子-da4a4430-8e76-89c5-59f7-1cdbbc75cb01>
- Macでファイル名拡張子を表示する/非表示にする
  - <https://support.apple.com/ja-jp/guide/mac-help/mchlp2304/mac>

### VSCode

Visual Studio Code(VSCode) が初めての方へ

- VSCode最初の1歩（インストール／日本語化／基本的な使い方）
  - <https://youtu.be/auGKppIIV4Y>

#### VSCode 拡張機能インストール

- 拡張機能のインストール
  - 「`Japanese Language Pack for Visual Studio Code`」 VSCodeを日本語化出来ます。
    - <https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ja>
  - 「`Trailing Spaces`」 行末のスペースを可視化してくれる機能です。
    - <https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces>
  - 「`markdownlint`」 Markdown(`.md`)ファイルのスタイルチェックをしてくれる機能です。
    - <https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint>
  - 「`Markdown Preview Mermaid Support`」Markdown(`.md`)ファイルでMermaidのプレビュー表示ができるようになります。
    - <https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid>
  - 「`Code Spell Checker`」 スペルミスを検出してくれる機能です（名詞等はかかりやすいので ignoreWords に設定）
    - <https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker>
  - 「`Rainbow CSV`」 CSV・TSVファイルが見やすくなる機能です。
    - <https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv>
  - 「`open in browser`」 HTMLをブラウザで開く機能です。
    - <https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser>

#### VSCode 詳細設定

VSCodeの細かい設定を行います。

- `settings.json` の開き方
  - メニューバー「表示」→「コマンドパレット」で「`Open User Settings (JSON)`」
    - JSONフォーマットについては以下を参照
      - <https://www.sejuku.net/blog/80855>
  - `settings.json` の以下の設定は任意で

```json
{
    "explorer.copyRelativePathSeparator": "/", // 「相対パスをコピー」の時の区切り文字
    "editor.fontFamily": "'BIZ UDゴシック', Consolas, 'Courier New', monospace",
    "editor.rulers": [120], // エディタの120文字目の所にルーラーを表示
    "editor.renderWhitespace": "all", // スペースを可視化
    "editor.linkedEditing": true, // HTMLタグ等の編集時、関連する記号が更新される（PHPには無効）
    "editor.bracketPairColorization.enabled": true, // 「{}」のペアに色がつく
    "editor.bracketPairColorization.independentColorPoolPerBracketType": true, // 異なるタイプのブラケットは同じ色にする
    "editor.guides.bracketPairs": true, // アクティブな「{}」のペアを強調表示
    "workbench.colorCustomizations": {
        // ブラケットの色（お好みで）
        "editorBracketHighlight.foreground1": "#D3D3D3",
        "editorBracketHighlight.foreground2": "#DCDCAA",
        "editorBracketHighlight.foreground3": "#C586BB",
    },
    "files.eol": "\n", // 既定の改行文字、新規作成時のデフォルト
    "files.trimTrailingWhitespace": true, // 保存時に行末のスペースを削除する
    "[php]": {
        // PHP ファイル設定
        "files.trimTrailingWhitespace": true, // 保存時に行末のスペースを削除する
        "editor.rulers": [120], // エディタの120文字目の所にルーラーを表示
        "editor.insertSpaces": true, // PHP はコーディング規約(PSR-12)でインデントにタブの使用は禁じられている
        "editor.tabSize": 4, // PHP はコーディング規約(PSR-12)で4つのスペースと決められている
        "editor.wordWrap": "wordWrapColumn", // editor.wordWrapColumn設定値で折り返す
        "editor.wordWrapColumn": 120 // 120文字で折り返す
    },
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
        "editor.insertSpaces": true, // Tabキーを押した時にスペースに変換する
        "editor.tabSize": 2
    },
    // 拡張機能: markdownlint 設定
    "markdownlint.config": {
        "MD010": {
            // [MD010:no-hard-tabs] 設定
            "code_blocks": false // コードブロック内のタブ文字はチェック対象外
        },
        "MD024": {
            // [MD024:no-duplicate-heading]  設定
            "siblings_only": true // 兄弟の見出しのみ重複チェックをする
        },
        "MD033": {
            // [MD033:no-inline-html] 設定
            "allowed_elements": [
                "br", //  Markdown のテーブル内改行で<br>を使うことがあるため許可
                "details", // 折りたたみセクション許可 https://docs.github.com/ja/enterprise-cloud@latest/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections
                "summary", // 折りたたみセクション許可 https://docs.github.com/ja/enterprise-cloud@latest/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections
            ]
        },
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

## 入社初日の予習

まず、ここまでで忘れていることがないかチェックしておきましょう。  

入社前研修が未実施の方は、以下を実施して下さい。

- [入社前研修](./../t/index.md)
