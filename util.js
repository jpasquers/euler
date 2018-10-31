isPrime = (num) => {
    for (let i=2; i<=Math.pow(num,0.5); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

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

isPalindrome = (num) => {
    let numstr = num.toString();
    let half = Math.floor(numstr.length/2);
    for (let i=0; i<=half; i++) {
        if (numstr[i] != numstr[numstr.length-i-1]) return false;
    }
    return true;
}

module.exports = {
    isPrime: isPrime,
    getDivisors: getDivisors,
    isPalindrome: isPalindrome
}