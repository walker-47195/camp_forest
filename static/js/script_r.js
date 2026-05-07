// rentalチーム分のjs機能コードここから
// 1.フード(6枚)
// 2.ドリンク(3枚)
// 3.レンタル(9枚)
const menu = document.querySelector('#menu');

/* // ハンバーガー始め
var hamburger = document.querySelector('.hamburger-menu');
var navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  var isOpen = navMenu.classList.contains('active');
  var items = navMenu.querySelectorAll('a');

  if (isOpen) {
    items.forEach(function (item, idx) {
      setTimeout(function () {
        item.classList.add('show');
      }, 250 + idx * 150);
    });
  } else {
    items.forEach(function (item) {
      item.classList.remove('show');
    });
  }
});
// ここまで */

const lists = [
  // 1.フード
  {
    name: 'ステーキ',
    img: 'image/food/image00.jpg',
    price: 2500,
    lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  {
    name: 'ソーセージ盛り合わせ',
    img: 'image/food/image01.jpg',
    price: 1300, lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  {
    name: 'パエリア',
    img: 'image/food/image02.jpg',
    price: 3000,
    lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  {
    name: '海鮮',
    img: 'image/food/image03.jpg',
    price: 1500,
    lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  {
    name: '焼き鳥',
    img: 'image/food/image04.jpg',
    price: 1000,
    lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  {
    name: '肉野菜セット',
    img: 'image/food/image05.jpg',
    price: 2000,
    lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  // 1.フードここまで

  // 2.ドリンク
  {
    name: 'シャンパン',
    img: 'image/drink/image06.jpg',
    price: 2000,
    lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  {
    name: 'ビール',
    img: 'image/drink/image07.jpg',
    price: 670,
    lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  {
    name: 'ワイン',
    img: 'image/drink/image08.jpg',
    price: 1500,
    lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  // 2.ドリンクここまで

  // 3.レンタル
  {
    name: 'カセットコンロ',
    img: 'image/rental/image09.jpg',
    price: 750,
    lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  {
    name: 'テーブル',
    img: 'image/rental/image10.jpg',
    price: 3500,
    lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  {
    name: 'テント',
    img: 'image/rental/image11.jpg',
    price: 7000,
    lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  {
    name: 'ハンモック',
    img: 'image/rental/image12.jpg',
    price: 1500,
    lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  {
    name: 'ポータブル電源',
    img: 'image/rental/image13.jpg',
    price: 10000,
    // #ポータブル電源実装必須(QAページ連携)
    lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  {
    name: 'ランプ',
    img: 'image/rental/image14.jpg',
    price: 500,
    lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  {
    name: '調理セット一式',
    img: 'image/rental/image15.jpg',
    price: 2500,
    lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  {
    name: 'ハンゴウ',
    img: 'image/rental/image16.jpg',
    price: 300,
    lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  {
    name: '焚き火台',
    img: 'image/rental/image17.jpg',
    price: 1000,
    lines: "- - - - - - - - - - - - - - - - - - - - - - - - -",
  },
  // 3.レンタルここまで
];

for (let i = 0; i < lists.length; i++) {
  const name = lists[i].name;
  const img = lists[i].img;
  const price = lists[i].price.toLocaleString('ja-JP');
  // 追加分:定数名price数値3桁区切表示(例:x,xxx円)
  const lines = lists[i].lines;
  //const content = `<div><img src="/static/image/${img}" alt=""><h2>${name}</h2><p>${price}円</p>${lines}</div>`;
  const content = `<div><img src="/static/${img}" alt=""><h2>${name}</h2><p>${price}円</p>${lines}</div>`;
  menu.insertAdjacentHTML('beforeend', content);
  //  const content = `<div><img src="images/${img}" alt=""><h2>${name}</h2><p>${price}円</p>${lines}</div>`;
  //  menu.insertAdjacentHTML('beforeend', content);
}
// rentalチーム分のjs機能コードここまで
