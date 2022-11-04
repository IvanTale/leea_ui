const db = require('../../database/models')

module.exports = {
		createProduct,
		bulkCreate,
}

async function createProduct(body) {
		const product = await db.Products.create({
				name: body.name,
				price: body.price,
		});
		return product;
}

async function bulkCreate(items) {
		const addedItems = await db.ItemsInProducts.bulkCreate(items);
		return addedItems;
}
