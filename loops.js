function positiveIntSum(limit){
    let sum = 0;
    for(let k=1; k<=limit; k++){
        sum = sum + k;
    }
    return sum;
}


function addSum(start, diff, max){
    //setting up varaibles
    let sum = 0;
    let currentNumber = start;

    while(currentNumber <= max){
        //adding to the sum.
        sum = sum + currentNumber;
        //moving to the next number in the list.
        currentNumber = currentNumber + diff;
    }

    return sum;
}

function multSum(start, factor, max){
    //setting up varaibles
    let sum = 0;
    let currentNumber = start;

    while(currentNumber <= max){
        //adding to the sum.
        sum = sum + currentNumber;
        //moving to the next number in the list.
        currentNumber = currentNumber * factor;
    }

    return sum;
}
console.log(positiveIntSum(1500));
console.log(positiveIntSum(2000000));

console.log(addSum(-80, 60, 2860));
console.log(addSum(4, 9, 50000));

console.log(multSum(4, 3, 50000));
console.log(multSum(1, 3, 100));
