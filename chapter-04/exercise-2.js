// For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
// The first, reverseArray, takes an array as argument and produces a new array 
// that has the same elements in the inverse order. The second, reverseArrayInPlace, 
// does what the reverse method does: it modifies the array given as argument 
// by reversing its elements. Neither may use the standard reverse method.

function reverseArray(x){
    let lengthOfArray = x.length-1;
    let revArray = [];
    for (let z = lengthOfArray; z >=0; z--){
        revArray.push(x[z]);
    }
    return revArray;
};

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);

function reverseArrayInPlace(arrayValue){
    let lengthOfArray = arrayValue.length-1;
    let helperArray = [];
    helperArray = arrayValue;
    arrayValue = [];
    for (let z = lengthOfArray; z >=0; z--){
        arrayValue.push(helperArray[z]);
    }
    return console.log(arrayValue);
};