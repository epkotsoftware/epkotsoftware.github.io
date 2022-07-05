(() => {
  /**
   * Geocoding APIを呼び出します。
   * @param {string} name 名前
   * @returns {Promise}
   */
  function geocodeAsync(name) {
    // fetch メソッド  resource 引数
    const url = new URL('https://geocoding-api.open-meteo.com/v1/search');
    url.search =  new URLSearchParams({ name: name, language: 'ja', count: 100 });
    const resource = url.href;
    // fetch メソッド  init 引数
    const init = { method: 'GET' };

    // Promise.prototype.then メソッド  onFulfilled 引数
    /**
     * @param {Response} value
     * @returns {Promise}
     */
    const onFulfilled = (value) => {
      if (!value.ok) {
        // HTTPステータスコードが 200~299 以外の場合にエラー
        console.error('リクエスト失敗');
        throw new Error(value.status + ' (' + value.statusText + ')');
      }
      return value.json();
    };
    // Promise.prototype.then メソッド  onRejected 引数
    const onRejected = (reason) => {
      console.error('リクエスト失敗');
      throw reason;
    };

    // fetch メソッド実行  await でレスポンスが返ってくるまで待ち、結果(JSON)をobjに代入
    return fetch(resource, init).then(onFulfilled, onRejected);
  }

  /**
   * 入力情報を基にGeocoding APIを使って検索し、結果を画面に表示します。
   * @returns {Promise} ※ 非同期(async)関数では暗黙的に戻り値がPromiseになります。
   */
  async function searchAsync() {
    const $buttonSearch = document.getElementById('buttonSearch');
    const $tbody = document.getElementById('tableResult').querySelector('tbody');
    const $divLoading = document.getElementById('divLoading');

    $buttonSearch.disabled = true;
    const name = document.getElementById('inputName').value;
    document.getElementById('spanName').textContent = name;
    $tbody.innerHTML = '';
    $divLoading.style.display = '';

    const promise = geocodeAsync(name);

    const obj = await promise;
    $divLoading.style.display = 'none';

    const $templateRow = document.getElementById('tableResultRow').content;
    const trList = document.createDocumentFragment();

    obj.results.forEach((result) => {
      const $row = $templateRow.cloneNode(true);
      const $tdNodeList = $row.querySelectorAll('td');
      $tdNodeList[0].textContent = result.country;
      $tdNodeList[1].textContent = result.name;
      $tdNodeList[2].textContent = result.latitude;
      $tdNodeList[3].textContent = result.longitude;
      trList.appendChild($row);
    });
    $tbody.innerHTML = '';
    $tbody.appendChild(trList);

    $buttonSearch.disabled = false;
  }

  // searchAsync実行（初回表示）
  searchAsync(); // 非同期で実行される(正確にはawait実行まで同期実行、awaitの時点から非同期)

  // Searchボタン クリックイベント
  //   searchAsync実行（ボタン押下時）
  document.getElementById('buttonSearch').addEventListener('click', searchAsync);
})();
