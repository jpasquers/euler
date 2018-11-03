let Util = require("./util");

let abundants = [];
for (let i=1; i<=28123; i++) {
    if (Util.sum(Util.getProperDivisors(i)) > i) {
        abundants.push(i);
    }
}

let final = [];
let arrHasInnerSum = (arr,val) => {
    for (let i=0; i<arr.length; i++) {
        for (let j=i; j<arr.length; j++) {
            if (arr[i] + arr[j] == val) {
                return true;
            }
        }
    }
    return false;
}

for (let i=1; i<=28123; i++) {
    if (!arrHasInnerSum(abundants,i)) {
        final.push(i);
    }
}

console.log(Util.sum(final));