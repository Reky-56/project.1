function merger(x,y) {
    return [...new Set([...x, ...y])];
}
let arr1 = [1, 1, 1, 3, 4];
let arr2 = [2, 1, 2, 5, 6];
console.log(merger(arr1, arr2));''

