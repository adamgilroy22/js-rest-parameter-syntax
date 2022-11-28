/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("Sum: ", sum);

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum2: ", sum2) // Only first three arguments used, the remaining are ignored

// Function using ...rest
const sumRest = (a, b, c, ...rest) => { //rest can be called anything, just called rest in this example but needs ... before
    let sum = a + b + c; // Adds first three numbers
    for (let i of rest) {
        sum += i; // Adds any extra numbers
    }

    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("Sum3: ", sum3); // All arguments are added together as expected