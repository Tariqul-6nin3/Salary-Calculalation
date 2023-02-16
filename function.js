const incomeValue = innerTextValue("income", true);
const balanceField = document.getElementById("remaining-balance");

document
  .getElementById("calculate-btn")
  .addEventListener("click", function (event) {
    const foodExpense = event.target.parentNode.children[2].value;
    const rentExpense = event.target.parentNode.children[5].value;
    const clothExpense = event.target.parentNode.children[8].value;
    const allExpense =
      parseInt(foodExpense) + parseInt(rentExpense) + parseInt(clothExpense);
    const totalExField = document.querySelector("#total-expense");
    totalExField.innerText = allExpense;
    const remainingBalance = incomeValue - allExpense;
    balanceField.innerText = remainingBalance;
  });
document.getElementById("save-btn").addEventListener("click", function () {
  const savingsField = innerTextValue("saving-field", true);
  const savingInPercent = savingsField / 100;
  const savingAmount = savingInPercent * incomeValue;
  const savingAmountField = document.getElementById("saving-amount-field");
  savingAmountField.innerText = savingAmount;
  const balance = balanceField.innerText;
  const finalBalance = balance - savingAmount;
  const finalBalanceField = document.getElementById("remaing-balance-field");
  finalBalanceField.innerText = finalBalance;
});

//some common utility
const textField = document.getElementById(idName);
function innerTextValue(idName, isInput) {
  if (isInput === true) {
    const inputField = document.getElementById(idName);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
  } else {
    const textField = document.getElementById(idName);
    const textFieldValue = textField.innerText;
    return textFieldValue;
  }
}
