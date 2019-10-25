//write a higher order function - loop - that provides something like a for loop statement
//it takes a value, a test function, an update function, and a body function
//each iteration, it first runs the test function on the current loop value and stops if that returns false
//then it calls the body function, giving it the current value
//finally, it calls the update function to create a new value and starts from the beginning

// Your code here.

function loop (value,testFunction,updateFunction,bodyFunction) {
    //console.log(typeof testFunction);
    
    if (!testFunction(value)) {
        //stop the function
        return;
    } else {
        bodyFunction (value);
    }
    loop(updateFunction(value), n => n > 0, n => n - 1, console.log);
    //loop(updateFunction(value));


}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1