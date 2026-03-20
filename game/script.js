const input = document.querySelector(".game__input");
const btn = document.querySelector(".game__btn");
const timeDisplay = document.querySelector(".game__time");
const gameBox = document.querySelector(".gameBox");

let score = 0;
let time = 0;
let intervalId = null; // потом поменяет
let ifPlaying = false;

btn.addEventListener("click", (event) => {
  event.preventDefault(); // обнуляем
  if (!ifPlaying) {
    if (input.value > 4) {
      time = Number(input.value);
      input.value = "";
      startGame();

      ifPlaying = true;
      btn.textContent = "Stop";
      btn.style.background = "red";
    }
  } else {
    // stop
    endGame();
  }
});

// старт игры
function startGame() {
  score = 0;
  gameBox.innerHTML = "";

  timeDisplay.textContent = `00:${time < 10 ? "0" + time : time}`; // показывает сразу стартовое время ..

  intervalId = setInterval(decreaseTime, 1000);
  createBall();
}

// уменьшение нашей игры
function decreaseTime() {
  if (time <= 0) {
    endGame();
    return;
  }
  time--;

  let currentTime = time < 10 ? "0" + time : time;
  /// обновление дисплея
  timeDisplay.textContent = `00:${currentTime}`;
}

// игра закончилась
function endGame() {
  clearInterval(intervalId);
  // вывод на экран результат пользователя
  ifPlaying = false;
  btn.textContent = "Start";
  btn.style.background = "green";
  gameBox.innerHTML = `<h2 class="result"> Your score: ${score}</h2>`;
}

// чтобы мячик появлялся в разных местах не только в одном месте
// и так же надо сделать чтобы не выходил за границы поля
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// теперь можно создать наш шар

function createBall() {
  gameBox.innerHTML = "";

  const ball = document.createElement("div"); // наш мяч
  const size = rand(10, 100);

  const box = gameBox.getBoundingClientRect();
  const x = rand(0, box.width - size);
  const y = rand(0, box.height - size);

  ball.classList.add("ball"); // push ball

  ball.style.width = `${size}px`;
  ball.style.height = `${size}px`;
  ball.style.top = `${y}px`;
  ball.style.left = `${x}px`;
  ball.style.background = "red";

  // клик для шарика чтобы появлялся

  ball.addEventListener("click", () => {
    score++;
    //новый будет создовать
    createBall();
  });
  gameBox.append(ball);
}
