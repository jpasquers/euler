let firstHundred = [];
for (let i=1; i<=100; i++) {
    firstHundred.push(i);
}

let sum = (arr) => {
    return arr.reduce((a,b) => a+b);
}
console.log(sum([1,2,3]))


let sumOfSquares = sum(firstHundred.map((val) => Math.pow(val,2)))

let squareOfSums = Math.pow(sum(firstHundred),2);

let diff = squareOfSums - sumOfSquares;
console.log(diff);