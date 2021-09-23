//database
import Sequelize from 'sequelize'
//const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', {dialect: 'mysql', host: 'localhost'});
// const sequelize = new Sequelize('postgres://user:password@172.17.0.2:5432/crud');

module.exports = sequelize;