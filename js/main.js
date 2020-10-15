let button = document.querySelectorAll(".btn");

let currentButton = "";
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
            storedValues.pop();
        } else if (currentButton == "AC") {
            numberConcatenator = [];
            storedValues = [];
        } else if (currentButton == "=") {





/*=============> THESE LINES ARE THE ISSUE CAUSING MULTIPLE EQUATIONS TO NOT WORK    <===============  **/

            


            /* 
            joinedNumber = numberConcatenator.join('');
            storedValues.push(Number(joinedNumber));
            */
            
            if (numberConcatenator[0] != "" && numberConcatenator[0] != undefined) {
                joinedNumber = numberConcatenator.join('');
                storedValues.push(Number(joinedNumber));
            }
            


            
            /*
            for (let i = storedValues.length - 1; i <= 0; i--) {
                if (typeof storedValues[storedValues.length - 1] == "string") {
                    storedValues.pop();
                } else {
                    continue;
                }
            }
            */


           equationToEval = storedValues.join('');
           
           solution = eval(equationToEval);
           


           // THIS IS MAKING NUMBER CONCAT INTO A ZERO
           numberConcatenator = [];
           
           // return solution;
           storedValues = [];
           storedValues.push(solution);
        }
        
        
        console.log(numberConcatenator[0]);

        
        console.log(numberConcatenator);
        console.log(storedValues);
        console.log(equationToEval);
        console.log(solution);
       
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




// =====> Trigger all this on currentButton == "="
// Use a regular expression to catch all multiplication and division operants in testArray
// Swap those for the version javascript will recognize & / 
// Use the inbuilt eval() function to calculate answer
// Return answer as textContent (or innerHTML) for the calculator display window.
