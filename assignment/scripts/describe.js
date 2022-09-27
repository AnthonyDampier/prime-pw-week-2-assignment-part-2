// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// The variable number equals 1. number =1
// We then add 1 to the variable number. number =2
// If number is greater than or equal to 2; then console 'yes'.
// We console log 'yes', because the value of number is 2 and is equal to 2.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Name holds the value 'Mary'
// If 'Dane' (or name) is equal to 'Mary; then console log 'Hi, Mary!'. The console will not log this string because the statement is false.
// Else we will console log 'how do you do?'. The console will log 'how do you do'.
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// The variable of secret is created/
// The variable of code is created and assigned the value 123;
// 
// If code is equal to 123; the secret will be assigned 'super' as a value and code is be assigned the value of code *2;
// 
// If code is greater than 250; then secret equals 'duper'.
//
// The  console will log the value of secret. The is value of secret is 'duper'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/
//4. WRITE YOUR DESCRIPTION HERE
//Console will log 'Welcome to Prime!'
//
//
//
//


// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// Fix - colorOne needs to be set to 'blue
// let colorOne = 'blue';
let colorOne = 'red';

// Fix - colorTwo needs to be set to 'red'
// let colorTwo = 'red';
let colorTwo = 'blue';

// We check if colorOne is 'blue and colorTwo is 'red' 
// If it is, mix is set to true;

//var mix = false;
// if (colorOne == 'blue' && colorTwo == 'red') {
//   mix = true;
//}
let mix = true;


if (mix === true) {
  colorOne = 'purple';
}
*/


//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// || represents an 'OR' challenge. We need to assign a && that represents an 'AND' challenge.
// if (temp > 39 && time >= 4){
//  console.log('throw away the food!');
//}
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// We need make if statment challenge wether age is greate than or equal to minAge OR make first challenge if minAge is less than age.
// if (minAge > age){
//   console.log('no entry');
// } else {
//   console.log('enter');
//}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

