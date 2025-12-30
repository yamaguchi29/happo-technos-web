// ボタンとメッセージの要素を取得
const button = document.getElementById("myButton");
const message = document.getElementById("message");

// ボタンがクリックされた時の処理
button.addEventListener("click", () => {
  message.textContent = "こんにちは！JavaScriptが動きました！";
  message.style.color = "blue";
});

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
