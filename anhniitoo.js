const prompt=require("prompt-sync")()
var a,prime
a=prompt("too oruul") 
prime = true
for(let i=2; i<a; i++){
    if(a%i == 0){ 
        prime=false
        break;
    }
}
if(prime){
    console.log ('anhnii too')
}
else{
    console.log('anhnii too bish')
}