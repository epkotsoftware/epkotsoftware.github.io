(() => {
    const content = document.getElementById('content');
    const ul = document.getElementById('ulSidebarMenuItems');
    const h2List = content.querySelectorAll('h2');

    /**
     * li クリックイベント
     * @param {Event} event
     */
    const onClickLi = event => {
        window.scrollTo(0, 0);
        window.location = '#' + event.target.dataset.id;
    }

    const fragment = document.createDocumentFragment();
    for (const h2 of h2List) {
        const li = document.createElement('li');
        li.textContent = h2.textContent;
        li.setAttribute("data-id", h2.id);
        li.addEventListener('click', onClickLi);
        fragment.appendChild(li);
    }
    ul.appendChild(fragment);
})();
