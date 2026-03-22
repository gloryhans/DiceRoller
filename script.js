// Function to toggle whether a die is held
function toggleDieHold(id) {
  const die = document.getElementById(id);

  // Get current state (stored as string)
  let isActive = die.getAttribute("data-active") === "true";

  // Toggle the state
  isActive = !isActive;
  die.setAttribute("data-active", isActive);

  // Update class
  if (!isActive) {
    die.classList.add("held");
  } else {
    die.classList.remove("held");
  }
}

// Function to roll dice
function rollDice() {
  const dice = document.querySelectorAll("img");

  dice.forEach(die => {
    const isActive = die.getAttribute("data-active") === "true";

    if (isActive) {
      const roll = Math.floor(Math.random() * 6) + 1;

      // Update image and alt text
      die.src = `images/die${roll}.png`;
      die.alt = `Die showing ${roll}`;
    }
  });
}

