//implement the .every method as a function that takes an array and a predicate function as parameters
//write two versions, one using a loop and one using the *some* method

function everyWithLoop(array, test) {
    // Your code here.
    let returnValue;
    if(array.length < 1) {
        return true;
    } else {
        for(let i=0;i<array.length;i++) {
            if(!test(array[i])) {
                returnValue = false;
            } else {
                returnValue = true;
            }
        }
    }
    return returnValue;
}

function everyWithSome (array,test) {
    //return array.some(test);
    let tempReturn = array.some(test);

    
    //if array.some(test) returns true, 
    // passes test if there is no element in array that does not pass the test
    //wtfffffffffffffffffff
    //if array.some(test) returns true, it means at least one value passed the test
}

console.log(everyWithLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyWithLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyWithLoop([], n => n < 10));
// → true

console.log('----------');

console.log(everyWithSome([1, 3, 5], n => n < 10));
// → true
console.log(everyWithSome([2, 4, 16], n => n < 10));
// → false
console.log(everyWithSome([], n => n < 10));
// → true