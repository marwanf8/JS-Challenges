/* TODO: Exercise (02)
    write a JavaScript program to get the 
    extension of a filename
*/

// index.html => .html
// style.css => .css

// SOLUTION
// slice()
// lastIndexOf('.')

const exeFile = file => file.slice(file.lastIndexOf('.'))

console.log(exeFile('index.html'));
console.log(exeFile('style.css'));