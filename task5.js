// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculatorFunc = (num1 = 0 , operators = "+", num2 = 0) => {
    switch (operators) {
        case "+": return num1 + num2;
        break;
        case "-": return num1 - num2;
        break;
        case "*": return num1 * num2;
        break;
        case "/":
        if (num2 !== 0) {
            return num1 / num2;
        }else{
            return "not valid number"
        } 
        break;
        default:
            break;
    }
    `${num1}${operators}${num2}`
};

console.log(calculatorFunc(2000, '/' , 0));