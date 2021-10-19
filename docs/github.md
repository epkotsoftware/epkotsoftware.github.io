# 株式会社エプコットソフトウェア ～ GitHub

## GitHub組織アカウント

- <https://github.com/epkotsoftware>

## GitHub組織アカウントへの参加

- SlackにてGitHubアカウントユーザー名を伝えて、組織アカウントへの招待を依頼してください。
  - GitHubアカウントをお持ちではない方は作成をお願いします。

## GitHubアカウント作成

会社用アカウント作成は必須ではないので  
既にお持ちの方は作成不要です。

- GitHubアカウント作成
  - <https://github.co.jp/>
  - 例
    - Username: `taro-yamada-epkotsoftware` （自由、URLに使用されます）
    - Email address: `taro.yamada@epkotsoftware.co.jp` （会社用アカウントにする場合は会社メールアドレス）
    - Password: 自由
    - Email preferences: どちらでもOK
- GitHubアカウント設定
  - <https://github.com/settings/profile>
  - [`Profile`](https://github.com/settings/profile)
    - 例（フルネームじゃなくてもOK）
      - Name: `Yamada Taro`、`Yamada.T`
  - [`Account security`](https://github.com/settings/security)
    - `Two-factor authentication`(2段階認証) は組織アカウントへの参加時は、今のところ必須にはしていませんが推奨します。
  - [`Developer settings / Personal access tokens`](https://github.com/settings/tokens) （任意）
    - Git使用時にパスワードの代わりとしてトークンを使用します。  
      **※ 作成は必要になった時で問題ありません。**
    - 作成方法
      - 「Generate new token」をクリック
      - 以下を入力
        - Note: 目的を設定します。
        - Expiration: 有効期限を設定します（`No expiration` は無期限）。
        - Select scopes: プライベートリポジトリの操作のため `repo` をチェックします。  
          それ以外は任意です。
      - 「Generate token」をクリック
      - トークンが表示されます（2度と表示されないので、忘れたらもう一度作成すること）。
        ![github_token_generated](./image/github_token_generated.png)

    - 作成したトークンはGitで `git push` 等を行った際に入力を求められます。
      ![github_sign_in](./image/github_sign_in.png)

---

上記内容については 2021/10 時点での内容です。  
それ以降、UIや入力項目等が変更されているかもしれません。  

## Gitインストール

内部開発を行う方、新人研修へ参加する方はインストールをお願いします。  
設定に関しては、プロジェクトによっても違うため  
デフォルト設定でのインストールでOKです。

- `Git` (ギット)
  - <https://git-scm.com/downloads>

既にインストール済みの方は、お使いのGitが脆弱性があるバージョンではないかを確認し  
アップデートをお願いします。

- gitバージョン確認コマンド(Git Bash)
  - `git --version`
- Google検索
  - <https://www.google.com/search?q=git+脆弱性>

## Git設定

- Git Bash アプリを開く
- Git設定
  - `git config --global user.email "{GitHubアカウントEmail address}"`
  - `git config --global user.name "{GitHub Profile Name}"`
  - 設定例

    ```bash
    git config --global user.email "taro.yamada@epkotsoftware.co.jp"
    git config --global user.name "Yamada Taro"
    ```
