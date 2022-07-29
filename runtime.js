const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray); //.push
// doublerAppend(smallArray); //.push
// doublerAppend(mediumArray); //.push
// doublerAppend(largeArray); //.push
// doublerAppend(extraLargeArray); //.push
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray); //.unshift
// doublerInsert(smallArray); //.unshift
// doublerInsert(mediumArray); //.unshift
// doublerInsert(largeArray); //.unshift
// doublerInsert(extraLargeArray); //.unshift
let resultsInsert = perf.stop();


console.log('Results for the all arrays');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

//results analysis
//Looking at the results as a whole, we can see that doublerAppend, which uses the .push method, is the more efficient function when looking at time complexity. The only time doublerInsert, which uses the .unshift method was more efficient was when the tinyArray was passed in. Looking at the results table, we can see that the values for doublerAppend increase at a steady rate, whereas in the case of doublerInsert, it jumps dramatically. The time difference when largeArray (11.5527ms) and extraLargeArray(1.4818881s) are passed in is quite notable. The doublerAppend scales better, because it starts to perform and scale more efficiently starting at an array size of 100. To summarize, if you array is less than 100, use the doublerInsert function. If your array is >= to 100, use the doublerAppend.

//Why is this happening?
//The time complexity for the 2 functions are as follows: doublerInsert is O(n) and doublerAppend is O(1). The push method only needs to push the new value to the last index, so it's not modifying any of the existing indexes. The time complexity only relies on one number, which is just 1. On the other hand, unshift will completely modify all the existing indexes of an array, by the nature of the method. By unshifting, you're taking in a new value and making it the zero index. While this seems simple like the push method, all the other indexes still need to be incremented in value by one. This method can slow down your program because as the amount of information you have increases, the more your indexes need to be changed for the zero index to be modified.


