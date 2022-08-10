const { DATE } = require("sequelize");
const seq = require("sequelize");

module.exports = (sequelize, Sequelize) => {
	const Share = sequelize.define('share', {
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,

		},
		share_name: {
			type: Sequelize.STRING
		},
		share_count: {
			type: Sequelize.STRING
		},
		rate: {
			type: Sequelize.FLOAT
		},
		sum_of_sold: {
			type: Sequelize.INTEGER
		}
	});

	return Share;
}