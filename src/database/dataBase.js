const Sequelize = require('sequelize');

const connection = new Sequelize(
    'guidaperuntas',
    'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;