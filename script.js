const texts = [
  "Web Development.",
  "Frontend Design.",
  "UI/UX.",
  "Game Design."
];

let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  const currentText = texts[textIndex];
  const typewriterElement = document.getElementById("typewriter");

  if (charIndex <= currentText.length) {
    typewriterElement.textContent = currentText.slice(0, charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500); // Easing
  }
}

function eraseEffect() {
  const currentText = texts[textIndex];
  const typewriterElement = document.getElementById("typewriter");

  if (charIndex > 0) {
    typewriterElement.textContent = currentText.slice(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length; // Move to next text
    setTimeout(typeEffect, 300); // Start typing next
  }
}

window.onload = typeEffect;
