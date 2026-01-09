const mongoose = require('mongoose')

const validateCreateOrder = (req, res, next) => {
    const { products, status } = req.body

    if (products.length === 0) {
        return res.status(400).json({ error: "Passed a least one product" })

    }

    for (const element of products) {
        if (element.quantity < 1) {
            return res.status(400).json({ error: 'every quantities must be great than 1 ' })
            break;
        }
    }

    if (status !== undefined && !['DELIVERED', 'PENDING', 'CANCELED'].includes(status)) {
        return res.status(400).json({ error: "invalid status" })
    }
    next();
};

const validId = (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'invalid ID format' });
    }
    next();
}

const validUpdateOrder = (req, res, next) => {
    const { products, status, client } = req.body;

    if (!products && !status) {
        return res.status(400).json({ error: "Must send a least  products or status" })
    }

    if (client !== undefined) {
        return res.status(400).json({ error: "Cannot updating client" })
    }

    if (products.length === 0) {
        return res.status(400).json({ error: "Passed a least one product" })

    }

    if (status !== undefined && !['DELIVERED', 'PENDING', 'CANCELED'].includes(status)) {
        return res.status(400).json({ error: "invalid status" })
    }

    for (const element of products) {
        if (element.quantity < 1) {
            return res.status(400).json({ error: 'every quantities must be great than 1 ' })
            break;
        }
    }

    next();

}


module.exports = {
    validateCreateOrder,
    validId,
    validUpdateOrder
}