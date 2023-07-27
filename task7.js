// Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(romanNumeral) {
    const romanNumeralsMap = {
      'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentValue = romanNumeralsMap[romanNumeral[i]]; 
      const nextValue = romanNumeralsMap[romanNumeral[i + 1]] || 0; 
      console.log("nextValue", nextValue);
  
      if (currentValue < nextValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }
    }
  
    return result;
  }
  

  
  console.log(romanToInt("XXI")); 
  