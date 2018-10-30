getDivisors = (num) => {
    let divisors = [];
    let start = 1;
    if (num <= 3) return [num];
    for (let i=start; i<=Math.pow(num,0.5); i++) {
        if (i==Math.pow(num,0.5)) divisors.push[i];
        else {
            if (num % i == 0 ) {
                divisors.push(i);
                divisors.push(num / i);
            }
        }
    }
    return divisors;
}

let tri = 1;
let val = 1;
while (true) {
    if (getDivisors(tri).length > 500) {
        break;
    }
    else {
        val++;
        tri+=val;
    }
}

console.log(tri);