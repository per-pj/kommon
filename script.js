const logo = document.querySelector('.logo');
const content = document.querySelector('.content');
const textSpans = content.querySelectorAll('.main-text span');
const btn = content.querySelector('.btn');

// ページロード時：全体フェード＋ロゴスライド
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  logo.classList.add('start');
});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const contentTop = content.offsetTop;

  // ロゴ縮小＋パララックス
  const scale = Math.max(0.7, 1 - scrollY / 800);
  const parallaxY = scrollY * 0.3;
  logo.style.transform = `translateY(${parallaxY}px) scale(${scale})`;

  // コンテンツフェードイン
  if (scrollY + windowHeight > contentTop + 50) {
    content.style.opacity = 1;
    content.style.transform = 'translateY(0)';

    // 事業内容テキストのタイプライター風アニメ
    textSpans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('visible');
      }, index * 150);
    });

    // ボタンアニメーション
    setTimeout(() => {
      btn.classList.add('visible');
    }, textSpans.length * 150);
  }
});
