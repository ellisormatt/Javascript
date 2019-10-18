//define a recursive function isEven corresponding to the following:
// zero is even
// one is odd
// for any other number N, its evenness is the same as N-2
//function accepts a single parameter (positive whole number) and return a boolean


// divide by two until you reach one

function isEven (number) {
    number -= 2;
    if (number == 0) {
        return true;
    } else if (number == 1) {
        return false
    } else {
        return isEven (number);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));