//help1
let athleteFinalPosition = 'first place';

switch(athleteFinalPosition){
    case 'first place':
        console.log('You get the gold medal!');
        break;
    case 'second place':
        console.log('You get the silver medal!');
        break;
    case 'third place':
        console.log('You get the bronze medal!');
        break;
    default:
        console.log('No medal awarded.');
        break;
}
//help2
let season = 'summer';

if (season === 'spring') {
    console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
    console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
    console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
    console.log('It\'s sunny and warm because it\'s summer!');
} else {
    console.log('Invalid season.');
}
//help3
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
//help 4
let tool = '';

tool = 'marker';

// Use short circuit evaluation to assign writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);
//help 5
let wordCount = 1;

if (wordCount) {
    console.log("Great! You've started your work!");
} else {
    console.log('Better get to work!');
}


let favoritesFrase = '';

if (favoritesFrase) {
    console.log("This string doesn't seem to be empty.");
} else {
    console.log('This string is definitely empty.');
}
//help6
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
    console.log('time to sleep');
} else {
    console.log('not bed time yet');
}
//help7
let hungerLevel = 7;

if (hungerLevel > 7) {
    console.log('Time to eat!');
} else {
    console.log('We can eat later!');
}
//help8
let sale = true;

sale = false;

if (sale) {
    console.log('Time to buy!');
} else {
    console.log('Time to wait for a sale.')
}
//help9
let de = true;

de = false;

if (de) {
    console.log('Time to buy!');
}
//help10
let weather = "spring";
let clothingChoice = "";

if (weather === "spring") {
    clothingChoice = "Put on rain boots.";
} else if (weather === "summer") {
    clothingChoice = "Make sure to take your sunscreen.";
} else if (weather === "fall") {
    clothingChoice = "Wear a light jacket.";
} else if (weather === 'winter') {
    clothingChoice = "Wear a heavy coat.";
} else {
    console.log('Invalid weather type.');
};
console.log(clothingChoice);
//help11
let runTime = 35;
let runDistance = 3.5;

if (runTime <= 30 && runDistance > 3.5) {
    console.log("You're super fast!");
} else if (runTime >= 30 && runDistance <= 3) {
    console.log("You're not making your pace!");
} else if (runTime > 30 || runDistance > 3) {
    console.log("Nice workout!");
} else {
    console.log("Keep on running!");
}