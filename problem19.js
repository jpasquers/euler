

let monthToDaysMap = {
    1: 31, //jan
    2: 0, //feb, special case
    3: 31, //march
    4: 30, //april
    5: 31, //may
    6: 30, //june
    7: 31, //july
    8: 31, //august
    9: 30, //september
    10: 31, //october
    11: 30, //november
    12: 31 //december
}


let getNumDaysInMonth = (month,year) => {
    if (month == 2) {
        //February... fuck me
        if (year % 4 == 0 && year % 100 != 0) return 29;
        else if (year % 400 == 0) return 29;
        else return 28;
    }
    else {
        return monthToDaysMap[month];
    }
}

let numSundaysFirstMonth = 0;
let dayOfTheWeek = 2; //1 = sunday, 2 = monday
//Fuck you 0 notation.
for (let year=1900; year<=2000; year++) {
    for (let month=1; month<=12; month++) {
        let numDaysInMonth = getNumDaysInMonth(month,year);
        for (let day=1; day<=numDaysInMonth; day++) {
            if (dayOfTheWeek == 1 && day == 1 && year != 1900) numSundaysFirstMonth++;
            dayOfTheWeek++;
            //yes i know i could mod but I want to do 
            if (dayOfTheWeek == 8) dayOfTheWeek = 1;
        }
    }
}

console.log(numSundaysFirstMonth);