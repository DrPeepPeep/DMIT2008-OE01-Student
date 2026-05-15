//Instruction On expense-tracker-code-explained.md
//1 import the data from the file (in lieu of e.g a database / REST API)
import expenses from "./expense-data.js";

//2 grab relevant DOM elements
const expenseContainer = document.getElementById("expense-container");
const searchTerm = document.getElementById("searchbox");

//3 [Skeleton] render out data into a grid of cards
function renderExpenses(expensesData) {
    //first, clear out existing HTML for the container (because we're about to rerender it)
    expenseContainer.innerHTML = "";
    //then, take our array of data and render out a card for each one
    expensesData.forEach(
        //for a given expense, add a new card containing that data to the expenseContainer's inner HTML
        (expense) => {
            expenseContainer.innerHTML += `
                    
                        <div class="card" id="">
                            <div class="header">
                                <div>
                                    <div class="title">${expense.title}</div>
                                    <div class="meta category">${expense.category}</div>
                                </div>
                                <div class="amount">$${expense.amount}</div>
                            </div>
                            <div class="meta date">${expense.date}</div>
                            <div class="actions">
                                <button class="edit-btn" id="${expense.id}">Edit</button>
                                <button class="delete-btn" id="${expense.id}">Delete</button>
                            </div>
                        </div>
                    
        `;
        },
    );
}

//4 call the function to render the data on page load
renderExpenses(expenses);
