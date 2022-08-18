const clickcoin = document.querySelector(".coin");

function alertBtn() {
  document.getElementById("audio").play();
  window.open("../cover.html");
}

clickcoin.addEventListener("click", alertBtn);
