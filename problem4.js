
isPalindrome = (num) => {
    let numstr = num.toString();
    let half = Math.floor(numstr.length/2);
    for (let i=0; i<=half; i++) {
        if (numstr[i] != numstr[numstr.length-i-1]) return false;
    }
    return true;
}

let num1Max = 100;
let num2Max = 100;
let maxValue = 10000;

for (let i=100; i<1000; i++) {
    for (let j=100; j<1000; j++) {
        let mult = i*j;
        if (isPalindrome(mult) && mult > maxValue) {
            num1Max = i;
            num2Max = j;
            maxValue = mult;
        }
    }
}

console.log(num1Max);
console.log(num2Max);
console.log(maxValue);