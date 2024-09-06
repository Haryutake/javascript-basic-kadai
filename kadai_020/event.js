// id=btnのHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// id=textのHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // textを「ボタンをクリックしました」というテキストに変更
  text.textContent = 'ボタンをクリックしました';
  console.log(text);
})
