module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products', {
        // productId: {
        //     primaryKey: true,
        //     autoIncrement: true,
        //     allowNull: false,
        //     type: DataTypes.INTEGER,
        // },
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        netCost: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    });
    Products.associate = (models) => {
        Products.hasMany(models.ItemsInProducts, { foreignKey: 'productId'});
    }
    return Products;
}

// const Sequelize = require('sequelize');
// const sequelize = require('../database');
//
// const Products = sequelize.define('Products', {
//     id: {
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//         type: Sequelize.INTEGER,
//     },
//     name: Sequelize.STRING,
//     price: Sequelize.INTEGER,
//     netCost: Sequelize.INTEGER,
//     createdAt: Sequelize.DATE,
//     updatedAt: Sequelize.DATE,
// })
//
// module.exports = Products
