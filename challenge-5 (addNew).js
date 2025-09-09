/*  TODO: Exercise (05)
    write a JavaScript program to create a new string 
    adding "New!" in a front of given string.
    If the given string begins with "New!" already
    then return the original string
*/

// check if word contains New!
// return word
// else New! word

const addNew = (word) => (word.includes("New!") ? word : `New! ${word}`);

console.log(addNew("Marwan"));
console.log(addNew("New! Marwan"))
