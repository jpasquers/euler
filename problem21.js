

let areAmicable = (num1,num2) => {
    let dNum1 = sumProperDivisors(num1);
    let dNum2 = sumProperDivisors(num2);
    return dNum1 == num2 && dNum2 == num1;
}


amicables = [];
for (let i=1; i<10000; i++) {
    for (let j=i+1; j<10000; j++) {
        if (areAmicable(i,j)) {
            amicables.push(i);
            amicables.push(j);
        }
    }
}
let sum = 0;
let set = new Set(amicables);
set.forEach((val) => {
    sum += val;
})

console.log(sum);