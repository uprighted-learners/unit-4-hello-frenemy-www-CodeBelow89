// DOM Elements
const form = document.getElementById("name-form");
const userInput = document.getElementById("user-input");
const computerResponse = document.getElementById("computer-response");

// Array oof enemy names (Brad, John, and Lewis)
const enemies = ["Brad", "John", "Lewis"];

// Add event listener to form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting and refreshing the page

  const userName = userInput.value.trim(); // Get user input and trim whitespace
  // Check if the user input is in the enemies array
  if (enemies.includes(userName)) {
    computerResponse.textContent = "Go away! 😡";
    computerResponse.className = "response enemy"; // Apply 'enemy' class
  } else {
    computerResponse.textContent = `Hello, ${userName} 😁!`;
    computerResponse.className = "response friend"; //Friend Statement
  }
});

userInput.value = "";
