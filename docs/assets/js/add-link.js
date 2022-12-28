(() => {
    const content = document.getElementById('content');
    const ul = document.getElementById('ulSidebarMenuItems');
    const h2NodeList = content.querySelectorAll('h2');
    const scrollIntoViewOptions = {
        behavior: 'instant',
        block: 'start',
        inline: 'start',
    };

    /**
     * li クリックイベント
     * @param {Event} event
     */
    const onClickLi = event => {
        scrollTo(0, 0); // scrollIntoView で上方向に移動しないため、スクロールを最上部に設定
        // liタグのdata-id 属性値(h2のid)取得し、要素を取得、scrollIntoViewメソッドでh2要素までスクロール
        document.getElementById(event.target.dataset.id).scrollIntoView(scrollIntoViewOptions);
    }

    const fragment = document.createDocumentFragment();
    for (const h2 of h2NodeList) {
        const li = document.createElement('li');
        li.textContent = h2.textContent;
        li.setAttribute('data-id', h2.id);
        li.addEventListener('click', onClickLi);
        fragment.appendChild(li);
    }
    ul.appendChild(fragment);
})();
