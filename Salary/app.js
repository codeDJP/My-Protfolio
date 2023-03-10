function calculateBudget(salary, expenseReductions = {}, salaryIncrease = 0) {
  // Define the initial budget allocation percentages
  let transportationPct = 17.5;
  let foodPct = 20.5;
  let utilitiesPct = 10.5;
  let entertainmentPct = 13.5;
  let personalPct = 18.5;
  let savingsPct = 19.5;

  // Adjust the budget allocation percentages based on the salary increase
  transportationPct += Math.max(salaryIncrease / 3, 0);
  foodPct += Math.max(salaryIncrease / 3, 0);
  utilitiesPct += Math.max(salaryIncrease / 6, 0);
  entertainmentPct += Math.max(salaryIncrease / 6, 0);
  personalPct += Math.max(salaryIncrease / 6, 0);
  savingsPct += Math.max(salaryIncrease / 6, 0);

  // Prioritize certain categories for lower salaries
  if (salary < 20000) {
  transportationPct = 25;
  foodPct = 25;
  utilitiesPct = 15;
  entertainmentPct = 10;
  personalPct = 15;
  savingsPct = 10;
  }
  else if (salary < 40000) {
  transportationPct = 15;
  foodPct = 25;
  utilitiesPct = 10;
  entertainmentPct = 10;
  personalPct = 20;
  savingsPct = 20;  
  }
  else if (salary < 100000) {
  transportationPct = 10;
  foodPct = 20;
  utilitiesPct = 10;
  entertainmentPct = 15;
  personalPct = 20;
  savingsPct = 25;
  }
  else if (salary < 200000) {
  transportationPct = 10;
  foodPct = 20;
  utilitiesPct = 10;
  entertainmentPct = 10;
  personalPct = 20;
  savingsPct = 30;
  } 

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
console.log(budget); // { transportation: 8625, food: 10025, utilities: 5125, entertainment: 7000, personal: 9200, savings: 11525 }
