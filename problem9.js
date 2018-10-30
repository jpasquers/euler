for (let num1=1; num1<1000; num1++) {
    for (let num2=1; num2<1000; num2++) {
        let num3 = 1000 - num1 - num2;
        if (num3 <= 0) continue;
        if (Math.pow(num1,2) + Math.pow(num2,2) == Math.pow(num3,2)) console.log(num1*num2*num3);
    }
}