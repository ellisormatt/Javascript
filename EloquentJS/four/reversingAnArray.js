//function reverseArray takes an array and produces a new array that has same elements in reverse order

//function reverseArrayInPlace modifies the given array to reverse the order of its elements


function reverseArray (array) {
    newArray = [];
    for(let i=array.length-1;i>=0;i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(reverseArray([1,2,3,4,5]));

function reverseArrayInPlace (array) {
    for(let i=0;i<Math.floor(array.length/2);i++){
        let tempFirst = array[i];
        let tempLast = array[(array.length-1)-i];
        array[i] = tempLast;
        array[(array.length-1)-i] = tempFirst;
    }
    return array;
}

console.log(reverseArrayInPlace(['a','b','c','d']));