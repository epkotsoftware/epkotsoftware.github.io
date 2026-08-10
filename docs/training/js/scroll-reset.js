/* ============================================================
   ページを開いたときのスクロール位置を決める

   ▼ 何を直すためのものか

   ブラウザには、一度開いたページを再訪すると
   前回読んでいた位置へ自動で戻す機能があります。
   （history.scrollRestoration の既定値 "auto"）

   前後のページを行き来する教材では、これが裏目に出ます。
   「次のページへ」はページの一番下にあるので、
   そのページを一度でも通れば、必ず末尾が記憶されます。
   すると次に開いたとき、いきなり末尾から始まってしまいます。

   ▼ どう直すか

   ブラウザ任せの復元は止めます（manual）。
   そのうえで、「戻る」「進む」で来たときだけ、
   自分で控えておいた位置に戻します。

     ・リンクで来たとき          → ページの先頭から
     ・「戻る」「進む」で来たとき → 読んでいた位置に戻す
     ・#見出し 付きで来たとき    → その見出しへ（何もしない）

   ブラウザ任せにできないのは、scrollRestoration が
   「履歴エントリごとの設定」だからです。
   リンクで入ったときに manual にすると、その設定は
   そのページの履歴に残ります。あとで「戻る」で戻ってきても
   manual のままなので、復元されません。
   結局どちらか一方しか選べないため、自分で持つことにしています。

   ▼ なぜ training.js と分けて <head> で読むのか

   ブラウザが位置を戻すのは、ページの読み込みが進んで
   高さが決まったあとです。
   training.js は </body> の直前で読み込むため、
   設定が間に合わないことがあります。
   確実に先回りするには <head> で読む必要があります。

     <head>
       <script src="../js/scroll-reset.js"></script>
     </head>
   ============================================================ */
(function () {
  if (!('scrollRestoration' in history)) {
    return;
  }

  // ファイル名ごとに覚える。タブを閉じるまでの一時的な記憶
  var KEY = 'training:scroll:' + location.pathname;

  function save(value) {
    try {
      sessionStorage.setItem(KEY, String(value));
    } catch (error) {
      // プライベートモードなどで使えないことがある。
      // 位置を覚えられないだけなので、そのまま進める
    }
  }

  function load() {
    try {
      return sessionStorage.getItem(KEY);
    } catch (error) {
      return null;
    }
  }

  history.scrollRestoration = 'manual';

  // このページを離れるとき、読んでいた位置を控えておく。
  // pagehide は、閉じる・移動する・戻るのどれでも呼ばれる
  window.addEventListener('pagehide', function () {
    save(window.scrollY);
  });

  // #見出し を指定して来たときは、その位置へ行くのが正しい
  if (location.hash) {
    return;
  }

  var entries = performance.getEntriesByType('navigation');
  if (!entries.length || entries[0].type !== 'back_forward') {
    return;
  }

  var saved = load();
  if (saved === null) {
    return;
  }

  // 画像などで高さが変わるので、読み込みが終わってから戻す。
  // html に scroll-behavior: smooth が効いているため、
  // instant を指定しないと画面が滑って動くのが見えてしまう
  window.addEventListener('load', function () {
    window.scrollTo({ top: Number(saved), behavior: 'instant' });
  });
})();
