// Minimum

// The previous chapter introduced the standard function Math.min that returns its smallest argument. 
// We can build something like that now. Write a function min that takes two arguments and returns their minimum.

const minFnc = function(x, y){
    if(x>y){
        return y;
    }else{
        return x;
    }
}

console.log(minFnc(123, -123));