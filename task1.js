// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const reverseString = text => text.split("").reverse().join("");

console.log(reverseString("Tamim"));

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const numbers = [-1, -2, -3, -4, -5, -6, -7, 1, 2, 3, 4, 5, 6];

const sumPositiveNumbers = nums => {
    let sum = 0;
    for (const num of nums) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}
const totalPositiveSum = sumPositiveNumbers(numbers);
console.log(totalPositiveSum);


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

function findMostFrequentElement(arr) {
    const elementCount = {};
    let maxCount = 0;
    let mostFrequentElement;
  
    for (const element of arr) {
      elementCount[element] = (elementCount[element] || 0) + 1;
      if (elementCount[element] > maxCount) {
        maxCount = elementCount[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }
  
  // Test the function
  const arr = [1, 2, 3, 2, 4, 2, 5, 2, 6, 2, 7];
  const mostFrequent = findMostFrequentElement(arr);
  console.log("Most frequent element:", mostFrequent);
  