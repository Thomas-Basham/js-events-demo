console.log("Time to make some events!");
let count = 0;
let counterBtnElement = document.getElementById("counter-btn");
let counterOutputElement = document.getElementById("counter-output");

// add click event listener to our counter btn element
counterBtnElement.addEventListener("click", counterBtnClickHandler);

// event handler for the counter btn click
function counterBtnClickHandler(event) {
  event.preventDefault(); // prevents default behavior attached
  // to events such as refreshing the browser
  count++;
  counterOutputElement.innerHTML = `Clicked ${count} times`;
}

// ******************************************************

let boxElements = document.getElementsByClassName("box");

// need to attach event listeners to each box element
console.log(boxElements[0].firstElementChild.innerHTML); // blue

for (let elem of boxElements) {
  elem.addEventListener("click", boxClickHandler);
}

function boxClickHandler(event) {
  event.preventDefault();
  document.body.style.backgroundColor =
    event.target.firstElementChild.textContent;
  console.log("box click handler");
}

// ******************************************************

let loginFormElement = document.getElementById("login-form");
let loginStatusElement = document.getElementById("login-status");
loginFormElement.addEventListener("submit", loginFormEventHandler);

function loginFormEventHandler(event) {
  event.preventDefault();
  loginStatusElement.innerHTML = `Logged in as ${event.target["username-input"].value}`;
  event.target.reset();
}
