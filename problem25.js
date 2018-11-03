let Util = require("./util");

let ind = 2;
let fib = "1";
let fibPrev = "1";

while (true) {
    let newFib = Util.strAdd(fib,fibPrev);
    ind++;
    fibPrev = fib;
    fib = newFib;
    if (fib.length >= 1000) break;
}

console.log(ind);