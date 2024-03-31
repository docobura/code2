const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,// shows inputn
  output: process.stdout /// shows outout 
});

function generateArray() {
    rl.question("Enter the start number: ", function(start) { // string starts 
        rl.question("Enter the end number: ", function(end) {
            console.log("Generating array between " + start + " and " + end + ":");
            let result = [];
            start = parseInt(start);
            end = parseInt(end);
            if (!isNaN(start) && !isNaN(end)) {// if statment  
                if (start <= end) {
                    for (let i = start; i <= end; i++) {
                        result.push(i);
                    }
                } else {
                    for (let i = start; i >= end; i--) {
                        result.push(i);
                    }
                }
                console.log("Output array: " + result);//output log 
            } else {
                console.log("Invalid input. Please enter valid numbers.");//else log 
            }
            rl.close();
        });
    });
}

// Call the function to generate the array
generateArray();
