const button = document.querySelectorAll(".btn");
const display = document.getElementById("display");

let currentButton;
let numberConcatenator = [];
let storedValues = [];
let joinedNumber = "";
let equalsChecker = false;
let equationToEval;
let solutionToArray;
let solutionToString;
let solution;
// This regex detects all digits 0-9 and "."
let digitAndPeriodRegex = /\d|\./;
let operationSyntaxErrorRegex = /(\*\+)|(\*\-\-)|(\*\/)|(\*\*)|(\/\+)|(\/\-\-)|(\/\/)|(\/\*)|(\+\+)|(\+\-\-)|(\+\/)|(\+\*)|(\-\+)|(\-\-\-)|(\-\/)|(\-\*)/g;

// This adds event listeners to all buttons - logging them when clicked.
button.forEach((btn) => {
    btn.addEventListener("click", function() {
        currentButton = btn.textContent;
        textDisplayEditor();
        if (digitAndPeriodRegex.test(currentButton)) {
            numberConcatenator.push(currentButton);
        }
        actionButtons();
    });
});



function actionButtons() {
    if (currentButton == "+" || currentButton == "−" || currentButton == "×" || currentButton == "÷") {
        // This joins the numbers in numberConcatinator
        // Then changes them from strings to Numbers
        // Then sends them to storedValues array
        if (numberConcatenator[0] != "" && numberConcatenator[0] != undefined) {
            joinedNumber = numberConcatenator.join('');
            storedValues.push(Number(joinedNumber));
        };
        // This switches the operation characters to ones recognzed by eval()
        if (currentButton == "−") {
            currentButton = "-";
            storedValues.push(currentButton);
        } else if (currentButton == "×") {
            currentButton = "*";
            storedValues.push(currentButton);
        } else if (currentButton == "÷") {
            currentButton = "/";
            storedValues.push(currentButton);
        } else {
            storedValues.push(currentButton);
        }
        numberConcatenator = [];
    } else if (currentButton == "DEL") {
        if (storedValues[storedValues.length - 1] == "-" && numberConcatenator.length == 0 || storedValues[storedValues.length - 1] == "*" && numberConcatenator.length == 0 || storedValues[storedValues.length - 1] == "/" && numberConcatenator.length == 0 || storedValues[storedValues.length - 1] == "+" && numberConcatenator.length == 0) {
            storedValues.pop();
        } else if (equalsChecker == true) {
            // This is for deleting numbers after a solution has been found.
            // Turns solution into string, sends that to numberConcatenator, then removes one value and returns that as solution.
            // Also clears storedValues
            solutionToString = solution.toString();
            numberConcatenator = solutionToString.split("");
            numberConcatenator.pop();
            solution = numberConcatenator.join("");
            storedValues.pop();
        }
        else {
            if (numberConcatenator.length > 0) {
                numberConcatenator.pop();
            } else {
                storedValues.pop();
            }
        };
    } else if (currentButton == "AC") {
        numberConcatenator = [];
        storedValues = [];
        display.textContent = '0';
        equalsChecker = false;
        // console.log(display.textContent);
    } else if (currentButton == "=") {
        equalsKey();
        equalsChecker = true;
    };
};







let deleteString;
function textDisplayEditor() {
    
    if (currentButton == "DEL" && display.textContent.length != 1) {
        deleteString = display.textContent.slice(0, -1);
        display.textContent = deleteString;
    } else if (currentButton == "DEL" && display.textContent.length == 1) {
        display.textContent = "0";
    } else if (display.textContent[0] == "0" && display.textContent[1] != ".") {
        display.textContent = "";
        display.textContent += currentButton;
    } else {
        display.textContent += currentButton;
    };
};



let roundedSolution;
function equalsKey() {
    if (numberConcatenator[0] != "" && numberConcatenator[0] != undefined) {
        joinedNumber = numberConcatenator.join('');
        storedValues.push(Number(joinedNumber));
    };
   equationToEval = storedValues.join('');

   // This checks for operation repeats and cancels the calculation
   if (operationSyntaxErrorRegex.test(equationToEval)) {
       display.textContent = "Sytnax Error";
       storedValues = [];
       numberConcatenator = [];
       return;
   }
   solution = eval(equationToEval);
   roundedSolution = solution.toFixed(5);
   numberConcatenator = [];
   storedValues = [];
   storedValues.push(solution);
   //numberConcatenator.push(solution);
   if (solution == undefined) {
       display.textContent = "0";
   } else {
       display.textContent = solution;
   };
};

// Catch all for user entered errors.
// Syntax errors are handled first in equalsKey();
// Further errors are picked up here.
window.onerror = function () {
    display.textContent = "Error";
}