const incomesName = document.getElementById("#addIncomesName");
const incomesValue = document.getElementById("#addIncomesValue");
const expensesName = document.getElementById("#addExpensesName");
const expensesValue = document.getElementById("#addExpensesValue");

const sumIncomes = 0;
for (let i = 0; i < incomesValue.clientHeight; i++) {
  return (sumIncomes = sumIncomes + incomesValue[i]);
}

const sumExpenses = 0;
for (let i = 0; i < expensesValue.clientHeight; i++) {
  return (sumExpenses = sumExpenses + expensesValue[i]);
}

const cashBalance = `${sumIncomes} - ${sumExpenses}`;
document.getElementById(myCash).appendChild(cashBalance);

// const btn = document.createElement("button");
// btn.textContent = "Edytuj";
// btn.classList.add("edit");
// document.getElementById("myList").appendChild(btn);
