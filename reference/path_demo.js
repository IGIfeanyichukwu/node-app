const path = require('path');

console.log(__filename);

//get base file name
console.log(path.basename(__filename));

// Directory name (using the path module instead of __dirname)
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));