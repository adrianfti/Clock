// footer ----------

const hire = document.getElementById("hire");
let clockEl = document.querySelector(".clockContainer");
let stopwatchEl = document.querySelector(".stopwatchContainer");
let timerEl = document.querySelector(".timerContainer");

let clockBtn = document.querySelector(".currentTime");
let stopwatchBtn = document.querySelector(".stopwatch");
let timerBtn = document.querySelector(".timer");

clockBtn.addEventListener("click", function () {
  clockEl.classList.remove("hidden");
  stopwatchEl.classList.add("hidden");
  timerEl.classList.add("hidden");
  hire.classList.add("hidden");

  clockBtn.style.backgroundColor = "orange";
  stopwatchBtn.style.backgroundColor = "#333";
  timerBtn.style.backgroundColor = "#333";
});

stopwatchBtn.addEventListener("click", function () {
  clockEl.classList.add("hidden");
  stopwatchEl.classList.remove("hidden");
  timerEl.classList.add("hidden");
  hire.classList.add("hidden");

  clockBtn.style.backgroundColor = "#333";
  stopwatchBtn.style.backgroundColor = "orange";
  timerBtn.style.backgroundColor = "#333";
});

timerBtn.addEventListener("click", function () {
  clockEl.classList.add("hidden");
  stopwatchEl.classList.add("hidden");
  timerEl.classList.remove("hidden");
  hire.classList.add("hidden");

  clockBtn.style.backgroundColor = "#333";
  stopwatchBtn.style.backgroundColor = "#333";
  timerBtn.style.backgroundColor = "orange";
});
// clock -------

setInterval(showTime, 10);
function showTime() {
  let time = new Date();
  let hh = time.getHours();
  let mm = time.getMinutes();
  let ss = time.getSeconds();

  if (hh < 10) {
    hh = "0" + hh;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  if (ss < 10) {
    ss = "0" + ss;
  }

  document.getElementById("hours").innerHTML = hh;
  document.getElementById("minutes").innerHTML = mm;
  document.getElementById("seconds").innerHTML = ss;
}

// stopwatch ------

let mill = 0;
let sec = 0;
let min = 0;
let timeEl = document.querySelector(".time");
let startBtn = document.querySelector("#start");
let pauseBtn = document.querySelector("#pause");
let stopBtn = document.querySelector("#stop");
let int = null;

startBtn.addEventListener("click", function () {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(calcTime, 10);
});

pauseBtn.addEventListener("click", function () {
  clearInterval(int);
});

stopBtn.addEventListener("click", function () {
  clearInterval(int);
  [mill, sec, min] = [0, 0, 0];
  timeEl.innerHTML = "00 : 00 : 000";
});

function calcTime() {
  mill += 10;
  if (mill == 1000) {
    mill = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
  }
  let mm = min < 10 ? "0" + min : min;
  let ss = sec < 10 ? "0" + sec : sec;
  let mi = mill < 10 ? "00" + mill : mill < 100 ? "0" + mill : mill;

  timeEl.innerHTML = `${mm} : ${ss} : ${mi}`;
}

// timer ----

let pickNumberHrEl = document.querySelector(".pickNumberHr");
let pickNumberMinEl = document.querySelector(".pickNumberMin");
let pickNumberSecEl = document.querySelector(".pickNumberSec");
let hoursDown = 5;
let minutesDown = 4;
let secondsDown = 45;
let startTimer = document.getElementById("startCountDown");
let stopTimer = document.getElementById("cancelCountDown");
let countDownEl = document.querySelector(".countDown");
let stopCount = 0;

function countDownTime() {
  secondsDown--;
  if (secondsDown == 00) {
    minutesDown--;
    secondsDown = 60;
    if (minutesDown == 0) {
      hoursDown--;
      minutesDown = 60;
    }
  }
  let hr = hoursDown < 10 ? "0" + hoursDown : hoursDown;
  let min = minutesDown < 10 ? "0" + minutesDown : minutesDown;
  let sec = secondsDown < 10 ? "0" + secondsDown : secondsDown;

  countDownEl.innerHTML = ` ${hr} : ${min} : ${sec}`;
}
startTimer.addEventListener("click", function () {
  stopCount = setInterval(countDownTime, 1000);
  hoursDown = toNumber(pickNumberHrEl);
  if (isNaN(hoursDown)) {
    hoursDown = 0;
  }
  minutesDown = toNumber(pickNumberMinEl);
  if (isNaN(minutesDown)) {
    minutesDown = 0;
  }
  secondsDown = toNumber(pickNumberSecEl);
  if (isNaN(secondsDown)) {
    secondsDown = 0;
  }
});

stopTimer.addEventListener("click", function () {
  clearTimeout(stopCount);
  countDownEl.innerHTML = "00 : 00 : 00";
});

function toNumber(pickNumberHrEl) {
  let value = pickNumberHrEl.valueAsNumber;
  return value;
}
