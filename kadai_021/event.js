// id=btnのHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// id=textのHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // 2秒後にtextを「ボタンをクリックしました」というテキストに変更
  setTimeout(() => {
  text.textContent = 'ボタンをクリックしました';
  },2000);
})