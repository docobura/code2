const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function swapCase(str) {
  let swappedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      swappedStr += str[i].toLowerCase();
    } else {
      swappedStr += str[i].toUpperCase();
    }
  }
  return swappedStr;
}

rl.question('Enter a string: ', (inputString) => {
  const swappedString = swapCase(inputString);
  console.log('Swapped Case:', swappedString);
  rl.close();c
});
