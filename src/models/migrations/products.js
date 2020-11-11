const { DataTypes } = require('sequelize');

const cursor = require('../database/db');


const Product = cursor.define("product", {

    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

    price: {
        type: DataTypes.DECIMAL(2, 2),
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }

});

module.exports = Product;
