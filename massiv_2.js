let N = 3;
let M = 3;
let array = [];
for (let i = 0; i < N; i++) {
    array[i] = [];
    for (let j = 0; j < M; j++) {
        array[i][j] = Math.floor(Math.random() * 100) + 1;
    }
}
let evenSum = 0;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (array[i][j] % 2 == 0) {
            evenSum += array[i][j];
        }
    }
}
console.log('Sanamsargui massive:', array);
console.log('Tegsh toonii niilber:', evenSum);


