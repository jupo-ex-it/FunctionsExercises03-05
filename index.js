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

function reverseArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++)  {
    
  }
}
//3) Create a new function with one parameter, which is the array we want to change. The function should:
//a) Define and initialize an empty array.
//b) Loop through the old array.
//c) For each element in the old array, call reverseCharacters to flip the characters or digits.
//d) Add the reversed string (or number) to the array defined in part ‘a’.
//e) Return the final, reversed array.
//f) Be sure to print the results from each test case in order to verify your code.



let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];
