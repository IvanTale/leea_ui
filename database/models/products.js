module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products', {
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
