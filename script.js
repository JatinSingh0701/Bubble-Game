let panleBottom = document.getElementById("pbtm");
let timerValue = document.getElementById("Timervalue");
let scoreValue = document.getElementById("scorevalue");
let startBtn = document.getElementById("startbtn");
let restartBtn;
let hitValue = document.getElementById("hitValue");

let hitRun;
let timer = 60;
let score = 10;

const increaseScore = () => {
  score += 10;
  scoreValue.textContent = score;
};

const getNewHit = () => {
  hitRun = Math.floor(Math.random() * 10);
  hitValue.textContent = hitRun;
};

const makeBubble = () => {
  let clutter = "";

  for (let i = 1; i <= 168; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${rn}</div>`;
  }

  panleBottom.innerHTML = clutter;
};

const endGame = () => {
  panleBottom.innerHTML = `
    <h1>Game Over Score ${score}</h1>
    <button id="restartbtn" class="button">Restart</button>
  `;

  restartBtn = document.getElementById("restartbtn");
  restartBtn.addEventListener("click", () => {
    score = 10;
    timer = 60;
    timerValue.style.color = "black";
    scoreValue.textContent = score;
    timerValue.textContent = timer;
    makeBubble();
    getNewHit();
    runTimer();
  });
};

const runTimer = () => {
  let timerInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      timerValue.innerHTML = timer;

      if (timer < 10) {
        timerValue.style.color = "red";
      }
    } else {
      clearInterval(timerInt);
      endGame();
    }
  }, 1000);
};

panleBottom.addEventListener("click", (dets) => {
  let clickedNumber = Number(dets.target.textContent);
  if (clickedNumber === hitRun) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

startBtn.addEventListener("click", () => {
  getNewHit();
  runTimer();
  makeBubble();
});
