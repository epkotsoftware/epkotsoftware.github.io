# 自己学習

## 目次

| No. |  |
| :---: | --- |
| 1 | [システム開発工程](#システム開発工程) |
| 2 | [TypeScript](#typescript) |
| 3 | [Javascriptフレームワーク](#javascriptフレームワーク) |
| 4 | [Codeigniter4](#codeigniter4) |
| 5 | [Java](#java) |
| 6 | [Python](#python) |
| 7 | [C\# / VB.NET](#c--vbnet) |
| 8 | [Tailwind CSS](#tailwind-css) |
| 9 | [資格](#資格) |
| 10 | [社外研修](#社外研修)) |

## システム開発工程

企画からテストまでを、徳田さんが動画にしているので参考にしてください。

- 開発実況シリーズ
  - <https://www.youtube.com/playlist?list=PLgx8xyH2m7OUtmSNw_RLOUDiBnZjhz0d8>

## TypeScript

案件が少ないかもしれませんが TypeScript をご紹介します。  

TypeScriptは、大規模開発には向いていないJavaScriptに  
静的型付けを出来るようにしたプログラミング言語です。  
TypeScriptをコンパイルすると、JavaScriptが出来上がります。  

Playground はTypeScriptをコンパイルし、実行できるサイトです。  

- TypeScript超入門 覚えることは9個だけ！
  - <https://youtu.be/FSTrSYwqhLg>
- TypeScript
  - <https://www.typescriptlang.org/>
- `TypeScript: TS Playground`
  - <https://www.typescriptlang.org/play>

## JavaScriptフレームワーク

2022年現在、日本では`Vue.js`, `React.js`の人気が高いです。  
フロントエンドは入れ替わりが激しいため、廃れる事も想定して浅く学習しておきましょう。

- Vue.js
  - <https://jp.vuejs.org/index.html>
- React
  - <https://ja.reactjs.org/>
- Vue.js 入門
  - <https://jp.linkedin.com/learning/learning-vue-js-2>
- React.js 入門
  - <https://jp.linkedin.com/learning/learning-react-js>
- 新・日本一わかりやすいReact入門【基礎編】
  - <https://www.youtube.com/playlist?list=PLX8Rsrpnn3IWPoM7-1YPDksRRkamRY25k>
- Angular 4 基本講座
  - <https://jp.linkedin.com/learning/angular-4-essential-training>

### 新しいJavaScriptフレームワーク

参考までに新しいフレームワークをご紹介します。  
Vue.js、React.jsで採用されている仮想DOMを使用しないことにより  
高速化を実現しています。

- `Solid`
  - <https://www.solidjs.com/>
  - `2021/06/28 v1.0.0`
    - <https://github.com/solidjs/solid/releases/tag/v1.0.0>
  - チュートリアル
    - <https://www.solidjs.com/tutorial/introduction_basics>
- `Svelte`
  - <https://svelte.jp/>
  - `2016/11/30 v1.0.0`
    - <https://github.com/sveltejs/svelte/releases/tag/v1.0.0>
  - チュートリアル
    - <https://svelte.jp/tutorial/basics>
- `The State of JS 2021 - Front-end Frameworks`
  - <https://2021.stateofjs.com/en-US/libraries/front-end-frameworks/>

## CodeIgniter4

PHPフレームワークのCodeIgniter4に関する資料です。  
Laravelに非常に似ているため、参考までに。

- [CodeIgniter4](./../../training/codeigniter4.md)

## Java

「Java」は古くからある言語で、大規模開発にも利用されており  
オブジェクト指向言語の代表とも呼べる言語です。  
PHPが動的型付け言語に対し、Javaは静的型付け言語のため  
変数宣言時に型を明確にして宣言したり、引数の型も必須になります。  
プログラミング学習においては、動的型付け言語はおすすめです。  

IDEは、VSCodeはほとんど使われず、「eclipse」が多そうです。  

- Java 入門
  - <https://jp.linkedin.com/learning/learning-java?trk=learning-serp_learning-search-card_search-card&upsellOrderOrigin=default_guest_learning>

## Python

「Python」はライブラリが充実しており  
Webやクライアントアプリ開発が可能です。  
需要も上がってきており、将来性もある言語なので興味がある方は学習してください。  
Python案件に参画している社員もいます。

- Python
  - <https://www.python.org/>
- プログラミング言語 Python情報サイト
  - <https://www.python.jp/>
- DockerでPython実行環境を作ってみる
  - <https://github.com/jhorikawa/Create-Docker-Container-for-Python-Environment-Handson>
- `The State of the Octoverse | Top languages over the years`
  - <https://octoverse.github.com/#top-languages-over-the-years>
- 【動画】Python入門
  - <https://www.youtube.com/playlist?list=PLiaZfx-34L5oK_8hLi_jbmFfZgZoGCqnr>

## C\# / VB.NET

「`C#`」、「`VB.NET`」は構文が違うだけで、同じように書くことが出来ます。  

IDEである「Visual Studio Community」は個人利用であれば無償で使うことが出来ます（会社のメールアドレスのアカウントは使用しない方が良いかもしれません）。  
「Visual Studio Express」は組織でも無料で使えます。  

| 言語 | 解説 |
| --- | --- |
| C# | Javaに近い言語です。<br>様々なアプリ開発が可能です。 |
| VB.NET | C#をVBAのような構文にした言語です。<br>現在では「Visual Basic」、「VB」とも呼ばれます。 |

`C#`、`VB.NET`で作れるアプリです。

| アプリ | 開発用途 | 備考 |
| --- | --- | --- |
| Windows Forms App | Windowsアプリ | 画面作成が簡単で案件が多い印象、WinFormsと略される |
| WPF | Windowsアプリ | WinFormsより大規模開発向け |
| UWP | Windowsアプリ | Microsoft Storeのアプリ |
| ASP.NET | Webアプリ | 手法がたくさんあり学習が難しい |
| Xamarin | マルチプラットフォームアプリ | 大した事が出来ず案件は少ない、「.NET MAUI」が主流になると思われる |
| .NET MAUI | マルチプラットフォームアプリ | 2022/5/23 リリース、将来性がある |
| Unity | マルチプラットフォームアプリ | 主に3Dゲーム開発に使われる。<br>VBは使えない（VBで作ったクラスライブラリを組み込む事は恐らく可能） |

- `.NETアプリ`
  - <https://dotnet.microsoft.com/ja-jp/>
  - `Xamarin`
    - <https://dotnet.microsoft.com/ja-jp/learn/xamarin/what-is-xamarin>
  - `Windows Forms App チュートリアル: .NET を使用して Windows フォーム アプリを作成する`
    - <https://docs.microsoft.com/ja-jp/dotnet/desktop/winforms/get-started/create-app-visual-studio>
  - `WPF チュートリアル: .NET を使用して新しい WPF アプリを作成する`
    - <https://docs.microsoft.com/ja-jp/dotnet/desktop/wpf/get-started/create-app-visual-studio>
  - `ASP.NET`
    - <https://dotnet.microsoft.com/ja-jp/apps/aspnet>
  - `Unity`
    - <https://dotnet.microsoft.com/ja-jp/apps/games/unity>
- `Visual Studio`
  - <https://visualstudio.microsoft.com/ja/>
  - `Visual Studio Community - 各エディションの比較 組織で5ユーザーまでは無料`
    - <https://visualstudio.microsoft.com/ja/vs/compare/>
  - `Visual Studio Express 2017 - 無料`
    - <https://visualstudio.microsoft.com/ja/vs/express/>
- `DOBON.NET`
  - <https://dobon.net/>
- `Xamarin とは`
  - <https://docs.microsoft.com/ja-jp/xamarin/get-started/what-is-xamarin>
- `Unity を使用した Visual Studio for Mac でのゲーム作成の概要`
  - <https://docs.microsoft.com/ja-jp/visualstudio/mac/unity-walkthrough>
- `YouTubeチャンネル - dotNET`
  - <https://www.youtube.com/c/dotNET>
- `C# 入門講座`
  - <https://www.umayadia.com/CSNyumon/CSNyumonToc.htm>

## Tailwind CSS

Laravelのスターターテンプレートにも組み込まれている、CSSフレームワークです。  
ペジネーションのデフォルトも Tailwind CSS に互換性があるHTMLが生成されます。  
書き方は、Bootstrapに似ていますので、必要になったら学習してください。

- `Tailwind CSS`
  - <https://tailwindcss.com/>
- `Laravel 9.x Database：ペジネーション`
  - <https://readouble.com/laravel/9.x/ja/pagination.html>

## 資格

エンジニアで取得が必須となる資格はありませんが  
「基本情報技術者試験」の学習は、必要な基礎知識が身につきます。

- `試験制度: 試験区分一覧`
  - <https://www.jitec.ipa.go.jp/1_11seido/seido_gaiyo.html>
- 基本情報技術者についてもっと詳しく知る！
  - <https://www.foresight.jp/fe/column/>

## 社外研修

- mixi
  - データベース研修【ミクシィ22新卒技術研修】
    - <https://youtu.be/dseGQ2MZF1U>
  - 設計・テスト研修講義【21新卒技術研修】
    - <https://youtu.be/zfAo0DyIBJ0>
  - Git研修講義【21新卒技術研修】
    - <https://youtu.be/aZ90usArA6g>
  - コンテナ研修【ミクシィ22新卒技術研修】
    - <https://youtu.be/qYp8Vvevcok>
