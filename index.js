const express = require('express');
const routes = require('./routes');
const path = require('path');

// Create an express app
const app = express();
// Enabling the template view engine Pug
app.set('view engine', 'pug');
// Including the views folder -including the path
app.set('views', path.join(__dirname, './views'));
// Loading all routes from the routes folder->index.js
app.use('/', routes());
app.listen(3000);
