// 画面内に入ってきたら実行する処理
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // 要素が画面内に入ったか判定
      if (entry.isIntersecting) {
        // is-visibleクラスを付与してアニメーションを開始
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.1, // 10%くらい表示されたら反応させる
  }
);

// fade-inクラスがついている要素をすべて監視対象にする
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// ページが読み込まれたとき（リロード時含む）に実行
window.addEventListener("load", () => {
  // URLの末尾に #contact が含まれていない場合だけ、トップに戻す
  if (window.location.hash !== "#contact") {
    window.scrollTo(0, 0);
  }
});

// スクロール復元を無効にする設定
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}
