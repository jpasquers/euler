
let numMap = {
    0: 0, //0
    1: 3, //one
    2: 3, //two
    3: 5, //three
    4: 4, //four
    5: 4, //five
    6: 3, //six
    7: 5, //seven
    8: 5, //eight
    9: 4, //nine
    10: 3, //ten
    11: 6, //eleven
    12: 6, //twelve
    13: 8, //thirteen
    14: 8, //fourteen
    15: 7, //fifteen
    16: 7, //sixteen
    17: 9, //seventeen
    18: 8, //eighteen
    19: 8 //nineteen
}

for (let i=0; i<10; i++) {
    numMap[20+i] = 6 + numMap[i]; //twenty
    numMap[30+i] = 6 + numMap[i]; //thirty
    numMap[40+i] = 5 + numMap[i]; //forty
    numMap[50+i] = 5 + numMap[i]; //fifty
    numMap[60+i] = 5 + numMap[i]; //sixty
    numMap[70+i] = 7 + numMap[i]; //seventy
    numMap[80+i] = 6 + numMap[i]; //eighty
    numMap[90+i] = 6 + numMap[i]; //ninety
}

let getNumLetters = (val) => {
    let sum = 0;
    if (val < 100) sum+= numMap[val];
    else if (val == 1000) sum += 11; //one thousand
    else {
        numHundreds = Math.floor(val / 100);
        sum+= numMap[numHundreds]; //two
        sum+= 7; //hundred
        if (val % 100 != 0) {
            sum+= 3; //and
            sum+= numMap[val % 100];
        }
    }
    return sum;
}

let sum = 0;
for (let i=1; i<=1000; i++) {
    sum+= getNumLetters(i);
    
}

console.log(sum);