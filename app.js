const indicator1 = document.querySelector(".indicator");
const Hours = document.querySelector(".hours");
const Minutes = document.querySelector(".minutes");
const Seconds = document.querySelector(".seconds");

function updateTime() {
  let date = new Date();
  let interval;
  let Time;
  if (date.getHours() > 12) {
    Time = date.getHours() - 12;
  } else {
    Time = date.getHours();
  }
  if (Time.toString().length === 1) {
    Time = `0${Time}`;
  } else {
    Time;
  }
  if (date.getMinutes().toString().length === 1) {
    Minutes.textContent = `0${date.getMinutes()}`;
  } else {
    Minutes.textContent = date.getMinutes();
  }
  if (date.getSeconds().toString().length === 1) {
    Seconds.textContent = `0${date.getSeconds()}`;
  } else {
    Seconds.textContent = date.getSeconds();
  }

  if (Time.toString() == "0" || Time.toString == "00") {
    Hours.textContent = 12;
  } else {
    Hours.textContent = Time;
  }

  if (!interval) {
    indicator1.className =
      indicator1.classList == "indicator" ? "indicator hide" : "indicator";
  }
}

setInterval(updateTime, 1000);
