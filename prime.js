const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

// Function to filter prime numbers from an array
function filterPrimes(array) {
    return array.filter(num => isPrime(num));
}

// Read input array from the user
rl.question("Enter numbers separated by spaces: ", function(input) {
    const inputArray = input.split(" ").map(Number);
    const resultArray = filterPrimes(inputArray);
    console.log("Prime numbers from the input array:", resultArray);
    rl.close();
});
