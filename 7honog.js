const prompt= require('prompt-sync')()
var a 
console.log ('toog oruul')
a=prompt()
if(a==1) {
    console.log('Monday')
}
else{
    if(a==2) {
        console.log('Tuesday')
    }
    else{
        if(a==3) {
            console.log ('Wednesday')
        }
        else{
            if(a==4) {
                console.log ('Thursday')
            }
            else{
                if(a==5) {
                    console.log ('Friday')
                }
                else{
                    if(a==6) {
                        console.log ('Saturday')
                    }
                    else{
                        if(a==7)
                            console.log ('Sunday')
                        else{
                            if(a>7)
                                console.log(' 1-7 hoorondoh toog oruul')
                        }
                    }
                }
            }
        }
    }

}
