isPrime = (num) => {
    for (let i=2; i<=Math.pow(num,0.5); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

let val =2;
let sum = 0;

while (val < 2000000) {
    if (val % 1000 == 0) console.log(val);
    if (isPrime(val)) sum+= val;
    val++;
}

console.log(sum);