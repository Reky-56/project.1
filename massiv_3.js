const arr = [1,1,1,1,1,1,1,5,6,3,6,6,7,7,7,7,7,7,7] 
let maxCount = 0;
let mostFrequent = "";
for (let i = 0 ; i < arr.length; i++){
    let count = 0;
    for ( let j = 0 ; j < arr.length ; j++){
        if (arr[i]===arr[j]) {
            count++;
        }
    }
    if (count > maxCount){
        maxCount = count;
        mostFrequent = arr[i];
    }
}
console.log(mostFrequent);

