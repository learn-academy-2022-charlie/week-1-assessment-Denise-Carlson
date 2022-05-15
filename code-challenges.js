// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"
 //make a function that inputs a number and decides if that number is below boiling point (first condition), at boiling point (2nd condition), above boiling point ( third condition) boiling point is equal to 212 degrees Farenheit. The expected output will be "42 is below boiling point" for temp1 variable , "350 is above boiling point" for temp2 variable , "212 is at boiling point" for temp3 variable. The function needs to be declared in order to get the terminal to output the expected string ( correct words) I need to use 3 conditionals in order for the expected output to occur. This needs to work and be tested using all numbers

const boilingPoint =(num1) => {
if(num1 < 212) {
    return `${num1} is below boiling point`
}
else if(num1 === 212) {
    return `${num1} is at boiling point`
}
else if(num1 > 212) {
    return `${num1} is above boiling point`
}
else {
    return "error, please input a number"
}
}



const temp1 = 42
const temp2 = 350
const temp3 = 212
console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))
//all three of the variables worked as expected.
// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10
// I will be combining 2 arrays,myNumbers1 and myNumbers2 using the method .concat() and using method .length to return the length of the 2 arrays combined.  

const myNumbers1 = [3,7,0,36,-9]
const myNumbers2 = [8,-7,42,9,13]
const merged = [].concat(myNumbers1, myNumbers2)
console.log(merged.length)

//const myNumbers3 = myNumbers1.concat(myNumbers2);
//console.log(myNumbers3)
// const myNumbers3String = myNumbers3.join("")
// console.log(myNumbers3String.length)
//const myStringLength = myNumbers3String.length
//console.log(myStringLength)
// this was my first idea but it gives the output of 15 is it because of spaces ? 

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"
// I didn't find any built in method to reverse a string so I looked under arrays and found split(). There is an array method called reverse so my plan is to first use split and then reverse and finally join to convert the new array back into a string. Since this involves a bunch of steps a function works best. I utilized the dot notation for arrays. The ("") tells the command to use comma as separators. When I did the reverse I didn't want any space so () and finally when converting back I used the comma to separate out the 2 pieces of data in the string.
const currentCohort = "Charlie 2022"
const cohortReversed = () => {
    return currentCohort
    .split ("")
    .reverse()
    .join("")
}
console.log(cohortReversed())

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"
// I will use a conditional statement to test if each number in the array is even or odd. There is a modulo operator % that can check if a number is divisible by 2 or not. Using if and if else statements I will check each value in the array using its index to determine whether or not it is odd or even.

const myArray = [13, 34, 5, 10, 27, 42]
const evenOrOdd = (num) => {
        if (num % 2 === 0) {
            return "even"
        } else {
            return "odd"
        }
    }

    console.log(evenOrOdd(myArray[0]));
    console.log(evenOrOdd(myArray[1]))
    console.log(evenOrOdd(myArray[2]))
    console.log(evenOrOdd(myArray[3]))
    console.log(evenOrOdd(myArray[4]))
    console.log(evenOrOdd(myArray[5]))
            
// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Given a set of 2 numbers Make a function  where the numbers are compared, and the  larger number is subtracted from the smaller number. Given the input of 58 and 100 the output should be 42. Given the input of 27 and 24 the output will be 3. Declare the function with arrow notation and use integer1 and integer2 for our function. If integer1 is greater than integer2 then integer1 is subtracted from integer2. If anything other than a number is entered return string " please enter a number"

const greaterNumber = (num1 , num2) => {
    if (num2 > num1) {
        return num2 - num1
    } else  if (num1 > num2) {
        return num1 -num2
    }    
        else {
        return "please enter a number"
    }

}

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24
console.log(greaterNumber(number1, number2));
console.log(greaterNumber(number3,number4))
