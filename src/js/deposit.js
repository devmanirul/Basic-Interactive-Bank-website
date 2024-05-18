document.getElementById("depositBtn").addEventListener("click", function () {
    const inputDepositElement = document.getElementById("inputDeposit");
    const inputDepositString= inputDepositElement.value;
    const inputDeposit = parseFloat(inputDepositString);

    const depositStatusElement = document.getElementById("depositStatus");
    const depositStatusString = depositStatusElement.innerText;
    const depositStatus = parseFloat(depositStatusString);
    
    const newDepositStatus = depositStatus + inputDeposit;
    depositStatusElement.innerText = newDepositStatus;


    const totalBalanceElement = document.getElementById("totalBalance");
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);
    const newTotalBalance = totalBalance + inputDeposit;
    totalBalanceElement.innerText = newTotalBalance;
});