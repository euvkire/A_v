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
//  let answer = readline.question("Enter y or n: ");
//  while (answer != "y" && answer != "n"){
//      console.log("invalid choice");
//      answer = readline.question("Try again... Enter y or n: ")
//  }
//  console.log(`you typed ${answer}`);

 let answer = readline.question("If you want to quit the program.. Enter y or n: ");
 while (answer != "y" && answer != "n"){
     console.log("invalid choice");
     answer = readline.question("Try again.. If you want to quit the program.. Enter y or n:  ")
 }
 console.log(`you typed ${answer}`);

