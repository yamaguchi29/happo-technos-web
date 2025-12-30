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

// スライドショーに使用する画像のリスト（自分の画像パスに変更してください）
const images = [
  "images/都会夜景.jpg",
  "images/work1.jpg", // 先ほど作成した施工実績の画像などを流用
  "images/work2.jpg",
];

let currentIndex = 0;
const slideBg = document.getElementById("slide-bg");

function changeBackground() {
  // 画像をセット
  slideBg.style.backgroundImage = `url('${images[currentIndex]}')`;

  // 次のインデックスへ（最後まで行ったら0に戻る）
  currentIndex = (currentIndex + 1) % images.length;
}

// 最初に1回実行
changeBackground();

// 5秒（5000ミリ秒）ごとに画像を切り替える
setInterval(changeBackground, 5000);
