//require('./modules/path'); //importando o modulo path
//require('./modules/fs'); //importando o modulo fs
//require('./modules/http'); //importando o modulo http
//const {Person} = require('./person'); //importar arquivo
//const person = new Person('Bia');
const dotenv = require('dotenv');
const conncetToDatabase = require('./src/database/connect');

dotenv.config();
require('./modules/express'); //importando o modulo express


conncetToDatabase();
//console.log(person.sayMyName());

