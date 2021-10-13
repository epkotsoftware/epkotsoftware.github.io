# 株式会社エプコットソフトウェア

## GitHub組織アカウントへの参加

- SlackにてGitHubアカウントユーザー名を伝えて、組織アカウントへの招待を依頼してください。
  - アカウントがない方は作成をお願いします。

## GitHubアカウント作成

会社用アカウント作成は必須ではないので  
既にお持ちの方は作成不要です。

- GitHubアカウント作成
  - <https://github.co.jp/>
  - 例（会社用アカウントにする場合）
    - Username: `taro-yamada-epkotsoftware`
    - Email address: `taro.yamada@epkotsoftware.co.jp`
    - Password: 自由
    - Email preferences: どちらでもOK
- GitHubアカウント設定
  - <https://github.com/settings/profile>
  - [`Profile`](https://github.com/settings/profile)
    - 例
      - Name: `Yamada Taro`
  - [`Account security`](https://github.com/settings/security)
    - `Two-factor authentication`(2段階認証) は組織アカウントへの参加時は、今のところ必須にはしていませんが推奨します。
  - [`Developer settings / Personal access tokens`](https://github.com/settings/tokens)
    - 後述のGit使用時のパスワードの代わりとしてトークンを使用します。  
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
