function calculateResult() {
    const val = document.querySelector(".valueToConvert");
    const from = document.querySelector(".from");
    const to = document.querySelector(".to");
    const resultInput = document.querySelector(".ans");
    const inputValue = parseFloat(val.value);
    let result;
    if (from.value === "celsius" && to.value === "fahrenheit") {
      result = (inputValue * 9/5) + 32;
    } else if (from.value === "fahrenheit" && to.value === "celsius") {
      result = (inputValue - 32) * 5/9;
    } else {
      result = inputValue; // If the units are the same, return the input value as-is
    }
    resultInput.value = result;
}

function clearInput() {
    const resultInput = document.querySelector(".ans");
    resultInput.value = 0;
}
  