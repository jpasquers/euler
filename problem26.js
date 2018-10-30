

noRepeatRemainders = (remainders) => {
    let remainder_set = new Set(remainders);
    return remainder_set.size == remainders.length;
}

let getRepeatIndex = (remainders) => {
    for (let i=0; i<remainders.length; i++) {
        for (let j=i+1; j<remainders.length; j++) {
            if (remainders[i] == remainders[j]) {
                return i;
            }
        }
    }
}

let getNumRepeating = (val) => {
    if (val == 0) return 0;
    let current_val = 10;
    let remainders = [10];
    while (noRepeatRemainders(remainders)) {
        if (current_val < val) {
            current_val *= 10;
            remainders.push(current_val);
            continue;
        }
        else {
            //At some point the sequence terminates, so there is no repeat.
            if (current_val % val == 0) return 0;
            else {
                let remainder = current_val % val;
                current_val = remainder*10;
                remainders.push(current_val);
            }
        }
    }

    let firstRepeat = getRepeatIndex(remainders);
    return remainders.length - 1 - firstRepeat;
}

let repeats = [];
for (let i=0; i<1000; i++) {
    repeats.push(getNumRepeating(i));
}
let max = repeats.reduce((a,b) => {
    return Math.max(a,b);
})

let index = repeats.indexOf(max);
console.log("max number of repeats: " + max);
console.log("index (ans): " + index);
