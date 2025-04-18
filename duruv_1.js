const prompt = require('prompt-sync')();
var a = prompt("ug oruul: ");
function ugUhraah(ug) {
    let uharsan = ug.split('').reverse('').join('');
    if (uharsan === ug) {
        return true;
    }
    return false;
}
console.log(ugUhraah(a));

