 const readline = require('readline-sync');
//1
// let a = 0;
// while (a<26){
//     console.log(a);
//     a++;
// }

//2
// let b = 0;
// while (b<51){
//     console.log(b);
//     b++;
// }

//3
// let c = -10;
// while (c<11){
//     console.log(c);
//     c++;
// }

//4
// let d = 0;
// while (d>-51){
//     console.log(d);
//     d--;
// }

//5
// let e = 2;
//     while (e>102){
//         console.log(e);
//         e++;
//     }


 // let answer = readline.question("Enter y or n: ");
 // while (answer != "y" && answer != "n"){
 //     console.log("invalid choice");
 //     answer = readline.question("Try again... Enter y or n: ")
 // }
 // console.log(`you typed ${answer}`);


//11
 let answer1 = readline.question("If you want to quit the program.. Enter y or n: ");
 while (answer1 != "y" && answer1 != "n"){
     console.log("invalid choice");
     answer1 = readline.question("Try again.. If you want to quit the program.. Enter y or n:  ")
 }
 console.log(`you typed ${answer1}`);

//12
 let answer2 = readline.question("If you want to quit the program.. Enter y/Y or n/N: ");
 while (answer2 != "y" && answer2 != "Y" && answer2 != "n" && answer2 != "N"){
     console.log("invalid choice");
     answer2 = readline.question("Try again.. If you want to quit the program.. Enter y/Y or n/N:  ")
 }
 console.log(`you typed ${answer2}`);

//13
 let answer3 = readline.question("Choose A, B, or C: ");
 while (answer3 != "A" && answer3 != "B" && answer3 != "C"){
     console.log("invalid choice");
     answer3 = readline.question("Try again.. Choose A, B, or C:  ")
 }
 console.log(`you typed ${answer3}`);

 //14
 let answer4 = readline.question("Choose 1, 2, or 3: ");
 while (answer4 != "1" && answer4 != "2" && answer4 != "3"){
     console.log("invalid choice");
     answer4 = readline.question("Try again.. Choose 1, 2, or 3:  ")
 }
 console.log(`you typed ${answer4}`);

 //15
 let answer5 = readline.question("Choose a number 1-10: ");
 while (answer5 != "0" && answer5 != "1" && answer5 != "2" && answer5 != "3" && answer5 != "4" && answer5 != "5" && answer5 != "6" && answer5 != "7" && answer5 != "8" && answer5!= "9" && answer5 != "10"){
     console.log("invalid choice");
     answer5 = readline.question("Try again.. Choose a number 1-10:   ")
 }
 console.log(`you typed ${answer5}`);

 //16
 let number = Number(readline.question("Enter a positive number: "));
 if (number>0){
     console.log(`Positive number`)
 }
 if (number < 0) {
     console.log("Not a positive number");
 }

 //17
 let number2= Number(readline.question("Enter a negative number: "));
 if (number2 <0){
     console.log(`Negative number`)
 }
 if (number2 > 0) {
     console.log("Not a negative number");
 }


 let number3 = Number(readline.question("Enter a even number: "));
if (number3 / 2){
    console.log(`Even number`)
}   else if (number3 / 3 ){
    console.log(`not even number`)
 }
