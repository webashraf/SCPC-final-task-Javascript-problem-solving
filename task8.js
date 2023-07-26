// Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const numbers = [5, 2, 8, 1, 9, 3, 0];
const findSecondSmall = numArray => {
    if (numArray.length < 2) {
        return "Array is to short"
    }
    numArray.sort((a, b) => a - b);
    return numArray[1];
}

console.log(findSecondSmall(numbers));
