const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // ×に変化
  navList.classList.toggle('open'); // メニュー開閉
});
