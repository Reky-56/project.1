var arr = [12, 15, 9, 4, 3]
var a = 4;
var count = 0;
for(var i = 0; i < arr.length; i++) {
    if(arr[i] % a == 0) {
        count++;
    }
}
    console.log(count);
    