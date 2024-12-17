let seconds = 10;
let secondsLeft = seconds;
let timer;
let elementSecondsLeft = document.getElementById("seconds-left");

if (elementSecondsLeft) {
  updateSecondsLeft();
  timer = setInterval(updateSecondsLeft, 1000);
}

function updateSecondsLeft() {
  elementSecondsLeft.innerText = secondsLeft;

  if (secondsLeft <= 0) {
    clearInterval(timer);
    removeSale();
  }

  secondsLeft--;
}

function removeSale() {
  let p = document.querySelector(".burning-sale p");
  p.innerHTML = "Не успели :(";

  let image = document.querySelector(".burning-sale img");
  image.style.opacity = "0";
}
