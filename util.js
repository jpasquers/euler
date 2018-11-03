let isPrime = (num) => {
    if (num <= 0) return false;
    for (let i=2; i<=Math.pow(num,0.5); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

let getDivisors = (num) => {
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

let sumDivisorsMap = {

}

let getProperDivisors = (num) => {
    let res = [];
    for (let i=num-1; i>0; i--) {
        if (num % i == 0) res.push(i);
    }
    return res;
}

let sumProperDivisors = (num) => {
    if (num in sumDivisorsMap) return sumDivisorsMap[num];
    let divisors = getProperDivisors(num);
    if (divisors.length == 0) return 0;
    let sum = divisors.reduce((a,b) => a+b);
    sumDivisorsMap[num] = sum;
    return sum;
}

let isPalindrome = (num) => {
    let numstr = num.toString();
    let half = Math.floor(numstr.length/2);
    for (let i=0; i<=half; i++) {
        if (numstr[i] != numstr[numstr.length-i-1]) return false;
    }
    return true;
}

let sum = (arr) => {
    if (arr.length == 0) return 0;
    return arr.reduce((a,b) => a+b);
}

let pad_zeros = (str,len) => {
    if (str.length >= len) return str;
    else {
        let addr_str = "";
        for (let i=0; i<len-str.length; i++) {
            addr_str += "0";
        }
        return addr_str + str;
    }
}

//only works if the second string is 1 digit.
//For multi by multi use strMult.
let strMultOne = (str1,str2) => {
    if (str2.length > 1) return null;
    let carryOver = 0;
    let result = "";
    for (let i=str1.length-1; i>=0; i--) {
        let val = (parseInt(str1[i]) * parseInt(str2[0])) + carryOver;
        if (val >= 10) {
            if (i==0) {
                result = val.toString() + result;
                break;
            }
            else {
                carryOver = Math.floor(val / 10);
                val = val%10;
            }
        }
        else {
            carryOver = 0;
        }
        result = val + result;
    }
    return result;
}

let strMult = (str1,str2) => {
    let eachRound = [];
    for (let i=str2.length-1; i>=0; i--) {
        let indent = str2.length-1-i;
        let indentStr = "";
        for (let j=0; j<indent; j++) indentStr += "0";
        let res = strMultOne(str1,str2[i]) + indentStr;
        eachRound.push(res);
    }
    return eachRound.reduce((a,b) => strAdd(a,b));
}


let strAdd = (str1,str2) => {
    let larger_len = Math.max(str1.length, str2.length)
    str1 = pad_zeros(str1,larger_len)
    str2 = pad_zeros(str2,larger_len)
    let addr = 0;
    let result = "";
    for (let i=larger_len-1; i>=0; i--) {
        let val = parseInt(str1[i]) + parseInt(str2[i]) + addr;
        if (val >= 10) {
            if (i==0) {
                result = val.toString() + result;
                break;
            }
            else {
                addr = Math.floor(val / 10);
                val = val%10;
            }
        }
        else {
            addr = 0;
        }
        result = val + result;
    }
    return result;
}

let factorial = (num) => {
    if (num == 1 || num == 0) return 1;
    else return num * factorial(num-1);
}

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

module.exports = {
    isPrime: isPrime,
    getDivisors: getDivisors,
    isPalindrome: isPalindrome,
    strAdd: strAdd,
    strMultOne: strMultOne,
    strMult: strMult,
    getProperDivisors: getProperDivisors,
    sumProperDivisors: sumProperDivisors,
    sum: sum,
    factorial: factorial
}