const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, //set input
  output: process.stdout //set output
});
//function to handle swtching of cases after input is written
function swapCase(str) {
  let swappedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) { //check if character is upper case 
      swappedStr += str[i].toLowerCase(); //swap
    } else {
      swappedStr += str[i].toUpperCase();
    }
  }
  return swappedStr;
}

function getInputAndSwapCase() {
  rl.question('Enter a string: ', (inputString) => {
    const swappedString = swapCase(inputString);
    console.log('Swapped Case:', swappedString);
    rl.close(); //Console readline interface close
  });
}

// Call the function to get input and swap case
getInputAndSwapCase();
