//database
import Sequelize from 'sequelize'
//const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres@localhost:5432/crud', {dialect: 'postgres'});
// const sequelize = new Sequelize('postgres://user:password@172.17.0.2:5432/crud');
module.exports = sequelize;