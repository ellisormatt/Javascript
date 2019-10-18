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

loop 1, ' '
loop 2, 
loop 9, 

*/
/*
let board = '';

for(let i=1;i<9;i++){
    for(let x=1;x<9;x++){
        if(i%2 == 1){
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
        } else {
            if(x==8){
                //write a '/n'
                board += '\n';
            } else if (x%2 == 1) {
                //write a '#'
                board += ' ';
            } else {
                //write a '#'
                board += ' ';
            }
        }
    }
}
*/

let number = 10;
let board = '';

for(let i=1;i<number+1;i++) {
    for(let x=1;x<number+1;x++){
        if ((i+x)%2 == 0) {
            board += ' ';
        } else {
            board += '#';
        }
    }
    board += '\n';
}












console.log(board);