function formatTime(hours, minutes, seconds) {
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startCountdown() {
  let timerElement = document.getElementById("timer");
  let hours = 24;
  let minutes = 0;
  let seconds = 0;

  let countdownInterval = setInterval(function () {
    timerElement.textContent = formatTime(hours, minutes, seconds);

    seconds--;

    if (seconds < 0) {
      seconds = 59;
      minutes--;

      if (minutes < 0) {
        minutes = 59;
        hours--;

        if (hours < 0) {
          clearInterval(countdownInterval);
          timerElement.textContent = "00:00:00";
        }
      }
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  startCountdown();
});
