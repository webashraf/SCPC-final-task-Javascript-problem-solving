// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

function findMostFrequentElement(array) {
    const elementCount = {};
    let maxCount = 0;
    let mostFrequentElement;
  
    for (const element of array) {
      elementCount[element] = (elementCount[element] || 0) + 1;
      if (elementCount[element] > maxCount) {
        maxCount = elementCount[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }
  
  // Test the function
  const array = [2, 4, 2, 5, 2, 6, 2, 7, 1, 2, 3, 2];
  const mostFrequent = findMostFrequentElement(array);
  console.log("Most frequent element:", mostFrequent);
  