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
  