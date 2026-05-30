// COUNTDOWN TIMER
let time = 10;
let timerDisplay = document.getElementById("timer");

let countdown = setInterval(function () {
  timerDisplay.innerHTML = "Time left: " + time + " seconds";
  time--;

  if (time < 0) {
    clearInterval(countdown);
    timerDisplay.innerHTML = "Time's up!";
  }
}, 1000);

// SLIDESHOW
let index = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) { index = 1; }
  slides[index - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}
showSlides();
