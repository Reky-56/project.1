const prompt = require('prompt'-sync)();
var n 
n = prompt("utga oruul")
prime = true
for(let i=2; i<n; i++){
    if(n%i == 0){
        prime = false
        break;
    }
}
if(prime){
    console.log('mun')
}
else{
    console.log('bish')
}