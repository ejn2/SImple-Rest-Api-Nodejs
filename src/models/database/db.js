const Sequelize = require('sequelize');
const path = require('path');


const cursor = new Sequelize("Nodejs", "", "", {
    dialect: 'sqlite',
    storage: path.join(__dirname, 'database.db')
});


module.exports = cursor;