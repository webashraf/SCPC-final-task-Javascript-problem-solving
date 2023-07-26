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