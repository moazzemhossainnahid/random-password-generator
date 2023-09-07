const generatePassBtn = document.getElementById("password-btn");
const copyBtn = document.getElementById("copy-btn");
const input = document.getElementById("input");

const getPassword = (passwordLength) => {
  const char =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";
  let countChar = 0;
  function generatePassword() {
    if (countChar <= passwordLength) {
      const randomIndex = Math.floor(Math.random() * char.length);
      password += char.substring(randomIndex, randomIndex + 1);
      generatePassword(countChar++);
    }
  }
  generatePassword();
  return password;
};

generatePassBtn.addEventListener("click", () => {
  input.value = getPassword(12);
});

//   for copy password
copyBtn.addEventListener("click", () => {
  if (input.value) {
    input.select(); //for desktop
    input.setSelectionRange(0, 99999); //for mobile
    navigator.clipboard.writeText(input.value);
    copyBtn.textContent = "Copied Password";
    setTimeout(() => {
      copyBtn.textContent = "Copy Password";
      input.value = "";
    }, 3000);
  }
});
