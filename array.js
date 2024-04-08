const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, // Set up input from the standard input stream
    output: process.stdout // Set up output to the standard output stream
});

// Function to generate an array of numbers between start and end
function generateArray() {
    rl.question("Enter the start number: ", function (start) { 
        rl.question("Enter the end number: ", function (end) { 
            console.log("Generating array between " + start + " and " + end + ":"); // Log the range of numbers being generated
            let result = []; 
            start = parseInt(start); // Convert start string to integer
            end = parseInt(end); // Convert end string to integer
            if (!isNaN(start) && !isNaN(end)) { 
                if (start <= end) { 
                    for (let i = start; i <= end; i++) {
                        result.push(i); // Add each number to the result array
                    }
                } else { // Generate numbers in descending order
                    for (let i = start; i >= end; i--) {
                        result.push(i); // Add each number to the result array
                    }
                }
                console.log("Output array: " + result); // Log the generated array
            } else {
                console.log("Invalid input. Please enter valid numbers."); // Log error message for invalid input
            }
            rl.close(); // Close the readline interface
        });
    });
}

// Call the function to generate the array
generateArray();
