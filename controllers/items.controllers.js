const db = require('../database/models');

module.exports = {
    getItems,
    addItem,
    updateItem
}

async function getItems(req,res) {
    console.log('get Items');

    try {
        const items = await db.Items.findAll();
        res.status(200).json( items );
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Server error"
        })
    }
}

async function addItem(req, res) {
    try {
        const item = await db.Items.create({
            item: req.body.item,
            price: req.body.price,
            onHand: req.body.onHand,
        });
        res.status(201).json({ item });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Server error"
        })
    }
}

async function updateItem(req, res) {
    console.log('update Items');
    const param = req.params.id;
    console.log('param', param);

    try {
        const item = await db.Items.findByPk(param);
        if (item === null) {
            console.log('item Not found!');
        }
        item.item = req.body.item;
        item.price = req.body.price;
        item.onHand += req.body.onHand;
        await item.save();
        res.status(200).json({ item });
    } catch (e) {
        console.log('req.body.id', req.body.id);
        console.log(e);
        res.status(500).json({
            message: "Server error"
        })
    }
}
