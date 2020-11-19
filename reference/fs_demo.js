const fs = require('fs');
const path = require('path');


// CREATE FOLDER
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
// 	if(err) throw err;
// 	console.log('Folder created');
// }); //takes in the folder path, options, and callback


// CREATE AND WRITE TO FILE
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
// 	if(err) throw err;
// 	console.log('File created and written to');
// }); //takes in the file path, what to write to it, and callback


// APPEND TO FILE
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js', err => {
// 	if(err) throw err;
// 	console.log('appended to file');
// }); //takes in the file path, what to append to it, and callback


//READ FILE
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
// 	if(err) throw err;
// 	console.log('File data:', data);
// }); //takes in the file path, character encoding(utf8), and callback


// RENAME A FILE
/*fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloword.txt'), err => {
	if(err) throw err;
	console.log('File renamed...');
}); //takes in the file path, new file path with changed name, and callback
*/