const prompt = require('prompt-sync')();
var ug = prompt('ug oruul  ')
var shineUg = ""
for (var i = 0; i < ug.length ; i++) {
    if(ug[i] == ug[i].toLowerCase()){
        shineUg += ug[i].toUpperCase()
    }else{
        shineUg += ug[i].toLowerCase()
    }
       
}
console.log(shineUg)