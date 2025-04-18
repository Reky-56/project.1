const prompt = require('prompt-sync')()
var oron = 0
var num = prompt('too oruul')
while(Math.floor(num)>0){
    num=num/10
    oron=oron+1
}
console.log(oron);
