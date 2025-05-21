let display = document.querySelector(".display");
let button = document.querySelectorAll(".button");
let expression = "";

button.forEach((button) => {
  let value = button.textContent;

  button.addEventListener("click", () => {
    if (button.textContent === "RESET") {
      expression = "";
      display.textContent = "";
    } else if (button.textContent === "DEL") {
      expression = expression.slice(0, -1);
      display.textContent = expression;
    } else if (button.textContent === "=") {
      // Replace 'x' and '÷' with JS operators
      //g flag tells js to replace all the occurrences of the character
      let safeExpr = expression.replace(/x/g, "*").replace(/÷/g, "/");
      try {
        //  This checks if safeExpr contains only numbers (0-9), operators (+, -, *, /), dots (.), spaces, and nothing else.
        // The regular expression /^[0-9+\-*/. ]+$/ means:
        // ^ = start of string
        // [0-9+\-*/. ]+ = one or more allowed characters
        // $ = end of string
        // .test(safeExpr) returns true if the string matches, false otherwise.

        if (/^[0-9+\-*/. ]+$/.test(safeExpr)) {
          let result = Function('"use strict";return (' + safeExpr + ")")();

          // This creates a new function that returns the result of evaluating safeExpr as a JavaScript expression.
          // "use strict"; enforces strict mode for safer execution.
          // The function is immediately called with () to get the result.

          display.textContent = result;
          // This updates the calculator display to show the result.
          expression = result.toString();
          // This sets the expression variable to the result (as a string), so further calculations can continue from this result.
        } else {
          display.textContent = "Error";
          expression = "";
        }
      } catch {
        display.textContent = "Error";
        expression = "";
      }
    } else {
      expression += value;
      display.textContent = expression;
    }
  });
});

//Arithmetic operations
