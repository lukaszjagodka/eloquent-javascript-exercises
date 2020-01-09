// The sum of a range

// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));

// Write a range function that takes two arguments, start and end, and 
// returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
// Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that 
// indicates the “step” value used when building the array. If no step is given, 
// the elements go up by increments of one, corresponding to the old behavior. 
// The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
//  Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2]

function range(x, y, z = 1){
    if((x<y && z<0) || (x>y && z>0)){
        return 'Dont do that!';
    }else{
    
    if(z!=0){
        let arrayOfNumbers = []
        if(x>y){
            for(let i = x; i >= y; i+=z){
                arrayOfNumbers.push(i);
            }
        }else{ //x<y
            for(let i = x; i <= y; i+=z){
                arrayOfNumbers.push(i);
            }
        }
        return arrayOfNumbers;
    }else{
        return 'Third parameter cannot be zero';
    }
    }
}

function sum(x){
    let sum = 0;
  if(x[0]=== x[x.length-1]){
    return x[0]
  }else{
    for(let a = x[0]; a<= x.length; a++){
        sum+= a;
    }
    return sum;
  }
}

console.log(range(1, 10));  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(10, 1)); // Dont do that!
console.log(range(1, 10, -2)); // Dont do that!
console.log(range(5, 2, -1)); // [5, 4, 3, 2]
console.log(range(5, 2, 0)); // Third parameter cannot be zero
console.log(range(51, 2, -3)); // [51, 48, 45, 42, 39, 36, 33, 30, 27, 24, 21, 18, 15, 12, 9, 6, 3]
console.log(range(2, 20, 5)); // [ 2, 7, 12, 17 ]
console.log(sum(range(1, 10))); // 55
console.log(sum(range(5, 5))); // 5