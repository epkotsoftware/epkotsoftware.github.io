/* ============================================================
   研修ページ共通スクリプト

   読み込むだけで、次の4つが自動で付きます。
   HTMLに何かを書き足す必要はありません。

     1. スクロールに追従する章ナビゲーション
     2. コードブロックのコピーボタン
     3. 画面外のときは、ヘッダーの動きを止める
     4. 先頭へ戻るボタン

   使い方（</body> の直前に1行）
     <script src="../js/training.js"></script>

   なお、リンクで来たときにページの先頭から読み始める処理は
   scroll-reset.js に分けてあります。
   ブラウザが位置を戻すより先に動かす必要があり、
   <head> で読み込まないと間に合わないためです。
   ============================================================ */

/* ------------------------------------------------------------
   1. 見出しから、スクロールに追従する章ナビゲーションを作る
   <section id="..."> と その中の <h2> を拾って組み立てます。
   ------------------------------------------------------------ */
(function () {
  var sections = document.querySelectorAll('main section[id]:not(.toc)');
  if (sections.length < 2) {
    return;
  }

  var nav = document.createElement('nav');
  nav.className = 'chapter-nav';
  nav.setAttribute('aria-label', '章の一覧');

  var inner = document.createElement('div');
  inner.className = 'chapter-nav-inner';
  nav.appendChild(inner);

  var links = [];

  sections.forEach(function (section) {
    var heading = section.querySelector('h2');
    if (!heading) {
      return;
    }
    var text = heading.textContent.trim();
    var link = document.createElement('a');
    link.href = '#' + section.id;
    link.setAttribute('data-target', section.id);
    // ホバーで全文が出るようにしておく
    link.title = text;

    // 「1. タイトル」を番号と本文に分ける。
    // 番号は常に表示し、本文は現在地のときだけ見せる
    var parts = text.match(/^(\d+)[.．]\s*(.+)$/);

    if (parts) {
      var num = document.createElement('span');
      num.className = 'cn-num';
      num.textContent = parts[1];

      var label = document.createElement('span');
      label.className = 'cn-label';
      label.textContent = parts[2];

      link.appendChild(num);
      link.appendChild(label);
    } else {
      var only = document.createElement('span');
      only.className = 'cn-label is-always';
      only.textContent = text;
      link.appendChild(only);
    }

    inner.appendChild(link);
    links.push(link);
  });

  if (!links.length) {
    return;
  }

  var main = document.querySelector('main');
  main.parentNode.insertBefore(nav, main);

  if (!('IntersectionObserver' in window)) {
    return;
  }

  // いま読んでいる章を目立たせ、ナビが横に長い場合はその位置まで送る
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        links.forEach(function (link) {
          link.classList.toggle(
            'is-current',
            link.getAttribute('data-target') === entry.target.id
          );
        });

        var current = inner.querySelector('a.is-current');
        if (!current) {
          return;
        }
        var navBox = inner.getBoundingClientRect();
        var itemBox = current.getBoundingClientRect();
        if (itemBox.left < navBox.left || itemBox.right > navBox.right) {
          inner.scrollLeft += itemBox.left - navBox.left - 12;
        }
      });
    },
    { rootMargin: '-15% 0px -70% 0px' }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();

/* ------------------------------------------------------------
   2. すべてのコードブロックにコピーボタンを付ける
   ------------------------------------------------------------ */
