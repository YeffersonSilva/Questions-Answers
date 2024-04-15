// model

const Sequelize = require('sequelize');

const connection = require('./dataBase');

const Perguntas = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Perguntas.sync({ force: false }).then(() => { })

module.exports= Perguntas;