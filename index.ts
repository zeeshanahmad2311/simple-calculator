#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "enter first number",name:"firstNumber"},
{message: "enter secand number",name:"secandNumber"},
{message: "select one of the operator", type:"list", name: "operator", choices:["addition", "multiplication", "subtraction", "division"]}
]);

if (answer.operator === "subtraction"){
    console.log(answer.firstNumber - answer.secandNumber);
} else if (answer.operator === "addition"){
    console.log(answer.firstNumber + answer.secandNumber);
} else if (answer.operator === "multiplication"){
    console.log(answer.firstNumber * answer.secandNumber);
} else if (answer.operator === "division"){
    console.log(answer.firstNumber / answer.secandNumber);
} else {
    console.log("please enter your number")
}