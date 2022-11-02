const db = require('../database/models');
const Sequelize = require('sequelize');

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    addItemToProduct,
    updateProduct,
    addProductBulk,
}

async function getProduct(req, res) {
        const id = req.params.id;
    try {
        const product = await db.Products.findOne({
            where: {
                id: parseInt(id, 10),
            },
            // raw: true,
            // nested:true,
            include: [
                {
                    model: db.ItemsInProducts,
                    // attributes: [
                    //     'itemId',
                    //     'qty',
                    //     [Sequelize.col('Item.*')]
                    // ],
                    attributes: { include: [Sequelize.col('Items.*')] },
                    where: {
                        productId: {
                            [Sequelize.Op.eq]: id
                        }
                    },
                    include: [{
                            model: db.Items,
                            attributes: ['id', 'createdAt', 'updatedAt'],
                        }
                    ],
                }
            ]
        });
        res.status(200).json( product );
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Server error"
        })
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
        const product = await db.Products.create({
            name: req.body.name,
            price: req.body.price,
        }).then(async (result) => {
            try {
                let itemToProduct;
                await db.ItemsInProducts.create({
                    itemId: req.body.itemId,
                    productId: result.id,
                    qty: req.body.qty,
                }).then((res) => itemToProduct = res);
                res.status(201).json({itemToProduct})
            } catch (e) {
                console.log(e);
                res.status(500).json({
                    message: "Server error"
                })
            }
        });
        res.status(201).json({ product })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Server error"
        })
    }
}

async function addProductBulk(req, res) {
    try {
        let productId;
        db.Products.afterCreate((products, option) => {
            productId = products.id;
        })
        const product = await db.Products.create({
            name: req.body.name,
            price: req.body.price,
        }).then(async (result) => {
            try {
                const arr = req.body.payload;
                arr.forEach((item) => {
                    Object.assign(item, { productId });
                });
                await db.ItemsInProducts.bulkCreate(arr)
                    .then((result) => res.status(201).json(result));
            } catch (e) {
                console.log(e);
                res.status(500).json({
                    message: "Server error"
                })
            }
        });
        res.status(201).json({ product })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Server error"
        })
    }
}

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
