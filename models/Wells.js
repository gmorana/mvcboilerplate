const Sequelize = require('sequelize');
const db = require('../config/db');

const Wells = db.define('wells', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoincrement: true
	},
	wellname: Sequelize.STRING(100),
	long: Sequelize.STRING,
	lat: Sequelize.STRING,
	url: Sequelize.STRING
});
module.exports = Wells;
