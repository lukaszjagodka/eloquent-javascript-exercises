// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
// Also write a listToArray function that produces an array from a list. Then add a helper function prepend, 
// which takes an element and a list and creates a new list that adds the element to the front of the input list, 
// and nth, which takes a list and a number and returns the element at the given position in the list 
// (with zero referring to the first element) or undefined when there is no such element.

function arrayToList(x){
    let list = {};
    for(let z = x.length-1; z>=0; z--){
        if(z == x.length-1){
            list = {
                value: x[z],
                rest: null
            }
        }else{
            list = {
                value: x[z],
                rest: list
            }
        }
    }
    return list
}

function listToArray(x){
    let arrayFromList = [];
    for (let z = x; z; z = z.rest) {
        z.value ? arrayFromList.push(z.value) : null
    }
    return arrayFromList
}

function prepend(x, y) {
    let list = y
    newList = {
        value: x,
        rest: list
    }
    return newList;
}

console.log(arrayToList([10, 20, 30]));
// { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }
console.log(listToArray(arrayToList([10, 20, 30, 40])));
// [ 10, 20, 30, 40 ]
console.log(prepend(10, prepend(20, null)));
// { value: 10, rest: { value: 20, rest: null } }