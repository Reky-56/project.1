const prompt = require('prompt-sync') ();
var x = prompt('too ug :') 
function solih(str) {
    if(str.length % 2 !== 0) {
        return false;
    }
    let swapped = '';
    for(let i = 0; i < str.length; i += 2) {
        swapped += str[i + 1] + str[i];
    }
    return parseInt(swapped);
}
console.log(solih(x));
