let Util = require("./util");

let factorial = (num) => {
    if (num == 1) return 1;
    return Util.strMult(num.toString(),factorial(num-1).toString());
}

let sumOfDigits = (num) => {
    sum = 0;
    numStr = num.toString();
    for (let i=0; i<numStr.length; i++) {
        sum+= parseInt(numStr.charAt(i));
    }
    return sum;
}

let hundredFact = factorial(100);
let hundredFactStr = hundredFact.toString();
console.log(sumOfDigits(hundredFactStr));