let button = document.querySelectorAll(".btn");
let display = document.getElementById("display");

let currentButton;
let numberConcatenator = [];
let storedValues = [];
let joinedNumber = "";



// This regex detects all digits 0-9 and "."
let digitAndPeriodRegex = /\d|\./;
let equationToEval;
let solution;

// This adds event listeners to all buttons - logging them when clicked.
button.forEach((btn) => {
    btn.addEventListener("click", function() {
        currentButton = btn.textContent;
        textDisplayEditor();
        /*
        if (display.textContent[0] == 0 && display.textContent[1] != ".") {
            display.textContent = "";
            display.textContent += currentButton;
        } else {
            display.textContent += currentButton;
        }
        */
        
        
        if (digitAndPeriodRegex.test(currentButton)) {
            numberConcatenator.push(currentButton);
        }



        // 
        if (currentButton == "+" || currentButton == "−" || currentButton == "×" || currentButton == "÷") {
            // This joins the numbers in numberConcatinator
            // Then changes them from strings to Numbers
            // Then sends them to storedValues array

            if (numberConcatenator[0] != "" && numberConcatenator[0] != undefined) {
                joinedNumber = numberConcatenator.join('');
                storedValues.push(Number(joinedNumber));
               // display.textContent += storedValues;
            }


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
            


            /*
            console.log(joinedNumber);
            console.log(storedValues);
            */




        } else if (currentButton == "DEL") {
            if (storedValues[storedValues.length - 1] == "-" || storedValues[storedValues.length - 1] == "*" || storedValues[storedValues.length - 1] == "/" || storedValues[storedValues.length - 1] == "+") {
                storedValues.pop();
            } else {
                numberConcatenator.pop();
                storedValues.pop();
            }
            /*
            console.log(storedValues);
            console.log(numberConcatenator);
            */
        } else if (currentButton == "AC") {
            numberConcatenator = [];
            storedValues = [];
            display.textContent = '0';
            // console.log(display.textContent);
        } else if (currentButton == "=") {
            if (numberConcatenator[0] != "" && numberConcatenator[0] != undefined) {
                joinedNumber = numberConcatenator.join('');
                storedValues.push(Number(joinedNumber));
            }


           equationToEval = storedValues.join('');
           
           solution = eval(equationToEval);
           
           numberConcatenator = [];
           storedValues = [];

           storedValues.push(solution);
           if (solution == undefined) {
               display.textContent = "0";
           } else {
               display.textContent = solution;
           }
        }
        
        
        // console.log(numberConcatenator[0]);

        
        // console.log(numberConcatenator);
        // console.log(storedValues);
        // console.log(equationToEval);
        // console.log(solution);

       
        /*
        if (currentButton == "=") {
            // run eval function
            // console.log(currentButton);
        };

        */
        
        







        /*
        console.log(currentButton);
        console.log(btn);
        console.log(btn.textContent);
        */
    });
});

let deleteString;
let zeroVariable = "0";
function textDisplayEditor () {
    
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
    }
console.log(display.textContent);

}

/*
(display.textContent[0] == "0" && display.textContent[1] != ".") {
    display.textContent = "";
    display.textContent += currentButton;

    (currentButton == "DEL" && display.textContent.length == 1) {
        display.textContent = zeroVariable;
// =====> Trigger all this on currentButton == "="
// Use a regular expression to catch all multiplication and division operants in testArray
// Swap those for the version javascript will recognize & / 
// Use the inbuilt eval() function to calculate answer
// Return answer as textContent (or innerHTML) for the calculator display window.


/*
let deleteString;
let zeroVariable = "0";
function textDisplayEditor () {
    if (display.textContent[0] == "0" && display.textContent[1] != ".") {
        display.textContent = "";
        display.textContent += currentButton;
    } else if (currentButton == "DEL" && display.textContent.length != 1) {
        deleteString = display.textContent.slice(0, -1);
        display.textContent = deleteString;
    } else if (currentButton == "DEL" && display.textContent.length == 1) {
        display.textContent = zeroVariable;
    } 
    
    else {
        display.textContent += currentButton;
    }
console.log(display.textContent);

}
*/