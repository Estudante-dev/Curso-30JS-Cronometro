const display = document.querySelector('.display');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resetBtn = document.querySelector('#reset');
let intervalId;
let time = 0;

function updateTime() {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
  display.textContent = formattedTime;
}

function startTimer() {
  intervalId = setInterval(() => {
    time++;
    updateTime();
  }, 1);
}

function pauseTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  time = 0;
  updateTime();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
