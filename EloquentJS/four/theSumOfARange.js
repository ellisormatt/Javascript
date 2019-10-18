//write a range function that takes two args, start and end
//returns an array containing all numbers from start up to (including) end

//next, write a sum function that takes an array of numbers
//returns the sum of these numbers

//bonus, modify range function to take an optional third arg that indicates the 'step' value used when building the array
//if no step is given, elements go up by increments of one
//range(1, 10, 2) should return [1, 3, 5, 7, 9]
//make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2]


function range (start,end,step=1) {
    let results = [];
    
    if(start<end){
        for(let i=start;i<end+1;i+=step){
            results.push(i);
        }
        return results;
    } else {
        for(let i=start;i>end-1;i+=step){
            results.push(i);
        }
        return results;
    }
}

function sum (numArray) {
    let results = 0;
    for(let i=0;i<numArray.length;i++) {
        results += numArray[i];
    }
    return results;
}

console.log(range(1,10));

//console.log(range(1,10,2));

console.log(range(5,2,-1));

//console.log(sum(range(1, 10)));