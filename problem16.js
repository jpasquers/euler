

let multByTwo = (str) => {
    let addr= 0;
    for (let i=str.length-1;i>=0; i--) {
        let val = parseInt(str[i])*2 + addr;
        if (val >= 10) {
            if (i == 0) {
                str = val.toString() + str.substring(1);
                break;
            }
            else {
                val = val - 10;
                addr = 1;
            }
        }
        else {
            addr = 0;
        }
        str = str.substring(0, i) + val.toString() + str.substring(i + 1);
    }
    return str;
}

let value = "1";

for (let i=1; i<=1000; i++) {
    value = multByTwo(value);
}

let sum = 0;
for (let i=0; i<value.length; i++) {
    sum += parseInt(value.charAt(i));
}
console.log(sum);