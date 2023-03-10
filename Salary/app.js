// Define the function
function calculateBudget(salary) {
  // Calculate budget allocation for each expense category based on percentages
  const transportation = Math.round(salary * 0.175);
  const food = Math.round(salary * 0.205);
  const utilities = Math.round(salary * 0.105);
  const entertainment = Math.round(salary * 0.135);
  const personal = Math.round(salary * 0.185);
  const savings = Math.round(salary * 0.195);

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
const budget = calculateBudget(salary);
console.log(budget); // { transportation: 8750, food: 10250, utilities: 5250, entertainment: 6750, personal: 9250, savings: 9750 }
