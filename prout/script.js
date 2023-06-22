//Write a function that mimics the behaviour of a typewriter.

//Using setInterval display the word prout one character at a time (one letter per second).
//Once the word is written on the screen clear the interval.
/*
let i = 0;
function typeWriter() {
  if (i < "prout".length) {
    document.getElementById("demo").innerHTML += "prout"[i];
    i++;
    if (i === 5) {
      clearInterval(intervalId);
    }
  }
}
let intervalId = setInterval(typeWriter, 1000);
*/
let i = 0;
let word = "prout . . . ";

function typeWriter() {
  if (i < word.length) {
    document.getElementById("prout").innerHTML += word[i];
    i++;
    interval = setInterval(typeWriter, 1000);
    if (interval === 5) {
      clearInterval(interval);
    }
  }
}
typeWriter();
