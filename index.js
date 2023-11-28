// Manually selecting DOM elements (which require a class or ID in markup)
const adviceEl = document.querySelector(".advice");
const btnEl = document.querySelector(".btn");
const countEl = document.querySelector(".count");

const getAdvice = async function () {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  // Updating values
  advice = data.slip.advice;
  count = count + 1;

  // Manually updating DOM elements
  countEl.textContent = count;
  adviceEl.textContent = advice;
};

// Setting initial values
let count = 0;
let advice;
getAdvice();

// Attaching an event listener
btnEl.addEventListener("click", getAdvice);
//   setInterval(getAdvice,6000)