(function () {
  var ICON =
    '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
    ' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<rect x="9" y="9" width="13" height="13" rx="2"></rect>' +
    '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>' +
    '</svg>';

  function label(text) {
    return ICON + '<span>' + text + '</span>';
  }

  function copyText(text) {
    // https で開いているとき（GitHub Pages 上）はクリップボードAPIを使う
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    // file:// で直接開いた場合はAPIが使えないため、旧方式で代替する
    return new Promise(function (resolve, reject) {
      var area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.top = '-1000px';
      document.body.appendChild(area);
      area.select();
      try {
        if (document.execCommand('copy')) {
          resolve();
        } else {
          reject(new Error('copy failed'));
        }
      } catch (error) {
        reject(error);
      }
      document.body.removeChild(area);
    });
  }

  // コピー対象を集める。
  //   1. <pre> はすべて対象
  //   2. <code> のうち、ブロック表示で改行が保持されているもの
  //      （見本ごとに置いているコード枠。文中の <code> は対象外）
  var blocks = [];

  document.querySelectorAll('pre').forEach(function (el) {
    blocks.push(el);
  });

  document.querySelectorAll('code').forEach(function (el) {
    // <pre> の中の <code> は、親の <pre> 側で対応済み
    if (el.closest('pre')) {
      return;
    }
    var style = window.getComputedStyle(el);
    if (style.display === 'block' && style.whiteSpace.indexOf('pre') === 0) {
      blocks.push(el);
    }
  });

  blocks.forEach(function (code) {
    // VS Code 風の枠は枠全体を基準にする。それ以外は包む要素を作る
    var host = code.closest('.vscode');

    if (!host) {
      host = document.createElement('div');
      host.className = 'code-block';
      code.parentNode.insertBefore(host, code);
      host.appendChild(code);
    }

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-button';
    button.innerHTML = label('コピー');
    button.setAttribute('aria-label', 'コードをコピー');
    host.appendChild(button);

    button.addEventListener('click', function () {
      copyText(code.innerText).then(
        function () {
          button.classList.add('is-copied');
          button.innerHTML = label('コピーしました');
          window.setTimeout(function () {
            button.classList.remove('is-copied');
            button.innerHTML = label('コピー');
          }, 1800);
        },
        function () {
          button.innerHTML = label('コピーできません');
          window.setTimeout(function () {
            button.innerHTML = label('コピー');
          }, 1800);
        }
      );
    });
  });

  // 表の中など、短い文字列をそのまま写せるようにする。
  //   <code class="copy-chip">拡張機能の名前</code>
  // と書くと、うしろにコピーボタンが付く。
  // 検索欄へ貼るだけで済むので、打ち間違いが起きない。
  document.querySelectorAll('.copy-chip').forEach(function (chip) {
    // ボタンを足す前に控えておく（足したあとだとボタンの文字まで混ざる）
    var text = chip.textContent.trim();

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-chip-btn';
    button.innerHTML = label('コピー');
    button.setAttribute('aria-label', text + ' をコピー');
    chip.appendChild(button);

    button.addEventListener('click', function () {
      copyText(text).then(
        function () {
          // 文字は「コピー」のまま変えない。
          // 差し替えるとボタンの幅が伸びて、表がガタつくため。
          // 済んだことは、チェックの印と緑色で伝える（CSS側）
          button.classList.remove('is-failed');
          button.classList.add('is-copied');
          window.setTimeout(function () {
            button.classList.remove('is-copied');
          }, 1800);
        },
        function () {
          button.classList.remove('is-copied');
          button.classList.add('is-failed');
          window.setTimeout(function () {
            button.classList.remove('is-failed');
          }, 1800);
        }
      );
    });
  });
})();

/* ------------------------------------------------------------
   3. ヘッダーが画面外にあるとき、背景の動きを止める
   読んでいる間ずっと裏で描画し続けるのを避け、
   低スペック機での負荷とバッテリー消費を減らす
   ------------------------------------------------------------ */
(function () {
  var header = document.querySelector('header');
  if (!header || !('IntersectionObserver' in window)) {
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      header.classList.toggle('is-offscreen', !entries[0].isIntersecting);
    },
    { threshold: 0 }
  );

  observer.observe(header);
})();

/* ------------------------------------------------------------
   4. 先頭へ戻るボタンを右下に置く
   ------------------------------------------------------------ */
(function () {
  var ARROW =
    '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
    ' stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M12 19V5"></path><path d="M5 12l7-7 7 7"></path></svg>';

  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'to-top';
  button.innerHTML = ARROW;
  button.setAttribute('aria-label', 'ページの先頭へ戻る');
  button.setAttribute('title', '先頭へ戻る');
  document.body.appendChild(button);

  button.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 少し読み進めてから現れるようにする
  function update() {
    button.classList.toggle('is-visible', window.scrollY > 400);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
