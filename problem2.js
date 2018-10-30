fibBack1 = 1;
let fib = 2;
let sum =0;
while (fib <= 4000000) {
    if (fib % 2 == 0) sum+= fib;
    let newFib = fib + fibBack1;
    fibBack1 = fib;
    fib = newFib;
}

console.log(sum);