# 株式会社エプコットソフトウェア ～ Git

## はじめる前に

以下、学習しておきましょう。

- 動画
  - GitHubとは？【分かりやすい解説シリーズ #14】【プログラミング】
    - <https://youtu.be/ycFvHGPZ2LU>
  - 【Git入門】Git + Github使い方入門講座🐒Gitの仕組みや使い方を完全解説！パーフェクトGit入門！
    - <https://youtu.be/LDOR5HfI_sQ>
  - イケてるgitのブランチ運用｜git flowとgithub flowとは！？
    - <https://youtu.be/0ge7ZJQvYLw>

## Git学習準備

### 環境

- GitHubアカウント
- インストール
  - Git Bash
  - VSCode

#### VSCode拡張機能

Gitを扱うための拡張機能をご紹介します。

- Git Graph
  - <https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph>
  - git のログを視覚的に見れるように出来る拡張機能です。  
    Git Graph上から操作も可能ですが  
    今回の学習では、コマンドとVSCodeの標準機能で行うため、ブランチの状態確認のみ行います。
- GitLens
  - <https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens>
  - エディタ内で選択行の最終コミット者が表示されるようになり、ホバーで詳細表示が出来、GitHubへのリンクも出ます。  
    こちらは、学習では使用しません。

### GitHub

まず、自身のアカウントでリポジトリをGitHub上で作成しましょう。

#### リポジトリ作成

- <https://github.com/new> にアクセスする。
- 以下を入力する。
  - Owner: 自分のアカウント **※ 組織アカウントに作らないようにご注意ください。**
  - Repository name: `training-git`  
    (任意の名称でもOK、以降は`training-git`前提で進めるので読み替えてください)
  - 公開範囲: `Public`
  - Initialize this repository with: 「`Add a README file`」のみチェック
- 「`Create repository`」ボタンをクリック

#### developブランチ作成

- リポジトリのメインページに移動 (<https://github.com/{★自身のユーザー名}/training-git/>)
- ブランチ名に「`develop`」を入力し、「`Create branch: develop from 'main'`」をクリック
  ![github_create_branch_develop](../image/github_create_branch_develop.png)

#### ブランチ設定

- リポジトリのメインページに移動
- 「`Settings`」タブをクリック
- 「`Branches`」をクリック
- Default branch ～ デフォルトブランチをdevelopに変更
  - 切り替えアイコンをクリック
    ![github_switch_branch](../image/github_switch_branch.png)
  - 「`develop`」を選択して、「`Update`」ボタンをクリック
  - 「`I understand, update the default branch.`」ボタンをクリック
- Branch protection rules ～ ブランチ保護ルール追加
  - 「`Add rule`」ボタンをクリック
    - Branch name pattern: `*[main|develop]*` （mainとdevelopに適用）
    - 以下をチェック
      - 「`Require a pull request before merging`」
        - ※ サブ項目のチェックは外す
      - 「`Include administrators`」
  - 「`Create`」ボタンをクリック

※ 今回は、学習のための保護設定にしてあります。  
　その他のブランチルールについては公式を参照  
　<https://docs.github.com/ja/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule>

#### CloneするためのURLを取得

- Cloneする方法はいくつかありますが、今回はHTTPSで行います。
- リポジトリのメインページに移動
- 「`Code`」をクリックし、「`HTTPS`」タブに記載されているURLをコピー
    ![github_code](../image/github_code.png)
- このURLを `git clone` で使用します。

## リモートリポジトリ複製

![git_clone_image](../image/git_clone_image.svg)
[PlantUML](https://www.plantuml.com/plantuml/umla/PSyn3i8m38NXtQTuPES27L0t63W2YzEwD98ReyIjuFO4bWgnUFZbpvBxwbnyNPGEFiiYs58id9tcD0ecCu_s96e3uMe3Qo1WPEV8LH3qaswvoCDgSYkl0AvGaZnYX-VabpN-oYABkVnHsoaFdZPsQSrmF46xGIqBvUQWCdc7Ut9yuxwirBSBxQ4t)  

リモートリポジトリ（GitHub上のリポジトリ）をローカルに複製します。  
「`Git Bash`」で任意の場所に「`git clone "★URL"`」を実行しましょう。  
URLはGitHub上で取得したものを使用します。  

![git_clone](../image/git_clone.png)

VSCodeで「`training_git`」フォルダを開きましょう。  
ターミナルは「`Git Bash`」を選択してください。  
「`Git Graph`」は任意ですが表示方法は以下になります。  

![vscode_training_git](../image/vscode_training_git.png)

## Git学習シナリオ

現場のGit運用については「git flow」や「github flow」をベースにすることが多いかと思います。  
今回は「git flow」を簡単にしたものを想定して実際にGit操作していきましょう。  

以下はプロジェクト開始～リリースまでのブランチの流れを表しています。  
開発者はあなたを含めて2名で、あなたはA機能を担当  
もう1名はB機能を担当します。

![git_flow_simple](../image/git_flow_simple.svg)
[PlantUML](https://www.plantuml.com/plantuml/umla/VP3DJiCm3CVlUGhJdHdRjGUq0-A6X10lu2nEQorEfjOjxErPb4hfOEAIoF-FdomVHiL19mdcGNiIWfdjW55Dpux0fwGsVHjpVQ1v9THfeCO0K5JM2pI-I4_O08xW4JPzqZF7qvsCBHbRCnGTLFmBpHJIUOrtYvIB3ZPT2kvNwGqvhXkIvnmNs0JkUXrF5nicgZKyAi-e16847fz1MewiZ06EIOJLn7GrXznjFx5hOTvjzoNgQjaPbnMFRQGlo2SxzjNrQ3mkFh2S0mb5NMbAeou4UvzWZRUBNmbLAuGoklRz8_z2GqV6qGq4_qzWsSAjLvARj1G91Wg48_qzptwxCmUARfBm0m00)  

|  | Mainへのマージ | Developへのマージ | push | 概要 |
| :---: | :---: | :---: | :---: | --- |
| Main | - | - | :x: | Production branch<br>本番リリース用ブランチ |
| Develop | PRによるマージ | - | :x: | Development branch<br>開発ブランチ |
| Feature | :x: | PRによるマージ | :o: | 開発ブランチ(機能・課題毎に分ける) |

## featureブランチの作成


TODO


![git_new_branch_feature_a](../image/git_new_branch_feature_a.svg)
[PlantUML](https://www.plantuml.com/plantuml/umla/NOyxRiD030Lxdk95gWttBW8NGReSWXAvMaBxCIHAYM-VB0n4XXi277AAkQxEYsyvqPj7pOhTXeMBKpHHX5fzg3z4VmFTfx9lYtO4Q77pExhmG6Vkm2i2eu_LRrPcqY8ur0_TDTNRiogwDz8yGJ_L92_E5rjv5dBRstj6dsoAlixt8MrwQ3owxUoAJ1cdTyX1XAIHm9UYtsY9OpokWQbKLoGDVi5aZZ7gEDVDSHhm7ucws6JbB8yQkcgHBQTV)  

```bash
# 「develop」ブランチから「feature/a」ブランチを作成
git checkout -b feature/a origin/develop
```

![git_new_branch_feature_a](../image/git_new_branch_feature_a.png)

## 参考

TODO

- サイト
  - サル先生のGit入門
    - <https://backlog.com/ja/git-tutorial/>
- git help
  - `git help` コマンドでブラウザでヘルプを見れます。
    - 例: `git help checkout`
