const Person = require('./app');
const Logger = require('./logger');

const person1 = new Person('Ifex', 21);

person1.greeting();

const logger = new Logger();

logger.on('message', (data) => console.log(`Called Listener`, data));

logger.log('Hello World');
logger.log('Whats up');
logger.log('You good?');
