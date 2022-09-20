module.exports = (sequelize, DataTypes) => {
    const itemsInProduct = sequelize.define('ItemsInProducts', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        productId: DataTypes.INTEGER,
        itemId: DataTypes.INTEGER,
        qty: DataTypes.INTEGER,
    })
    itemsInProduct.associate = (models) => {
        itemsInProduct.belongsTo(models.Products, {foreignKey: 'productId'} );
        itemsInProduct.belongsTo(models.Items, {foreignKey: 'itemId'});
    }
    return itemsInProduct;
}
