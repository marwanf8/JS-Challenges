/*  TODO: Exercise (03)
    write a JavaScript program to replace every 
    character in a given string with the character
    following it in the alphabet
*/

// x = abc => bcd
// split('') => ['a', 'b', 'c']
// loop => map()
// x.charCodeAt(2) => 11
// String.fromCharCode(x.charCodeAt(2)) => b

const alphaFollow = (str) =>
  str
    .split("")
    .map((char) =>
      // return String.fromCharCode(char.charCodeAt(0) + 1)
      char === "z" ? "a" : String.fromCharCode(char.charCodeAt(0) + 1)
    )
    .join("");

console.log(alphaFollow("abcz"));
