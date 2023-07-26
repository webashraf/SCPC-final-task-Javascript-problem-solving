// Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()/-_+|;:.<>?/'.split('');
    const randomSymbols = specialChars[Math.floor(Math.random() * specialChars.length)];
    const randomLowercase = lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    const randomUppercase = uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    const randomNumbers = Math.round(Math.random() * 100);
  
    const allChars = randomUppercase + uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)] + randomNumbers + randomLowercase + lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)] +randomNumbers + randomSymbols + specialChars[Math.floor(Math.random() * specialChars.length)] + randomNumbers + lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)] + specialChars[Math.floor(Math.random() * specialChars.length)];
  
    let password = '';

  
    return allChars.slice(0, 12);
  }
  
  // Example usage:
  const passwordLength = 12; // You can set the desired password length here
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);

// const randomPassword = Math.round(Math.random() * 10000);
// console.log(randomPassword);