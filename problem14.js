
let getChainSize = (num) => {
    if (num == 0) return 0;
    let chain_len = 0;
    while (num != 1) {
        chain_len++;
        if (num % 2 == 0) num = num/2;
        else num = (num*3) + 1;
    }
    return chain_len;
}

let maxChain = 0;
let maxChainInd = 0;

for (let i=0; i<1000000; i++) {
    let chainSize = getChainSize(i);
    if (chainSize > maxChain) {
        maxChain = chainSize;
        maxChainInd = i;
    }
}

console.log(maxChainInd);