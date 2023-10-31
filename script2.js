let num1 = parseFloat(prompt("Enter first number")); // Using parseFloat to handle decimal inputs
let operator = prompt("Enter an operator");
let num2 = parseFloat(prompt("Enter another number")); // Using parseFloat to handle decimal inputs
let result;

if (isNaN(num1) || isNaN(num2)) { // Checking if inputs are valid numbers
    alert("Please enter valid numbers");
} else {
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 !== 0) { // Checking for division by zero
                result = num1 / num2;
            } else {
                result = "Division by zero is not allowed";
            }
            break;

        default:
            result = "Invalid operator";
    }

    alert(`The result is ${result}`);
}
