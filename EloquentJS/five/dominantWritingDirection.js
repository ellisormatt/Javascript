//write a function that computes the dominant writing direction in a string of text
//each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom)

//the dominant direction is the direction of a majority of the characters that have a script associated with them
//use characterScript and countBy functions

require ('./scripts.js');

function dominantDirection(text) {
    // Your code here.
    //console.log(`analyzing letter ${text.charCodeAt(0)}`);
}
  

console.log(dominantDirection("Hello!"));
  // → ltr
console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl

//console.log(SCRIPTS);

