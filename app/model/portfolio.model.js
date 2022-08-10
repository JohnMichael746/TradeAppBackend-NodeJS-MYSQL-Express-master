const { DATE } = require("sequelize");
const seq = require("sequelize");
//const { shareholders, shares } = require("../config/db.config");


module.exports = (sequelize, Sequelize) => {
    const Porfolio = sequelize.define('portfolio', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
        FK_share_name: {
            type: Sequelize.STRING
            
            // references: {
            //     model: shares,
            //     key: 'share_name'
            // }
        },
        count: {
            type: Sequelize.INTEGER
        },
        FK_shareholder_id: {
            type: Sequelize.INTEGER

            // references: {
            //     model: shareholders,
            //     key: 'id'
            // }
        }
    });


    return Porfolio;
}

