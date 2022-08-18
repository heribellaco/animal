const clickcoin = document.querySelector(".coin");

function alertBtn() {
  alert("I love JavaScript");
  window.open("../cover.html");
}

clickcoin.addEventListener("click", alertBtn);
