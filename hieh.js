const prompt=require ("prompt-sync") ()
var a,b,c
a = prompt("Utga oruul") 
b=1
while(b<=a/2){
    if(a%b==0){
        c=b
    }
    b=b+1
}
console.log(a, "iin hamgiin ih yurunhii huvaagch n", c  )
