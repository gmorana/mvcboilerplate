const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

// Create a DB Connection
const db = require('./config/db');
// Promise

//db.authenticate().then(() => console.log('Connected to the DB')).catch(() => console.log('Error connecting to the DB'));
// Importar el modelo
require('./models/Wells');
db.sync().then(() => console.log('Connected to the DB')).catch(() => console.log('Error connecting to the DB'));
// Create an express app
const app = express();
// Where we can find the static files
app.use(express.static('public'));
// for parsing application/json
app.use(bodyParser.json());
// Enabling the template view engine Pug
app.set('view engine', 'pug');
// Including the views folder -including the path
app.set('views', path.join(__dirname, './views'));
// Loading all routes from the routes folder->index.js
app.use('/', routes());
app.listen(3000);
