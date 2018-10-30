let arrs = [];

arrs.push([75]);
arrs.push([95, 64]);
arrs.push([17, 47, 82]);
arrs.push([18, 35, 87, 10]);
arrs.push([20, 04, 82, 47, 65]);
arrs.push([19, 01, 23, 75, 03, 34]);
arrs.push([88, 02, 77, 73, 07, 63, 67]);
arrs.push([99, 65, 04, 28, 06, 16, 70, 92]);
arrs.push([41, 41, 26, 56, 83, 40, 80, 70, 33]);
arrs.push([41, 48, 72, 33, 47, 32, 37, 16, 94, 29]);
arrs.push([53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14]);
arrs.push([70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57]);
arrs.push([91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48]);
arrs.push([63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31]);
arrs.push([04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]);


sums = [];
for (let i=0; i<arrs.length; i++) {
    sums.push([]);
}

for (let i=0; i<arrs.length; i++) {
    arr = arrs[i];
    sum = sums[i];
    for (let j=0; j<arr.length; j++) {
        if (i==0) sum.push(arr[j]);
        else {
            if (j==0) sum.push(sums[i-1][j] + arr[j]);
            else if (j==arr.length-1) sum.push(sums[i-1][j-1] + arr[j]);
            else {
                let max = Math.max(sums[i-1][j-1] + arr[j],sums[i-1][j] + arr[j]);
                sum.push(max);
            }
        }
        
    }
}

last_sums = sums[sums.length-1];
console.log(sums);

let max = last_sums.reduce((a,b) => Math.max(a,b));
console.log(max);