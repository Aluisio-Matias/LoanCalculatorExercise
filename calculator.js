window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanValues = { amount: 100000, years: 15, rate: 5.5 };
  const amountInput = document.getElementById('loan-amount');
  amountInput.value = loanValues.amount;
  const yearsInput = document.getElementById('loan-years');
  yearsInput.value = loanValues.years;
  const rateInput = document.getElementById('loan-rate');
  rateInput.value = loanValues.rate;
  update();
  //calling the update() function to calculate the current monthly payment
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues(); // getting the loan UI input values from function
  updateMonthly(calculateMonthlyPayment(currentUIValues)); 
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(loanValues) {
  const monthlyRate = (loanValues.rate / 100) / 12; //loanValues.rate /100 converts to percentage and / by 12 payments
  const numOfPmts = Math.floor(loanValues.years * 12); //number of payments per year
  return ((monthlyRate * loanValues.amount) / (1 - Math.pow((1 + monthlyRate), -numOfPmts))).toFixed(2);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById('monthly-payment');
  monthlyUI.innerText = '$' + monthly;
}

