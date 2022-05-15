// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
 console.log(colors.push("indigo"))

// a) Your answer: console.log will display 5
// b) Verify and explain: push is a mutator and the output is not the array instead it counts the number of strings which is the length of the array,since arrays start at 1 adding a string gives you 5 for the answer.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
 console.log(cohort.length)

// a) Your answer:9
// b) Verify and explain: The computer counts the complete string including spaces as the length so my answer wasn't correct because I didn't count the space.


// --------------------2) What will this log?

const greeting = "Hello World!"
 console.log(greeting[4])

// a) Your answer:o
// b) Verify and explain: The brackets indicate this is a index which starts at zero. The code is asking what letter is in the 4th index position and that letter is o.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
 console.log(languages[index])

// a) Your answer:Ruby
// b) Verify and explain: The variable languages contains an array. The const index is given the value of 1.The brackets indicate index notation and the index is set to 1 because const was declared and it is a global variable. Ruby string is located at position 1 therefore the computer command console.log will output Ruby in the terminal.


// --------------------4) What will this log?

//const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY , SUNDAY
// b) Verify and explain:TypeError: weekendDays.toUpperCase is not a function
    // at Object.<anonymous> (/Users/learnacademy/Desktop/my_projects/week-1-assessment-Denise-Carlson/coding-concepts.js:47:25) I had to research this and I found out that this code doesn't work because the method toUpperCase()is a function that can only be used on a string not on an object or array. To solve this error you need to use a toString() method first to convert the array to a string then you can use the toUpperCase()and get the answer I thought it would be.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
 console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: This was tricky and I had to think about it. At first I thought it might be an error because I haven't seen those 2 methods used together but then I realized that length method always returns a number and typeof is a method that will return the type of variable so the computer ignores the fact that they are technically all strings and instead is being asked which type of value is used with the method length so number is the answer.
