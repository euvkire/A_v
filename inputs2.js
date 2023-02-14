//1
const readline = require("readline-sync");
let answer = readline.question("Do you want to hear a joke? Yes, No");
if (answer == "Yes"){
    console.log(`What do you call a dog that is hot? A Hot dog!.`)
}
else if (answer == "No"){
    console.log(`Leave!!`)
} else {
    console.log("invalid");
}
//2
let number = readline.question( "Enter a number");
        if (number % 2 === 0 ){
            console.log("divisible by 2");}
            else {
                console.log("invalid");
    }
//3
let number2 = readline.question( "Enter a number");
if (number2 % 2 === 0){
    console.log("divisible by 2");}
else {
    console.log("invalid");
}
if (number2 % 3 === 0){
    console.log("divisible by 3");
}
else {
    console.log("invalid");
}
if (number2 % 4 === 0){
    console.log("divisible by 4");
}
else {
    console.log("invalid");
}
if (number2 % 5 === 0){
    console.log("divisible by 5");
}
else {
    console.log("invalid");
}
if (number2 % 6 === 0) {
    console.log("divisible by 6");}
else {
    console.log("invalid");
}
//4
let number3 = readline.question( "Enter a number :)" );
if (number3 === 5)
{ console.log ("Congrats You Won!!!");}

if (number3>5)
{console.log("Greater than Number");}

if (number3<5)
{ console.log("Less than Number" );}
//5
let originalCost = readline.question( "Enter original price: ");
let currentCost = readline.question( "Enter current price: ");
let tax = originalCost*0.08;
let originalCost = currentCost+tax;
let discount = (currentCost / originalCost).toFixed(2);
console.log(`discount: ${discount}`);
//5 practice
let cost = readline.question( "Enter a number");
let tax = cost*0.08;
let answer = cost+tax;
console.log(`answer: $ {answer: ${})
//6



