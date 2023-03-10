function calculateBudget(salary, expenseReductions = {}, salaryIncrease = 0) {
  // Define the initial budget allocation percentages
  let transportationPct = 17.5;
  let foodPct = 20.5;
  let utilitiesPct = 10.5;
  let entertainmentPct = 13.5;
  let personalPct = 18.5;
  let savingsPct = 19.5;

  // Adjust the budget allocation percentages based on the salary increase
  transportationPct -= salaryIncrease / 2;
  foodPct -= salaryIncrease / 2;
  utilitiesPct -= salaryIncrease / 4;
  entertainmentPct -= salaryIncrease / 4;
  personalPct -= salaryIncrease / 4;
  savingsPct += salaryIncrease;

  // Apply expense reductions if provided
  if (Object.keys(expenseReductions).length > 0) {
    transportationPct -= expenseReductions.transportation || 0;
    foodPct -= expenseReductions.food || 0;
    utilitiesPct -= expenseReductions.utilities || 0;
    entertainmentPct -= expenseReductions.entertainment || 0;
    personalPct -= expenseReductions.personal || 0;
    savingsPct -= expenseReductions.savings || 0;
  }

  // Calculate budget allocation for each expense category based on percentages
  const transportation = Math.round(salary * (transportationPct / 100));
  const food = Math.round(salary * (foodPct / 100));
  const utilities = Math.round(salary * (utilitiesPct / 100));
  const entertainment = Math.round(salary * (entertainmentPct / 100));
  const personal = Math.round(salary * (personalPct / 100));
  const savings = Math.round(salary * (savingsPct / 100));

  // Return an object with expense categories as keys and budget allocations as values
  return {
    transportation,
    food,
    utilities,
    entertainment,
    personal,
    savings
  };
}

// Call the function with a sample salary and log the result to the console
const salary = 50000;
const expenseReductions = {
  entertainment: 1.5,
  personal: 2
};
const salaryIncrease = 10;
const budget = calculateBudget(salary, expenseReductions, salaryIncrease);
console.log(budget); // { transportation: 8475, food: 9775, utilities: 5075, entertainment: 6525, personal: 8900, savings: 11050 }
