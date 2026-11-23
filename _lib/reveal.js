// Add a button with id="reveal-button" and a hidden element with id="hidden-note" to your HTML.
const revealButton = document.getElementById("reveal-button");
const hiddenNote = document.getElementById("hidden-note");

revealButton.addEventListener("click", () => {
  const isExpanded = revealButton.getAttribute("aria-expanded") === "true";
  revealButton.setAttribute("aria-expanded", String(!isExpanded));
  revealButton.textContent = isExpanded ? "Show the note" : "Hide the note";
  hiddenNote.hidden = isExpanded;
});
