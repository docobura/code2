const readline = require('readline');//allows console manipulation

const rl = readline.createInterface({
  input: process.stdin, //allows prnt in 
  output: process.stdout //allows print out 
});

function swapCase(str) {
  let swappedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {// turns lower case into upper case
      swappedStr += str[i].toLowerCase();// turns upper case to lower case
    } else {
      swappedStr += str[i].toUpperCase();//swaps lower to upper and  uppeer to lower 
    }
  }
  return swappedStr;
}

rl.question('Enter a string: ', (inputString) => {
  const swappedString = swapCase(inputString);
  console.log('Swapped Case:', swappedString);//swaps the cases 
  rl.close();c
});
