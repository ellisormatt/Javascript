//write a function countBs that takes a string as its only argument
//returns a number that indicates how many uppercase 'B' characters there are

//next, write a function called countChar that takes a second arg that indicates the character to be counted (rather than Bs)


function countBs (stringInput) {
    let counter = 0;
    for (let i=0;i<stringInput.length-1;i++) {
        if (stringInput[i] == 'B') {
            counter++;
        }
    }
    return counter;
}

console.log(countBs('BBBBBC'));

function countChar (stringInput,char) {
    let counter = 0;
    for (let i=0;i<stringInput.length-1;i++) {
        if (stringInput[i] == char) {
            counter++
        }
    }
    return counter;
}

console.log(countChar('teststring','t'));