let Util = require("./util");

let quad = (a,b,n) => {
    return Math.pow(n,2) + (a*n) + b;
}

let numConsecPrimes = (a,b) => {
    let n=0;
    while (true) {
        if (!Util.isPrime(quad(a,b,n))) return n;
        n++; 
    }
}



let maxNumPrimes = 0;
let maxA = 0;
let maxB = 0;
for (let a=-999; a<1000; a++) {
    for (let b=-1000; b<=1000; b++) {
        console.log (a + " " + b);
        let numPrimes = numConsecPrimes(a,b)
        if (numPrimes > maxNumPrimes) {
            maxNumPrimes = numPrimes;
            maxA = a;
            maxB = b;
        }
    }
}
console.log(maxA*maxB);