document.getElementById("withdrawBtn").addEventListener("click", function () {
  const inputWithdrawElement = document.getElementById("inputWithdraw");
  const inputWithdrawString   = inputWithdrawElement.value;
  const inputWithdraw = parseFloat(inputWithdrawString);

  const withdrawStatusElement = document.getElementById("withdrawStatus");
  const withdrawStatusString = withdrawStatusElement.innerText;
  const withdrawStatus = parseFloat(withdrawStatusString);

  const newWithdrawStatus = withdrawStatus + inputWithdraw;
  withdrawStatusElement.innerText = newWithdrawStatus;

  const totalBalanceElement = document.getElementById("totalBalance");
  const totalBalanceString = totalBalanceElement.innerText;
  const totalBalance = parseFloat(totalBalanceString);
  const newTotalBalance = totalBalance - inputWithdraw;
  totalBalanceElement.innerText = newTotalBalance;
});
