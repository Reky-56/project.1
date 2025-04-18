const prompt = require('prompt-sync')(); 
function egshigHuvirgah(input) {
    return input.replace(/[aeiouy]/gi, char => char.toUpperCase());
  }
  
  let inputString = prompt("Utga oruul:");
  let resultString = egshigHuvirgah(inputString);
  
  console.log("Ehnii utga:", inputString);
  console.log("Ajilsan utga:", resultString);