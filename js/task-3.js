const textInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
  const trimValue = event.currentTarget.value.trim();
  nameOutput.textContent = trimValue === "" ? "Anonymous" : trimValue;
});
