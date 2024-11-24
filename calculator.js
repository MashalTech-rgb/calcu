let expression = ""; // This will hold the current expression entered by the user

// Function to append a value to the display
function appendValue(value) {
    expression += value;
    document.getElementById("result").value = expression;
}

// Function to handle mathematical operations
function operate(operator) {
    expression += " " + operator + " ";
    document.getElementById("result").value = expression;
}

// Function to clear the display
function clearDisplay() {
    expression = "";
    document.getElementById("result").value = expression;
}

// Function to handle backspace (delete the last character)
function backspace() {
    expression = expression.slice(0, -1);
    document.getElementById("result").value = expression;
}

// Function to calculate the result of the expression
function calculate() {
    try {
        // Use eval to calculate the expression (be cautious with eval in real apps)
        expression = eval(expression).toString();
        document.getElementById("result").value = expression;
    } catch (error) {
        document.getElementById("result").value = "Error"; // Display error if the calculation fails
        expression = ""; // Reset the expression on error
    }
}
