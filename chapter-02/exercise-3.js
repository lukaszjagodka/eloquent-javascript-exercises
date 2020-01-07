// Chessboard

// Write a program that creates a string that represents an 8×8 grid, 
// using newline characters to separate lines. 
// At each position of the grid there is either a space or a "#" character. 
// The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

(() => {
signs= '';
for(let x = 0; x<=71; x++){
    if(x%9==0){
        signs+='\n';
    }else if(x%2==0){
        signs+='#';
    }else {
        signs+=' ';
    }
}
console.log(signs);
})();