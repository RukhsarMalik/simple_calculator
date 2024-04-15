#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  { message: "Select the operator you want to perform",
    type: "list",
    name: "operators", 
    choices : ["Addition", "Subtraction", "Multiplication", "Division"]
  },
]);
if (answer.operators === "Addition") {
    let result = answer.firstNumber + answer.secondNumber
    console.log("Your Value is: " + result)
}
else if (answer.operators === "Subtraction") {
    let result = answer.firstNumber - answer.secondNumber
    console.log("Your Value is: " + result)
}
else if (answer.operators === "Multiplication") {
    let result = answer.firstNumber * answer.secondNumber
    console.log("Your Value is: " + result)
}
else if (answer.operators === "Division") {
    let result = answer.firstNumber / answer.secondNumber
    console.log("Your Value is: " + result)
}
else (
    console.log("Please select valid operator")
)
console.log("The End")