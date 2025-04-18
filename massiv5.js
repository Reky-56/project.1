var arr = [];
var N = 100;
var count = 0
for(var i=0; i<N; i++){
    arr[i] = prompt('Enter value');
}
for(var i=0; i<N; i++){
    if(arr[i] > 9999 && arr[i] < 100000)
        count++
}
console.log(count)
