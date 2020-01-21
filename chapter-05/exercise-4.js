// Dominant writing direction

// Write a function that computes the dominant writing direction in a string of text. 
// Remember that each script object has a direction property that can be 
// "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

// The dominant direction is the direction of a majority of the characters that have a script associated with them. 
// The characterScript and countBy functions defined earlier in the chapter are probably useful here.
const scripts = require('./scripts');

function characterScript(code) {
  for (let script of scripts) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code <= to;
    })) {
      return script.direction;
    }
  }
  return null
}

function dominantDirection(text) {
  let countDirection = []
  let ltrArray = []
  let rtlArray = []
  for(let char of text){
    let signDir = characterScript(char.codePointAt(0));
    countDirection.push(signDir)
  }
  // console.log(countDirection)
  for(let z=0; z<=countDirection.length-1; z++){
    if(countDirection[z]== 'ltr'){
      ltrArray++
    }else{
      rtlArray++
    }
  }
  if(ltrArray > rtlArray){
    return 'ltr'
  }else{
    return 'rtl'
  } 
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
