//a function that takes two arguments and returns their minimum

function min (argOne,argTwo) {
    if(argOne+argTwo >= argTwo*2) {
        return argTwo;
    } else {
        return argOne;
    }
}

console.log(min(55,10));