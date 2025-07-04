function append(char) {
  const display = document.getElementById("display");
  display.value += char;
}

function clearDisplay() {
  document.getElementById("display").value = '';
}

function prank() {
  // Go to video.html where random video will be chosen
  setTimeout(() => {
    window.location.href = "/loading.html";
  }, 500);
}
