document.getElementById("logInBtn").addEventListener("click", function () {
  const inputEmailElement = document.getElementById("inputEmail");
  const inputEmail = inputEmailElement.value;
  const inputPassElement = document.getElementById("inputPass");
  const inputPass = inputPassElement.value;

  if (inputEmail === "mmimonir1234@gmail.com" && inputPass === "123456") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid Email or Password");
  }
  inputEmail = "";
  inputPass = "";
});
