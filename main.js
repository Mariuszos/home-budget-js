const incomesName = document.querySelector("#addIncomeincomesValuesName"),
	incomesValue = document.querySelector("#addIncomesValue"),
	expensesName = document.querySelector("#addExpensesName"),
	expensesValue = document.querySelector("#addExpensesValue"),
	incomesList = document.querySelector("#incomesList"),
	expensesList = document.querySelector("#expensesList"),
	btnIncomes = document.querySelector("#addIncomes"),
	btnExpenses = document.querySelector("#addExpenses");

btnIncomes.addEventListener("click", (e) => {
	addToList(incomesList, e.target.parentElement, {
		name: incomesName.value,
		val: incomesValue.value
	})
});
btnExpenses.addEventListener("click", (e) => {
	addToList(expensesList, e.target.parentElement, {
		name: expensesName.value,
		val: expensesValue.value
	});
});


function addToList(list, form, obj) {
	if (!isValuesEmpty(obj)) {
		list.innerHTML += listItem(obj, form);
		clearInputs(form);
		checkListSum(list);
	} else {
		alert("Wszystkie pola muszą być uzupełnione");
		return false;
	}
};

function listItem(obj, form) {
	return `
		<li class="incBox ${form.id}">
			<input class="listItemInput" type="text" value="${obj.name}" disabled="true"></input>
			<input class="listItemInput sum" type="text" value="${obj.val}" disabled="true"></input>
			<button onclick="editElement(this)" id="editBtn">Edytuj</button>
			<button onclick="deleteElement(this)" id="deleteBtn">Usuń</button>
			<button onclick="saveElement(this)" id="saveBtn" class="hidden">Zapisz</button>
		</li>
	`;
};

function editMode(bool, el) {
	let editBtn = el.querySelector("#editBtn"),
		deleteBtn = el.querySelector("#deleteBtn"),
		saveBtn = el.querySelector("#saveBtn");

	if (bool) {
		editBtn.classList.add("hidden");
		deleteBtn.classList.add("hidden");
		saveBtn.classList.remove("hidden");
	} else if (!bool) {
		editBtn.classList.remove("hidden");
		deleteBtn.classList.remove("hidden");
		saveBtn.classList.add("hidden");
	}
};

function editElement(el) {
	const editOrSave = el.id,
		element = el.parentElement;
	let inputs = [...element.querySelectorAll("input")];
	if (editOrSave === 'editBtn') {
		inputs.forEach(input => {
			input.removeAttribute("disabled");
			input.setAttribute("enabled", "enabled");
		});
	} else if (editOrSave === 'saveBtn') {
		inputs.forEach(input => {
			input.removeAttribute("enabled");
			input.setAttribute("disabled", "disabled");
		});
	}

	editMode(true, element, inputs);
};

function deleteElement(el) {
	const element = el.parentElement;
	element.parentElement.removeChild(element);
	element.classList.contains("incomesList-form") ? sum(document.querySelector(".sumIncomes")) : sum(document.querySelector(".sumExpenses"));
};

function saveElement(el) {
	let element = el.parentElement;
	[...element.querySelectorAll(".listItemInput")].forEach(input => {
		input.defaultValue = input.value
	})

	element.classList.contains("incomesList-form") ? sum(document.querySelector(".sumIncomes")) : sum(document.querySelector(".sumExpenses"));
	editElement(el);
	editMode(false, element)
};

function clearInputs(form) {
	[...form.querySelectorAll("input")].forEach(input => {
		input.value = '';
	})
};

function isValuesEmpty(obj) {
	if (obj['name'] && obj['val']) return false;
	else return true;
};

function checkListSum(list) {
	if (list.dataset.function === 'incomes') sum(document.querySelector(".sumIncomes"));
	else if (list.dataset.function === 'expenses') sum(document.querySelector(".sumExpenses"));
	else alert("Wystąpił nieoczkiwany błąd.");
}

function sum(item) {
	let result = 0;
	const sum = document.querySelector(`[data-function*="${item.dataset.sum}"]`);
	[...sum.querySelectorAll(".sum")].forEach(val => {
		result += parseFloat(val.value);
	});

	item.children[0].textContent = result;

	notify();
}

function myCash() {
	const incomes = parseFloat(document.querySelector(".sumIncomes span").textContent);
	const expenses = parseFloat(document.querySelector(".sumExpenses span").textContent);

	return incomes - expenses;
};

function notify() {
	let result = '';
	const cash = myCash();
	if (cash > 0) result = `Możesz jeszcze wydać ${myCash()} złotych`
	else if (cash === 0) result = "Bilans wynosi zero";
	else if (cash < 0) result = `Bilans jest ujemny. Jesteś na minusie ${Math.abs(cash)} złotych`;
	else result = "Błąd w przeliczaniu";

	document.querySelector(".cash-title").textContent = result;
}