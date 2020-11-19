const Person = require('./app');
const person1 = new Person('Ifex', 21);

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
	// console.log(req.url); // gets the url path
	/*if (req.url === '/') {
		fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
			if(err) throw err;
			res.writeHead(200, { 'Content-Type': 'text/html'});
			res.end(content);
		})
	} else if (req.url === '/about') {
		fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
			if(err) throw err;
			res.writeHead(200, { 'Content-Type': 'text/html'});
			res.end(content);
		})
	} else if (req.url === '/api/users') {
		const users = [
		{name: 'James Philip', age: 40 },
		{name: 'Paul White', age: 32 },
		{name: 'Ray Brown', age: 28 },
		{name: 'Marvis Dan', age: 37 },
		{name: 'Bob Smith', age: 26 }
		];
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(users));
	}*/

	// MAKING THE FILE PATH DYNAMIC
	//build file path
	let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

	// console.log(filePath);
	// res.end();


	// Extension of file
	let extname = path.extname(filePath);

	// Initial content type
	let contentType = 'text/html';

	// Check ext and set content type
	switch(extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'text/json';
			break;
		case '.png':
			contentType = 'text/png';
			break;
		case '.jpg':
			contentType = 'text/jpg';
			break;
	}

	// REad File
	fs.readFile(filePath, (err, content) => {

		if(err) {
			if (err.code == 'ENOENT') {
				// Page not found
				fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
					res.writeHead(200, {
						'Content-Type': 'text/html'
					});
					res.end(content, 'utf8');
				})
			} else {
				//some server error
				res.writeHead(500);
				res.end(`Server Error: ${err.code}`);
			}
		} else {
			//success
			res.writeHead(200, { 'Content-Type': contentType });
			res.end(content, 'utf8');
		}
	})


});

const PORT = process.env.PORT || 5000;


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


