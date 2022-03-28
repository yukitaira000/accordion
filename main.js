const openBtn = document.querySelectorAll('.btn');
// btnクラスをHTMLより取得
const parent = document.querySelectorAll('.content');
// contentクラスをHTMLより取得


for(let i = 0; i < openBtn.length; i ++){
  const menuAction = function(){
    this.classList.toggle('active');
    // 開閉ボタンを作動させるために、開閉ボタンにもactiveクラスをつけたり外したりしています
    parent[i].nextElementSibling.classList.toggle('active');
    // 今実行しているopenBtnのindex番号と同じparentのindex番号の次のものにactiveクラスをつける、またはついていれば削除する
  }
  openBtn[i].addEventListener('click', menuAction);
  // 開閉ボタンをクリックしたときにtoggleと定義した関数を呼び出し実行する。
}