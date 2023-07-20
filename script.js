document.addEventListener("DOMContentLoaded", () => {
    // Selecting the display element
    const display = document.getElementById("display");
    let currentOperand = "0";
    let previousOperand = "";
    let operation = "";
  
    // Function to update the display content
    const updateDisplay = () => {
      display.textContent = currentOperand;
    };
  
    // Function to append a number to the current operand
    const appendNumber = (number) => {
      if (currentOperand === "0" || currentOperand === "-0") {
        currentOperand = number.toString();
      } else {
        currentOperand += number.toString();
      }
    };
  
    // Function to clear the calculator state
    const clear = () => {
      currentOperand = "0";
      previousOperand = "";
      operation = "";
    };
  
    // Function to perform the computation and update currentOperand
    const compute = () => {
      const prev = parseFloat(previousOperand);
      const current = parseFloat(currentOperand);
      switch (operation) {
        case "+":
          currentOperand = (prev + current).toString();
          break;
        case "-":
          currentOperand = (prev - current).toString();
          break;
        case "*":
          currentOperand = (prev * current).toString();
          break;
        case "/":
          currentOperand = (prev / current).toString();
          break;
      }
      previousOperand = "";
      operation = "";
    };
  
    // Function to handle operator clicks
    const handleOperator = (operator) => {
      if (operation === "") {
        previousOperand = currentOperand;
        currentOperand = "0";
      } else {
        compute();
      }
      operation = operator;
    };
  
    // Function to handle decimal click
    const handleDecimal = () => {
      if (!currentOperand.includes(".")) {
        currentOperand += ".";
      }
    };
  
    // Event handler for number button clicks
    const handleNumberClick = (event) => {
      const number = event.target.textContent;
      appendNumber(number);
      updateDisplay();
    };
  
    // Event handler for operator button clicks
    const handleOperatorClick = (event) => {
      const operator = event.target.textContent;
      handleOperator(operator);
    };
  
    // Event handler for decimal button click
    const handleDecimalClick = () => {
      handleDecimal();
      updateDisplay();
    };
  
    // Event handler for equal button click
    const handleEqualClick = () => {
      compute();
      updateDisplay();
    };
  
    // Event handler for clear button click
    const handleClearClick = () => {
      clear();
      updateDisplay();
    };
  
    // Adding click event listeners to the number buttons
    document.querySelectorAll(".number").forEach((button) => {
      button.addEventListener("click", handleNumberClick);
    });
  
    // Adding click event listeners to the operator buttons
    document.querySelectorAll(".operator").forEach((button) => {
      button.addEventListener("click", handleOperatorClick);
    });
  
    // Adding click event listeners to the decimal, equal, and clear buttons
    document.getElementById("decimal").addEventListener("click", handleDecimalClick);
    document.getElementById("equal").addEventListener("click", handleEqualClick);
    document.getElementById("clear").addEventListener("click", handleClearClick);
  });
  