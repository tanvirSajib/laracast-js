function squareSum(numbers){
    // codes
    // let sum = 0 ;

    // numbers.forEach(number => {
    //     // sum = sum + (number * number);
    //     sum += (number * number);
    // })

    // return sum;

    return numbers
            .map(number => number * number)
            .reduce((previousValue, cureentValue) => previousValue + cureentValue, 0)
}


console.log(squareSum([1,2,3,4]));


function positiveSum(numbers){
    return numbers
            .filter(number => number > 0) 
            .map(number => number * number)
            .reduce((previousValue, cureentValue) => previousValue + cureentValue, 0)

}

console.log(positiveSum([12,3,-23, 1, -3]));