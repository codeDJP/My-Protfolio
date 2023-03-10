function calculateBudget(salary) {
  let transportation = Math.round(salary * 0.175);
  let food = Math.round(salary * 0.205);
  let utilities = Math.round(salary * 0.105);
  let entertainment = Math.round(salary * 0.135);
  let personal = Math.round(salary * 0.185);
  let savings = Math.round(salary * 0.195);
  
  return { transportation, food, utilities, entertainment, personal, savings };
}
