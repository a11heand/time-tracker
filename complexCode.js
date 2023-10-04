/*
 * Filename: complexCode.js
 * Description: Complex code demonstrating advanced concepts in JavaScript
 * Author: [Your Name]
 * Date: [Current Date]
 */

// Utility function to generate random numbers within a given range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Class representing a Circle
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  getDiameter() {
    return 2 * this.radius;
  }
}

// Function to calculate the factorial of a given number
function factorial(num) {
  if (num < 0) {
    throw new Error("Factorial of negative numbers is undefined");
  }

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

// Countdown function using recursion
function countdown(num) {
  if (num < 0) {
    console.log("Countdown complete!");
    return;
  }

  console.log(num);
  countdown(num - 1);
}

// Custom implementation of Array.filter()
Array.prototype.customFilter = function (callback) {
  const filteredArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }

  return filteredArray;
};

// Example usage of the customFilter function
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.customFilter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Asynchronous function using Promises and setTimeout
function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async function complete!");
    }, 2000);
  });
}

// Example usage of the asyncFunction
async function executeAsyncFunction() {
  try {
    const result = await asyncFunction();
    console.log(result); // Output after 2 seconds: "Async function complete!"
  } catch (error) {
    console.error(error);
  }
}

// Generating Fibonacci sequence using recursive approach
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage of the fibonacci function
console.log(fibonacci(10)); // Output: 55

// ...
// (More complex and elaborate code goes here)
// ...

// Invoke the countdown function with initial value
countdown(10);