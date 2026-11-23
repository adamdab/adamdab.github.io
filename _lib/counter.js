// Add a button with id="count-button" and a span with id="count" to your HTML.
const countOutput = document.getElementById("count");
const countButton = document.getElementById("count-button");
let count = 0;

countButton.addEventListener("click", () => {
  count += 1;
  countOutput.textContent = count;
});
