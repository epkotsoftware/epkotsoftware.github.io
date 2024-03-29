# AI

## はじめに

AI利用方法についてまとめました。  

## 禁止事項

- 現場によっては、禁止されている場合もあるため、現場のルールに従っていただくようお願いします。
- 送信したメッセージは人目に触れる可能性があるため、機密情報を送信する際には注意が必要です。  
  ***※ 以下にChatGPT公式の注意事項を抜粋して掲載しました。***

```txt
会話は、当社のAIトレーナーによってレビューされ、システムを改善するために使用されることがあります。
(Translation: Conversations may be reviewed by our AI trainers to improve our systems.)
```

```txt
会話の中で機密情報を共有しないでください。
(Translation: Please don't share any sensitive information in your conversations.)
```

## Bing AI

- Bing AI（Microsoft Edgeで開くこと）
  - <https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx>

## ChatGPT

ChatGPTは、以下のサイトで利用できます。
なお、利用にはOpenAIアカウントが必要となりますので、  
「Sign up」ボタンからアカウントを作成してください。

- ChatGPT
  - <https://chat.openai.com/chat>

## OpenAI APIキー

自作のツールや VSCode 拡張機能などで利用するために必要な API キーは、下記のリンクから作成することができます。

- OpenAI API
  - <https://platform.openai.com/account/api-keys>

「Log in」でログインした後に  
「Create new secret key」でキーを作成します。

***※ 注意点： 生成された API キーは他人に見られないようにしましょう。***

### OpenAI API Usage

APIキーを使用する際の注意点として、使用量の上限があります。  
期限付きの無料クレジットが付与されます。  
計画的にAPIを利用するようにしましょう。

- `Usage - OpenAI API`
  - <https://platform.openai.com/account/usage>

## AI利用方法

AIは、通常の検索とは異なり、対話形式で行います。  
前回の質問内容を把握しているので、結果に対して  
「具体例を教えて」、「もっと詳細に」といったメッセージを送信すると、  
より深い内容を解説してくれます。  

ChatGPTに利用のコツを教えてもらいましょう。  

### ChatGPTとのやりとり

```txt
# You
ChatGPTの使い方のコツを教えて
```

```md
こんにちわ！ChatGPTです。ChatGPTを使う上でのコツはいくつかあります。

以下に、ChatGPTをより効果的に利用するためのヒントをいくつか紹介します。

### 1. クエリを明確にする
ChatGPTは非常に優れた自然言語処理能力を持っていますが、その反面、対話中に混乱することがあるため、クエリをできるだけ明確にすることが重要です。可能な限り正確な文章やフレーズを使うようにしてください。

### 2. 再度提示する
ChatGPTが迅速かつ正確に返答を提供できることが保証されていません。もしChatGPTが回答を提供しない場合は、再提示するとよいです。

### 3. 質問により詳細を追加する
ChatGPTは、質問に答えるだけでなく、必要に応じて情報を追加したり、「次に何が続くか」を教えたりすることもできます。適切なマーカーやキーワードを使って情報を付加するようにしてください。

以上のように、ChatGPTをサポートするためのいくつかのヒントを紹介しました。適切なクエリや明確な表現を使えば、ChatGPTは役立つことができます！
```

```txt
# You
具体例を教えて
```

```md
もちろんです！以下に具体例をいくつか紹介します。

### 1. クエリを明確にする
- **不十分なクエリ**：「Pythonの問題がある」
- **明確なクエリ**：「Pythonで文字列を逆順にする方法をおしえてください。」

### 2. 再度提示する
- **回答なし**：ユーザー「こんにちは、DjangoでORMを使ってモデルを作成したいのですが、どうすればいいですか？」 ChatGPT：（何も返信しない）
- **再提示あり**：ユーザー「DjangoでORMを使ってモデルを作成する方法を教えてください。」 ChatGPT：「はい、これはDjangoでORMを使った前提でのサンプルコードです...」

### 3. 質問により詳細を追加する
- **不十分な質問**：「JavaScriptでDOMを操作する方法を教えてください。」
- **詳細を追加した質問**： 「JavaScriptでDOMを操作する方法を教えてください。特に、ページに新しい要素を追加する場合はどうすればいいですか？」

以上のように、適切なクエリや表現を行うことでChatGPTとの対話がスムーズに進むようになります
```

## AIが提案したコードの利用

2023年4月時点におけるChatGPT(gpt-3.5-turbo)では、  
様々なプログラムコードを提案してくれますが、  
複雑になると、誤った情報を提案することもあります。  

従って、プログラミング基礎を習得し、提案されたコードを理解した上で  
活用するようにしてください。

## VSCode拡張機能（ChatGPT - Genie AI）

VSCode上でChatGPTを利用することができ、  
コードの自動生成も可能です。

- `ChatGPT - Genie AI`
  - <https://marketplace.visualstudio.com/items?itemName=genieai.chatgpt-vscode>
- `VSCode拡張機能「 ChatGPT - genie AI - 」AI時代の使い方 入門`
  - <https://youtu.be/j5wa9soV5Co>

### Genie AIのレスポンスを日本語にする

デフォルトではチャット内容を英語で表示してしまいますが、Genieの設定を変更することにより、  
エディタでコードを選択して右クリックメニューから「`Genie: xxxx`」を選択した際に、結果が日本語で表示されるようになります。  

例えば、以下のように、「`Genieai › Prompt Prefix: Explain`」を下記の設定値に変更することで、コードの解説が日本語で表示されるようになります。  

```txt
Explain the following code 結果は日本語でお願いします。
```
