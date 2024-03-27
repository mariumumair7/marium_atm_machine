#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000; // Dollar
let myPin = 2229;
let pinAnswer = await inquirer.prompt([
    { name: "pin", message: "Enter your Pin Number", type: "number" },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!!!");
}
else {
    console.log("Incorrect Pin Code!!!");
}
let pinOperation = await inquirer.prompt([
    {
        name: "operation",
        message: "please select options",
        type: "list",
        choices: ["withdraw", "check current balance", "Fast cash deposit"],
    },
]);
if (pinOperation.operation === "withdraw") {
    let answer = await inquirer.prompt([
        {
            name: "withdraw",
            message: "Enter your amount",
            type: "number",
        },
    ]);
    if (myBalance < answer.withdraw) {
        console.log("Insufficient Balance :( ");
    }
    else {
        myBalance -= answer.withdraw;
        console.log(`Your remaining Balance is  ${myBalance}`);
    }
}
else if (pinOperation.operation === "check current balance") {
    console.log(`Your Current Balance is ${myBalance}`);
}
else if (pinOperation.operation === "Fast cash deposit") {
    let fastcash = await inquirer.prompt([
        {
            name: "amount",
            type: "list",
            message: "Select your Amount",
            choices: ["1000", "2000", "3000", "5000"],
        },
    ]);
    myBalance -= fastcash.amount;
    console.log(`Your remaining balance is ${myBalance}`);
}
