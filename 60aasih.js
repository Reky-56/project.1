const prompt = require('prompt-sync')()
var a,b,c,d,sum 
a = parseInt(prompt('too oruul'))
b = parseInt(prompt('too oruul'))
c = parseInt(prompt('too oruul'))
d = parseInt(prompt('too oruul'))
sum = 0
if(a>60)
    sum=sum+a
if(b>60)
    sum=sum+b
if(c>60)
    sum=sum+c
if(d>60)
    sum=sum+d
console.log(sum)
