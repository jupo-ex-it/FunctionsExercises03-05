//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.

console.log(reverseCharacters(8675309));

function reverseCharacters(characters) {
  if (typeof characters == 'number')  {
    let digits = (String(characters).split('').reverse().join(''))  
    return Number(digits)
  }
  else if (typeof characters == 'string')  {
   return characters.split('').reverse().join('');
  }
}

function reverseArray(arrayTest1) {
  let newArray = [];
  for (let i = 0; i < array.length; i++)  {
    
  }
}

let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];
