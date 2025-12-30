// ボタンとメッセージの要素を取得
const button = document.getElementById("myButton");
const message = document.getElementById("message");

// ボタンがクリックされた時の処理
button.addEventListener("click", () => {
  message.textContent = "こんにちは！JavaScriptが動きました！";
  message.style.color = "blue";
});
