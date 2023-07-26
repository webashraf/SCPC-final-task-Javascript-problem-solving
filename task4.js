// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const numbers = [1, 2, 3, 4, 10];
const targetSumFunc = (numbersArray, target) => {
    let sumableNumber = [];
    for (let i = 0; i < numbersArray.length - 1; i++) {
        for (let j = 0; j < numbersArray.length; j++) {
            if (numbersArray[i] + numbersArray[j] === target) {
                sumableNumber.push(numbersArray[i]);
                sumableNumber.push(numbersArray[j]);
                break;
            }
        }
    }
    return sumableNumber;
}

const result = targetSumFunc(numbers, 14);
console.log(result, numbers.length);