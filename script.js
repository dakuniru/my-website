// スライドイン対象の要素をすべて取得
const slideElements = document.querySelectorAll('.slide-in');

// Intersection Observer を使ってスクロール検知
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2 // 要素が20%見えたら発火
});

// 各要素を監視開始
slideElements.forEach(el => observer.observe(el));