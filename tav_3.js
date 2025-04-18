function longElement(arr) {
    let longest = "";

for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
        longest = arr[i];
    }
}
return longest;
}
let arr = ["Anar","bataa","temu", "tom bat ireedui"]
console.log(longElement(arr));