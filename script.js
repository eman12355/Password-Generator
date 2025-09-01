const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "!£$%^&*()_-?/.#";

const optLower = document.getElementById("optLower");
const optUpper = document.getElementById("optUpper");
const optNumbers = document.getElementById("optNumbers");
const optSymbols = document.getElementById("optSymbols");
const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const newpassword = document.getElementById("passwordOutput");
const copypassword = document.getElementById("copyBtn");
const lengthValue = document.getElementById("lengthValue");
const lengthRange = document.getElementById("lengthRange");

lengthRange.addEventListener("input", () => {
  lengthValue.textContent = lengthRange.value;
});

function generatepassword(length) {
  let password = "";
  let charters = "";

  if (optLower.checked) {
    charters += lowerCaseSet;
  }
  if (optUpper.checked) {
    charters += upperCaseSet;
  }
  if (optNumbers.checked) {
    charters += numberSet;
  }
  if (optSymbols.checked) {
    charters += symbolSet;
  }

  for (let i = 0; i < length; i++) {
    let randomnum = Math.floor(Math.random() * charters.length);
    password += charters[randomnum];
  }
  newpassword.value = password;
  return password;
}
generateBtn.addEventListener("click", () => {
  generatepassword(parseInt(lengthRange.value));
});

resetBtn.addEventListener("click", () => {
  newpassword.value = "";
});

copypassword.addEventListener("click", () => {
  if (!newpassword.value) return;
  navigator.clipboard.writeText(newpassword.value);
  copypassword.innerHTML = `<i class="fa-solid fa-check" style="color:#4ade80"></i>`;
  setTimeout(() => {
    copypassword.innerHTML = `<i class="fa-solid fa-copy" style="color:#f6f3f7"></i>`;
  }, 1500);
});
