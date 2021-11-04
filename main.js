const incomesName = document.querySelector("#addIncomesName");
const incomesValue = document.getElementById("#addIncomesValue");
const expensesName = document.getElementById("#addExpensesName");
const expensesValue = document.getElementById("#addExpensesValue");

const btnIncomes = document.querySelector("#addIncomes");
btnIncomes.addEventListener("click", (e) => {
  if (incomesName.value && incomesValue.value) {
  }
});

ulList.innerHTML += `<li>${incN}: ${incV}</li>`;

// const sumIncomes = 0;
// for (let i = 0; i < incomesValue.length; i++) {
//   return (sumIncomes = sumIncomes + incomesValue[i]);
// }

// const sumExpenses = 0;
// for (let i = 0; i < expensesValue.clientHeight; i++) {
//   return (sumExpenses = sumExpenses + expensesValue[i]);
// }

// const cashBalance = `${sumIncomes} - ${sumExpenses}`;
// document.getElementById(myCash).appendChild(cashBalance);

// const btn = document.createElement("button");
// btn.textContent = "Edytuj";
// btn.classList.add("edit");
// document.getElementById("myList").appendChild(btn);
