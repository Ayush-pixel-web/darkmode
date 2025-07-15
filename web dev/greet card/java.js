const text = "Welcome back, Nigha...";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").innerText += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // speed
  }
}

window.onload = typeEffect;
