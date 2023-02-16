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
if (number3 == 5)
{ console.log ("Congrats You Won!!!")}

 else if (number3 > 5)
{console.log("Greater than Number")}

 else if (number3 < 5)
{ console.log("Less than Number" )}
 else {
     console.log("Invalid");
}
//5
let cost = Number(readline.question("Enter meal cost: "));
 let tax = cost * .08;
 let newCost =  cost + tax
console.log(`Your cost is ${newCost.toFixed( 2)}`);







