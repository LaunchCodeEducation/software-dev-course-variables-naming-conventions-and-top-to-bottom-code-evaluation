/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

const customerName = "Alice";
const itemCount = 5;
const totalPrice = 20;
const currency = "$";
const pricePerItem = totalPrice / itemCount;
const purchaseMessage = `${customerName} bought ${itemCount} items for ${currency}${totalPrice}`

console.log(purchaseMessage);

//meaningful names make code easier to read and change, pitfalls include single letters, unclear abbreviations, and inconsistent casing, and clear names help teams review, search, and onboard without guessing what values represent
