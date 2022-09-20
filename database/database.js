const Sequelize = require('sequelize');

const DB_NAME = 'leea';
const USER = 'root';
const PASSWORD = ''

const sequelize = new Sequelize(DB_NAME, USER, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

// const db
module.exports = sequelize;
