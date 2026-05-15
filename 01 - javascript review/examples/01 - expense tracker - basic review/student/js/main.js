//Instruction On expense-tracker-code-explained.md
//1 import the data from the file (in lieu of e.g a database / REST API)
import expenses from "./expense-data.js";

//2 grab relevant DOM elements
const expenseContainer = document.getElementById("expense-container");

//3 [Skeleton] render out data into a grid of cards
function renderExpenses(expensesData) {
    console.log(expensesData);
}

//4 call the function to render the data on page load
renderExpenses(expenses);
