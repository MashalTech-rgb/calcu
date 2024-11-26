let expression = "";

function appendValue(value) {
    const lastChar = expression.trim().slice(-1);
    if (isOperator(lastChar) && isOperator(value)) {
        return;
    }
    expression += value;
    updateDisplay();
}
function operate(operator) {
   
    if (expression === "" || isOperator(expression.trim().slice(-1))) {
        return; 
    }
    expression += " " + operator + " ";
    updateDisplay();
}
function clearDisplay() {
    expression = "";
    updateDisplay();
}
function backspace() {
   
    expression = expression.trim();
    expression = expression.slice(0, -1);
    
   
    if (expression.trim().slice(-1) === " ") {
        expression = expression.slice(0, -1);
    }
    updateDisplay();
}
function calculate() {
    try {
        
        if (expression.trim() === "" || isOperator(expression.trim().slice(-1))) {
            throw new Error("Invalid Expression");
        }

        
        expression = eval(expression).toString();
        updateDisplay();
    } catch (error) {
        
        document.getElementById("result").value = `Error: ${error.message}`;
        expression = "";
    }
}


function isOperator(char) {
    return ["+", "-", "*", "/"].includes(char);
}

function updateDisplay() {
    const resultElement = document.getElementById("result");
    if (expression.length > 20) {
        resultElement.value = "Overflow Error";
        expression = "";
    } else {
        resultElement.value = expression;
    }
}
