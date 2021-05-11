let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", check);

function check() {
  const num = Number(document.querySelector(".guess").value);
  if (!num) {
    document.querySelector(".message").textContent = "No number";
  } else if (num === secretNum) {
    document.querySelector(".message").textContent = "Correct number";
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
      document.querySelector(".num").textContent = secretNum;
    }
  } else if (num !== secretNum) {
    if (score > 1) {
      if (num > secretNum) {
        document.querySelector(".message").textContent = "Too high";
      } else {
        document.querySelector(".message").textContent = "Too low";
      }
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
}

document.querySelector(".again").addEventListener("click", again);

function again() {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".num").textContent = "?";
  document.querySelector(".guess").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
}
