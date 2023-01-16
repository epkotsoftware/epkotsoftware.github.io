# Docker

## 目次

- [公式](#公式)
- [動画](#動画)
- [インストール](#インストール)
- [用語](#用語)
- [コマンド](#コマンド)
- [Dockerファイル](#dockerファイル)
- [Composeファイル](#composeファイル)
- [envファイル](#envファイル)
- [image](#image)
- [トラブルシューティング](#トラブルシューティング)
- [構築例](#構築例)

## 公式

- docker docs
  - <https://docs.docker.com/>
- GitHub
  - <https://github.com/docker-library>

## 動画

- Docker最初の1歩 Webアプリの開発環境を構築してみよう！【初心者向け】【プログラミング】
  - <https://youtu.be/s1FVLHSDIZE>
- 【2021年最新】Docker環境構築入門｜14分でdocker-composeまで完全解説！【windows/mac対応】Dockerの使い方
  - <https://youtu.be/VIzLh4BgKck>
- Docker超入門講座 合併版 | ゼロから実践する4時間のフルコース
  - <https://youtu.be/lZD1MIHwMBY>

## インストール

- [Docker Desktopインストール](./install.md)

## 用語

- Glossary
  - <https://docs.docker.com/glossary/>

## コマンド

- docker-compose
  - <https://docs.docker.com/compose/reference/>
- docker
  - <https://docs.docker.com/engine/reference/commandline/cli/>
- docker exec 〜 コンテナ内でコマンドを実行
  - <https://docs.docker.com/engine/reference/commandline/exec/>
- docker ps 〜 コンテナ一覧
  - <https://docs.docker.com/engine/reference/commandline/ps/>
- docker inspect 〜 Dockerオブジェクト情報表示
  - <https://docs.docker.com/engine/reference/commandline/inspect/>
- docker start 〜 コンテナ起動
  - <https://docs.docker.com/engine/reference/commandline/start/>
- docker stop 〜 コンテナ停止
  - <https://docs.docker.com/engine/reference/commandline/stop/>
- docker restart 〜 コンテナ再起動
  - <https://docs.docker.com/engine/reference/commandline/restart/>
- docker rm 〜 コンテナ削除
  - <https://docs.docker.com/engine/reference/commandline/rm/>
- docker images 〜 イメージ一覧
  - <https://docs.docker.com/engine/reference/commandline/images/>
- docker rmi 〜 イメージ削除
  - <https://docs.docker.com/engine/reference/commandline/rmi/>
- docker volume ls 〜 ボリューム一覧
  - <https://docs.docker.com/engine/reference/commandline/volume_ls/>
- docker volume rm 〜 ボリューム削除
  - <https://docs.docker.com/engine/reference/commandline/volume_rm/>
- docker network ls 〜 ネットワーク一覧
  - <https://docs.docker.com/engine/reference/commandline/network_ls/>
- docker network inspect 〜 ネットワーク詳細情報表示
  - <https://docs.docker.com/engine/reference/commandline/network_inspect/>
- docker logs 〜 コンテナのログ取得
  - <https://docs.docker.com/engine/reference/commandline/logs/>
- docker stats 〜 CPUなどのリソース利用統計取得
  - <https://docs.docker.com/engine/reference/commandline/stats/>
  - Ctl+C (Macの場合 control+C) で終了します。
  - 一度確認するだけなら `docker stats --no-stream` を推奨します。

## Dockerファイル

- Dockerfile reference
  - <https://docs.docker.com/engine/reference/builder/>

## Composeファイル

YMLファイル

- <https://docs.docker.com/compose/compose-file/compose-file-v3/>

## envファイル

`.env`ファイル

- <https://docs.docker.com/compose/env-file/>

## image

使用経験のないイメージも含みます。

- Ubuntu
  - <https://hub.docker.com/_/ubuntu>
- nginx
  - <https://hub.docker.com/_/nginx>
- composer
  - <https://hub.docker.com/_/composer>
- Java
  - <https://hub.docker.com/_/openjdk>
- PHP
  - <https://hub.docker.com/_/php>
- Ruby
  - <https://hub.docker.com/_/ruby>
- Perl
  - <https://hub.docker.com/_/perl>
- Python
  - <https://hub.docker.com/_/python>
- Swift
  - <https://hub.docker.com/_/swift>
- Jenkins
  - <https://hub.docker.com/_/jenkins>
- Go
  - <https://hub.docker.com/_/golang>
- Node.js
  - <https://hub.docker.com/_/node>
- MySQL
  - <https://hub.docker.com/_/mysql>
- PostgreSQL
  - <https://hub.docker.com/_/postgres>
- phpMyAdmin
  - <https://hub.docker.com/_/phpmyadmin>
- Redmine
  - <https://hub.docker.com/_/redmine>
- Nextcloud
  - <https://hub.docker.com/_/nextcloud>

## トラブルシューティング

以下の資料にまとめています。

- [トラブルシューティング](./troubleshoot.md)

## 構築例

- [Docker例](./example/index.md)
