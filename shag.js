const prompt = require('prompt-sync')();
let sum = 0;
n = prompt("utga oruul");
for( i = 1; i<=n; i++ ){
    if(i % 7 == 0 && i % 11 == 0)
        sum += i;
}
console.log(sum);



let sum = 0;
for( i = 1; i<=n; i++ ){
if(i % 7 == 0 && i % 11 == 0){
    sum += i;