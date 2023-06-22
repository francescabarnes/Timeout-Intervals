// Write a function that displays every second that has passed on the page since it was opened.
// The display should be refreshed every second.
// If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.

let seconds = 0;
let minutes = 0;

function time() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  document.getElementById("minutes").innerHTML = `${minutes}`;
  document.getElementById("seconds").innerHTML = `${seconds}`;
}
setInterval(time, 1000);
