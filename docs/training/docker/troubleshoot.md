# Docker トラブルシューティング

## Windows

Windowsの場合、以下を参照

- `Docker Desktop for Windows トラブルシューティング`
  - <https://zenn.dev/seiya0/articles/tech-docker-desktop-for-win-troubleshoot>

## 公式

- docker docs 〜 Logs and troubleshooting
  - <https://docs.docker.com/desktop/windows/troubleshoot/>
- Docker Desktop release notes
  - <https://docs.docker.com/desktop/release-notes/>
- Docker Desktop for Windows 〜 Issues
  - <https://github.com/docker/for-win/issues>
- Docker Desktop for Mac 〜 Issues
  - <https://github.com/docker/for-mac/issues>

## コンテナ起動

### docker-compose で 「`docker: no matching manifest for linux/arm64/v8 in the manifest list entries.`」

MySQLの公式イメージを使用する際に  
Appleシリコン搭載PC（M1、M2等）でエラーが出ることがある。  
docker-compose.ymlファイルに以下を追記すると解決する。  

```yml
# docker-compose.yml
platform: linux/x86_64
```

- `docker-compose.yml （Laravel10環境）`
  - <https://github.com/epkotsoftware/template-laravel10-jp/blob/v10.3.3/docker-compose.yml#L24>

コマンドの場合

```bash
# コマンド
docker run -d --rm --platform linux/x86_64 -e MYSQL_ROOT_PASSWORD=password mysql:8.0.32
```

Dockerfileに追記する場合

```bash
# Dockerfile
FROM --platform=linux/x86_64 mysql:8.0.32
```

### docker-compose で File Sharing に関するエラーが出る

- 以下の「File sharing」タブで現在使用しているディレクトリを追加する
  - <https://matsuand.github.io/docs.docker.jp.onthefly/desktop/mac/>

### docker-compose で「`can't assign requested address`」

```txt
Error response from daemon: Ports are not available: exposing port TCP 127.0.0.2:3306 -> 0.0.0.0:0: listen tcp 127.0.0.2:3306: bind: can't assign requested address

デーモンからのエラー応答: ポートが利用できません: ポート TCP 127.0.0.2:3306 を公開しています -> 0.0.0.0:0: リッスン tcp 127.0.0.2:3306: バインド: 要求されたアドレスを割り当てることができません
```

Macの場合、デフォルト設定ではローカルループバックアドレスは「`127.0.0.1`」しか使用出来ないため  
ifconfigコマンドで設定する必要がある。  
「`127.0.0.2`」を使いたい場合は以下のコマンドで設定する。  

```bash
sudo ifconfig lo0 alias 127.0.0.2
```

- `ループバックアドレス（127.0.0.1 / ::1）とは - 意味をわかりやすく - IT用語辞典 e-Words`
  - <https://e-words.jp/w/ループバックアドレス.html>
- `dockerのコンテナを複数、同じポートを使って立ち上げたい`
  - <https://www.key-p.com/blog/staff/archives/107891>

### failed: port is already allocated

- docker-compose で 「`failed: port is already allocated`」が出る

他の環境で同一のIPアドレス・ポートが使われていると発生します。  

- 確認点
  - XAMP・MAMP等が立ち上がっていないか？ホストのIPアドレス・ポートが重複していないか？
  - 他のコンテナで同一のホスト(IPアドレス・ポート)が使われていないか？
- 対処方法
  - XAMP・MAMPが立ち上がっていたら停止、不要であればアンインストールを行う。
  - 起動対象以外のコンテナの停止 or 削除を行う。
  - 起動対象コンテナのポートを変更する。ymlの場合、「`ports`」のHOSTのIP、Portを変更する（Macの場合はデフォルトではローカルホストしか使えないので注意）。
    - 指定方法
      - `{HOST Port}:{CONTAINER Port}`
      - `{HOST IP}:{HOST Port}:{CONTAINER Port}`
    - 参考
      - Compose file version 3 reference
        - <https://docs.docker.com/compose/compose-file/compose-file-v3/#short-syntax-1>
      - MacのApacheで127.0.0.1以外のIPアドレスを使用する
        - <https://qiita.com/HanaeKae/items/79d783521b83e350fa42>

### その他コンテナ起動時のトラブル(Mac)

最新にアップデートしたり、逆に古いバージョンをインストールすることで解決するケースもあります。  
トラブルは問題(Issue)として、公式GitHubに投稿される事もありますので参考までに

- `Issues · docker/for-mac`
  - <https://github.com/docker/for-mac/issues>

古いバージョンをインストールする場合、リリースノートから可能です。  

- `Docker Desktop release notes`
  - <https://docs.docker.com/desktop/release-notes/>
