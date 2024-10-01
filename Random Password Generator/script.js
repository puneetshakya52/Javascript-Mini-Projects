//selecting elements
const inputField = document.querySelector(".password-container input");

const generateBtn = document.querySelector(".generate-btn");

const copyBtn = document.querySelector(".copy");

// function definition when generate password button is clicked
function generatePassword() {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 16;
  let password = "";

  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
    inputField.value = password;
  }
}

// function definition when copy button is clicked
function copyToClipboard() {
  navigator.clipboard.writeText(inputField.value);
}

//adding event listener to generate password button
generateBtn.addEventListener("click", generatePassword);

//adding event listener to copy button
copyBtn.addEventListener("click", copyToClipboard);
