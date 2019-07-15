$(document).ready(readyNow);

const budget = 25000;

let purchases = [];


function readyNow() {
  //display budget
  //target budgetOut by ID
  let el = $('#budgetOut');
  el.empty();
  el.append(budget);
  //handle click event
  $('#addPurchaseButton').on('click', addPurchase)

} //end readyNow

function addPurchase() {
  console.log('in addPurchase');
  //get user input create new object
  let newPurchase = {
    name: $('#purchaseNameIn').val(),
    price: $('#purchasePriceIn').val()
  } //end newPurchase
  //push purchase into array
  purchases.push(newPurchase);
  //empty inputs
  $('#purchaseNameIn').val('');
  $('#purchasePriceIn').val('');
  //calculate remainingBudget
} //end addPurchase