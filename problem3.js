isPrime = (num) => {
    for (let i=2; i<=Math.pow(num,0.5); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

let num = 600851475143;

let divisor = 2;
while (!isPrime(num)) {
    if (isPrime(divisor) && num % divisor == 0) num = num / divisor;
    else divisor++;
}

console.log(num);