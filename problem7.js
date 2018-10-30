isPrime = (num) => {
    for (let i=2; i<=Math.pow(num,0.5); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

let numPrimes = 0;
let val = 2;

while (true) {
    if (isPrime(val)) numPrimes++;
    if (numPrimes == 10001) break;
    else val++;
}

console.log(val);