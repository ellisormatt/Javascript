//creates a string that represents an 8x8 grid
//uses newline characters to separate lines
//each position of the grid there is either a space or a '#'
//characters should form a chessboard

/*

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/

/*
if I have odd, ' '
if I have even, '#'
if I have 8, '/n'



*/

let board = '';

for(let i=1;i<9;i++){
    for(let x=1;x<9;x++){
        if(x==8){
            //write a '/n'
            board += '\n';
        } else if (x%2 == 1) {
            //write a ' '
            board += ' ';
        } else {
            //write a '#'
            board += '#';
        }
    }
}

console.log(board);