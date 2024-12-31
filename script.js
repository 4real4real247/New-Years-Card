// In the HTML, there are 4 <span> elements. Each <span> has an id.
// Your goal is to fill in the blanks by changing the textContent of each <span> element using Javascript.
// By the end, you will have a nice card that you can send to someone!

// STEP 1 - Get each <span> element from the DOM using document.getElementById()

// STEP 2 - Change the textContent of each <span> element.
let result = {
  friend: "Donna",
  forward: "Being Pretty",
  filled: ["Abundance", "blessings", "God", "love"],
  name: "Cassy",
};

let friend = document.getElementById("friend");
friend.textContent = result.friend;

let forward = document.getElementById("hopes");
forward.textContent = result.forward;

let filled = document.getElementById("wishes");
filled.textContent = result.filled;

let name = document.getElementById("your-name");
name.textContent = result.name;

// BONUS CHALLENGE -
// Write some Javascript code so that the button that says "You've got mail!" will show/hide the letter when you click on it!
let button = document.getElementById("clicker");
let card = document.getElementById("card");

function openClose() {
  card.classList.toggle("hidden");
}
button.addEventListener("click", openClose);
