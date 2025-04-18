const prompt = require('prompt-sync')();
let a = parseInt(prompt("ehnii too: "));
let b = parseInt(prompt("hoyrdoh too: "));
let c = parseInt(prompt(" guravdah too"));
let d = parseInt(prompt("duruvduh too "));
let Numbers = [];
if (a % 7 === 0) {
    Numbers.push(a);
}
if (b % 7 === 0) {
    Numbers.push(b);
}
if (c % 7 === 0) {
    Numbers.push(c);
}
if (d % 7 === 0) {
    Numbers.push(d);
}
console.log("7d huvaagdah toonud:", Numbers);