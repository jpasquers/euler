//The 0th position will be 1,000,000 / 9!, and will pass on 1,000,000 % 9
let Util = require("./util");

//off by 1 . Whatever
let perm = 999999
nums = [0,1,2,3,4,5,6,7,8,9]
let result = "";
for (let i=0; i<10; i++) {
    let fact = Util.factorial(9 - i);
    let ind = Math.floor(perm / fact)
    result = result + (nums[ind].toString());
    nums.splice(ind,1);
    perm = perm % fact;
}

console.log(result);