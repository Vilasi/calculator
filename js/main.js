let button = document.querySelectorAll(".btn");

let currentButton = "";
let testArray = [];

// This adds event listeners to all buttons - logging them when clicked.
button.forEach((btn) => {
    btn.addEventListener("click", function() {
        console.log(btn);
        console.log(btn.textContent);
        currentButton = btn.textContent;
        console.log(currentButton);
        testArray.push(currentButton);
        testArray.push(typeof currentButton);
        if (currentButton == "=") {
            console.log(testArray);
        };
    });
})

// =====> Trigger all this on currentButton == "="
// Use a regular expression to catch all multiplication and division operants in testArray
// Swap those for the version javascript will recognize & / 
// Use the inbuilt eval() function to calculate answer
// Return answer as textContent (or innerHTML) for the calculator display window.
