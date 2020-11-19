const Person = require('./app');
const person1 = new Person('Ifex', 21);

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
	// console.log(req.url); // gets the url path
	if (req.url === '/') {
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
	}
});

const PORT = process.env.PORT || 5000;


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


