const express = require('express');
// Define the router
const router = express.Router();
// Import the controller
const projectController = require('../controllers/projectController');
module.exports = function() {
	router.get('/', projectController.projectHome);
	router.get('/us', projectController.projectNosotros);
	return router;
};
