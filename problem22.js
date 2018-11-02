let alphValue = (name) => {
    let sum = 0;
    for (let i=0; i<name.length; i++) {
        sum += name.charCodeAt(i) - 64
    }
    return sum;
}

console.log(alphValue("COLIN"));

let fs = require("fs");
let path = require("path");
fs.readFile(path.join(__dirname, "p022_names.txt"), "utf-8", (err,data) => {
    let dataVals = data.replace(/"/g, "").split(",");
    dataVals.sort();
    let sum = 0;
    dataVals.forEach((dataVal,i) => {
        sum += alphValue(dataVal)*(i+1);
    })
    console.log(sum);
})