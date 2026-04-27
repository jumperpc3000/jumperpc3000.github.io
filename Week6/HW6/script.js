// Interaction 1: page load event listener and event
window.addEventListener("DOMContentLoaded", showGreeting);

function showGreeting() {
  let greeting = document.getElementById("greeting");
  let hour = new Date().getHours();
  let today = new Date();
  let dateText = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (hour < 12) {
    greeting.innerHTML = `Good morning! A short break can help you focus.<br>${dateText}`;
  } else if (hour < 18) {
    greeting.innerHTML = `Good afternoon! A short break can help you focus.<br>${dateText}`;
  } else {
    greeting.innerHTML = `Good evening! A short break can help you focus.<br>${dateText}`;
  }
}

// Interaction 2: click event listener and event
let pressButton = document.getElementById("press-button");
pressButton.addEventListener("click", sayPressed);

function sayPressed() {
  alert("Pressed");
}

// Interaction 3: focus event listener and event
let reminderInput = document.getElementById("reminder-input");
reminderInput.addEventListener("focus", showFocusMessage);

function showFocusMessage() {
  let focusMessage = document.getElementById("focus-message");
  focusMessage.innerHTML =
    "Great! Type one small reminder for your study break.";
}

// Interaction 4: click event listener and event
let addButton = document.getElementById("add-button");
addButton.addEventListener("click", addReminder);

function addReminder() {
  let input = document.getElementById("reminder-input");
  let reminderList = document.getElementById("reminder-list");

  if (input.value.trim() === "") {
    alert("Please type a reminder first.");
  } else {
    let newItem = document.createElement("li");
    newItem.innerHTML = input.value;
    reminderList.appendChild(newItem);
    input.value = "";
  }
}

// Interaction 5: mouseover and mouseout event listeners and events
let activityCard = document.getElementById("activity-card");
activityCard.addEventListener("mouseover", showHoverIdea);
activityCard.addEventListener("mouseout", hideHoverIdea);

function showHoverIdea() {
  let hoverMessage = document.getElementById("hover-message");
  hoverMessage.innerHTML =
    "Break idea: Stand up, stretch, and take three deep breaths.";
}

function hideHoverIdea() {
  let hoverMessage = document.getElementById("hover-message");
  hoverMessage.innerHTML =
    "Move your mouse over this section to reveal a break idea.";
}
