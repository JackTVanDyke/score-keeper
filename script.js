const p1 = {
  score: 0,
  button: document.querySelector("#p1Btn"),
  display: document.querySelector("#p1"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Btn"),
  display: document.querySelector("#p2"),
};

const resetBtn = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#winningScore");

let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    player.display.textContent = player.score;
    if (player.score === winningScore) {
      isGameOver = true;
      player.button.disabled = true;
      opponent.button.disabled = true;
      player.display.classList.add("winner");
      opponent.classList.add("loser");
    }
  }
}

p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});

resetBtn.addEventListener("click", reset);

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

function reset() {
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("winner", "loser");
    p.button.disabled = false;
  }
  isGameOver = false;
}
