function togglemobilemenu() {
  document.getElementById("mobilemenu").classList.toggle("hidden");
  document.getElementById("mobilemenu").classList.toggle("flex");
}

function moveCursor(event) {
  document.getElementById("Cursor").style.left = event.clientX;
  document.getElementById("Cursor").style.top = event.clientY;
}
