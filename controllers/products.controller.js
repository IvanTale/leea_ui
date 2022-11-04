const db = require('../database/models');
const Sequelize = require('sequelize');
const ProductService = require('../services/products/products.service');

module.exports = {
    getProducts,
    getProduct,
    addItemToProduct,
    updateProduct,
    addProduct,
}

async function getProduct(req, res) {
    const { id } = req.params;
    try {
        const product = await db.Products.findOne({
            where: {
                id: parseInt(id, 10),
            },
            include: [
                {
                    model: db.ItemsInProducts,
                    attributes: [['qty', 'quantity']],
                    where: {
                        productId: id,
                    },
                    include: [{
                            model: db.Items,
                            attributes: ['id', ['item', 'name'], 'price', 'onHand'],
                        }
                    ],
                }
            ]
        });
        res.status(200).json( product );
    } catch (e) {
        console.log(e);
        res.status(500).json(e)
    }
}

async function getProducts(req,res) {
    try {
        const products = await db.Products.findAll();
        res.status(200).json( products );
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Server error"
        })
    }
}

async function addProduct(req, res) {
    try {
        let productId;
        db.Products.afterCreate((products, option) => {
            productId = products.id;
        })
        const product = await ProductService.createProduct(req.body);
        const { items } = req.body;
        items.forEach((item) => {
            Object.assign(item, { productId });
        });
        const addedItems = await ProductService.bulkCreate(items);
        res.status(201).json({
            data: {
                product,
                addedItems
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: e,
        })
    }
}

// async function updateProduct(req, res)) {
//
// }

async function addItemToProduct(req, res) {
    try {
        const itemToProduct = await db.ItemsInProducts.create({
            itemId: req.body.itemId,
            productId: req.body.productId,
        });
        res.status(201).json({ itemToProduct })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Server error"
        })
    }
}

async function updateProduct(req, res) {
    const id = req.params.id;
    try {
        const product = await db.Products.findOne({
            where: {
                id
            },
            include: {
                model: db.ItemsInProducts,
                attributes: [ 'itemId', 'qty' ],
                where: {
                    productId: {
                        [Sequelize.Op.eq]: id
                    }
                },
            }
        });
        if ( product === null) {
            console.log('there is no products');
        }
        await product.update({
            name: req.body.name,
            price: req.body.price,
            netCost: req.body.netCost,
            ItemsInProducts: {
                itemId: req.body.itemId,
                qty: req.body.qty,
            }
        });
        res.status(200).json({ product })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Server error"
        })
    }
}
