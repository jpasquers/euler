let dict = {}
let movesInGrid = (row,col) =>{
    if (row == 0 || col == 0) return 1;
    let str = row+","+col;
    if (str in dict) return dict[str];
    let result = movesInGrid(row-1,col) + movesInGrid(row,col-1);
    dict[str] = result;
    return movesInGrid(row-1,col) + movesInGrid(row,col-1);
}

console.log(movesInGrid(20,20));