let display = document.getElementById("display");
let calculator = document.getElementById("calculator");
let isRed = true; // starts with red

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function toggleColor() {
  if (isRed) {
    calculator.style.background = "#4c6cff"; // Blue
  } else {
    calculator.style.background = "#ff4c4c"; // Red
  }
  isRed = !isRed;
}
