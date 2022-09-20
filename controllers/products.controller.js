const db = require('../database/models');

module.exports = {
    getProducts,
    addProduct,
    addItemToProduct,
    updateProduct,
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
        }).then((result) => {
            console.log('Created product', res.id);
            try {
                const itemToProduct = db.ItemsInProducts.create({
                    itemId: req.body.itemId,
                    productId: result.id,
                });
                res.status(201).json({ itemToProduct })
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
    const param = req.params.id;

    try {
        const product = await db.Products.findByPk(param);
        if ( product === null) {
            console.log('there is no products');
        }
        product.name = req.body.name;
        product.price = req.body.price;
        await product.save();
        res.status(200).json({ product })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Server error"
        })
    }
}
