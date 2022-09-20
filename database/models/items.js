module.exports = (sequelize, DataTypes) => {
    const Items = sequelize.define('Items', {
        // itemId: {
        //     primaryKey: true,
        //     autoIncrement: true,
        //     allowNull: false,
        //     type: DataTypes.INTEGER,
        // },
        item: DataTypes.STRING,
        price: DataTypes.INTEGER,
        onHand: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    })
    Items.associate = (models) => {
        console.log('model items', models);
        Items.hasMany(models.ItemsInProducts, { foreignKey: 'itemId' });
    }
    return Items;
}

// const Sequelize = require('sequelize');
// const sequelize = require('../database');
//
// const Items = sequelize.define('Items', {
//     id: {
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//         type: Sequelize.INTEGER,
//     },
//     item: Sequelize.STRING,
//     price: Sequelize.INTEGER,
//     onHand: Sequelize.INTEGER,
//     createdAt: Sequelize.DATE,
//     updatedAt: Sequelize.DATE,
// })
//
// module.exports = Items
