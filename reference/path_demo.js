const path = require('path');

//POSIX, the Portable Operating System Interface, defines the standard APIs for Unix. It's adopted in Unix-based operating systems and beyond.

console.log(__filename);

//get base file name
console.log(path.basename(__filename)); //path-demo.js

// Directory name (using the path module instead of __dirname)
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename)); //.js

// Create path object
console.log(path.parse(__filename));

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));

// path separator
console.log(path.sep); // \

//get path delimiter
console.log(path.delimiter) // ;