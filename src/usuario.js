const Sequelize = require('sequelize');
const database = require('./db');
 
const Credentials = database.define('credentials', {
    credentialID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
 
module.exports = Credentials;