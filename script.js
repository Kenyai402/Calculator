let display = document.querySelector(".display");
let button = document.querySelectorAll(".button");
let expression = "";

//Arithmetic operations

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

// Theme switches
let themeSwitch = document.querySelector(".toggle-knob");
let currentTheme = 1;
themeSwitch.addEventListener("click", () => {
  currentTheme++;
  if (currentTheme > 3) {
    currentTheme = 1;
  }
  const knob = document.querySelector(".toggle-knob");
  knob.classList.remove("theme-1", "theme-2", "theme-3");
  knob.classList.add(`theme-${currentTheme}`);
  //Use double equal sign for comparison
  if (currentTheme === 2) {
    //Changes backgroundColor of display area
    document.querySelector("body").style.backgroundColor = "hsl(0, 0%, 90%)";
    document.querySelector("body").style.color = "hsl(60, 10%, 19%)";
    document.querySelector(".toggle-switch").style.backgroundColor =
      "hsl(0, 5%, 81%)";
    document.querySelector(".toggle-knob").style.backgroundColor =
      "hsl(25, 98%, 40%)";
    document.querySelector(".grid-container").style.backgroundColor =
      "hsl(0, 5%, 81%)";
    document.querySelector(".display").style.backgroundColor =
      "hsl(0, 0%, 93%)";
    document.querySelector(".display").style.color = "hsl(60, 10%, 19%)";
    document.querySelectorAll(".button").forEach((btn) => {
      btn.style.backgroundColor = "hsl(45, 7%, 89%)";
      btn.style.color = "hsl(60, 10%, 19%)";
    });
    document.querySelector(".reset").style.backgroundColor =
      "hsl(185, 42%, 37%)";
    document.querySelector(".reset").style.color = "hsl(0, 0%, 100%)";

    document.querySelector(".reset").onmouseover = function () {
      this.style.backgroundColor = " hsl(185, 58%, 25%)";
    };
    document.querySelector(".reset").onmouseout = function () {
      this.style.backgroundColor = "hsl(185, 42%, 37%)";
    };
    document.querySelector(".btn-del").style.backgroundColor =
      "hsl(185, 42%, 37%)";
    document.querySelector(".btn-del").style.color = "hsl(0, 0%, 100%)";

    document.querySelector(".btn-del").onmouseover = function () {
      this.style.backgroundColor = " hsl(185, 58%, 25%)";
    };
    document.querySelector(".btn-del").onmouseout = function () {
      this.style.backgroundColor = "hsl(185, 42%, 37%)";
    };

    document.querySelector(".equal").style.backgroundColor =
      "hsl(25, 98%, 40%)";
    document.querySelector(".equal").style.color = "hsl(0, 0%, 100%)";

    document.querySelector(".equal").onmouseover = function () {
      this.style.backgroundColor = " hsl(25, 99%, 27%)";
    };
    document.querySelector(".equal").onmouseout = function () {
      this.style.backgroundColor = "hsl(25, 98%, 40%)";
    };
  } else if (currentTheme === 3) {
    document.querySelector("body").style.backgroundColor = "hsl(268, 75%, 9%)";
    document.querySelector("body").style.color = " hsl(52, 100%, 62%)";
    document.querySelector(".toggle-switch").style.backgroundColor =
      "hsl(268, 71%, 12%)";
    document.querySelector(".toggle-knob").style.backgroundColor =
      "hsl(176, 100%, 44%)";
    document.querySelector(".grid-container").style.backgroundColor =
      "hsl(268, 71%, 12%)";
    document.querySelector(".display").style.backgroundColor =
      "hsl(268, 71%, 12%)";
    document.querySelector(".display").style.color = " hsl(52, 100%, 62%)";
    document.querySelectorAll(".button").forEach((btn) => {
      btn.style.backgroundColor = "hsl(281, 89%, 26%)";
      btn.style.color = "hsl(52, 100%, 62%)";
    });

    document.querySelector(".reset").style.backgroundColor =
      "hsl(285, 91%, 52%)";
    document.querySelector(".reset").style.color = "hsl(0, 0%, 100%)";
    document.querySelector(".reset").onmouseover = function () {
      this.style.backgroundColor = "hsl(281, 89%, 26%)";
    };
    document.querySelector(".reset").onmouseout = function () {
      this.style.backgroundColor = "hsl(285, 91%, 52%)";
    };
    document.querySelector(".btn-del").style.backgroundColor =
      "hsl(285, 91%, 52%)";
    document.querySelector(".btn-del").style.color = "hsl(0, 0%, 100%)";
    document.querySelector(".btn-del").onmouseover = function () {
      this.style.backgroundColor = "hsl(281, 89%, 26%)";
    };
    document.querySelector(".btn-del").onmouseout = function () {
      this.style.backgroundColor = "hsl(285, 91%, 52%)";
    };
    document.querySelector(".equal").style.backgroundColor =
      "hsl(176, 100%, 44%)";
    document.querySelector(".equal").style.color = "hsl(198, 20%, 13%)";
    document.querySelector(".equal").onmouseover = function () {
      this.style.backgroundColor = "hsl(185, 42%, 37%)";
    };
    document.querySelector(".equal").onmouseout = function () {
      this.style.backgroundColor = "hsl(176, 100%, 44%)";
    };
  } else {
    document.querySelector("body").style.backgroundColor = "hsl(222, 26%, 31%)";
    document.querySelector("body").style.color = "white";
    document.querySelector(".toggle-switch").style.backgroundColor =
      "hsl(223, 31%, 20%)";
    document.querySelector(".toggle-knob").style.backgroundColor =
      "hsl(6, 63%, 50%)";
    document.querySelector(".grid-container").style.backgroundColor =
      "hsl(223, 31%, 20%)";
    document.querySelector(".display").style.backgroundColor =
      "hsl(224, 36%, 15%)";
    document.querySelector(".display").style.color = "white";
    document.querySelectorAll(".button").forEach((btn) => {
      btn.style.backgroundColor = "hsl(30, 25%, 89%)";
      btn.style.color = "hsl(221, 14%, 31%)";
    });
    document.querySelector(".reset").style.backgroundColor =
      "hsl(225, 21%, 49%)";
    document.querySelector(".reset").style.color = "white";

    document.querySelector(".reset").onmouseover = function () {
      this.style.backgroundColor = "hsl(224, 28%, 35%)";
    };
    document.querySelector(".reset").onmouseout = function () {
      this.style.backgroundColor = "hsl(225, 21%, 49%)";
    };
    document.querySelector(".btn-del").style.backgroundColor =
      "hsl(225, 21%, 49%)";
    document.querySelector(".btn-del").style.color = "white";

    document.querySelector(".btn-del").onmouseover = function () {
      this.style.backgroundColor = "hsl(224, 28%, 35%)";
    };
    document.querySelector(".btn-del").onmouseout = function () {
      this.style.backgroundColor = "hsl(225, 21%, 49%)";
    };
    document.querySelector(".equal").style.backgroundColor = "hsl(6, 63%, 50%)";
    document.querySelector(".equal").style.color = "white";

    document.querySelector(".equal").onmouseover = function () {
      this.style.backgroundColor = "hsl(6, 70%, 34%)";
    };
    document.querySelector(".equal").onmouseout = function () {
      this.style.backgroundColor = "hsl(6, 63%, 50%)";
    };
  }
});
