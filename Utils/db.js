const { Sequelize, DataTypes } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Miprimeravez1234',
    port: 5432,
    database: 'Checkin',
    logging: false
})

module.exports = { db, DataTypes}