const { DATE } = require("sequelize");
const seq = require("sequelize");

module.exports = (sequelize, Sequelize) => {
	const Shareholder = sequelize.define('shareholder', {
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,

		},
		first_name: {
			type: Sequelize.STRING
		},
		last_name: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING
		}
	});

	
	
	return Shareholder;
}