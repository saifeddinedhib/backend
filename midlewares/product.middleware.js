const mongoose = require('mongoose')

const validateCreateProduct = (req, res, next) => {
    const { name, price, stock } = req.body;
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ message: 'missing required product fields name' })
    }
    if (!name || typeof price !== 'number' || price < 0) {
        return res.status(400).json({ message: 'missing required product fields price' })
    }
    if (!stock || typeof stock !== 'number' || stock < 0) {
        return res.status(400).json({ message: 'invalide stock field:must be a positive number' });
    }
    next();
}

const validId = (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'invalid ID format' });
    }
    next();
}

const validUpdateProduct = (req, res, next) => {
    const { name, price, stock, description } = req.body;

    if (name !== undefined) {
        if (typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({ message: "invalid name field must be a non empty string" })
        }
    }
    if (price !== undefined) {
        if (typeof price !== 'number' || price < 0) {
            return res.status(400).json({ message: "invalid price feild must be a nulber" })
        }
    }
    if (stock !== undefined) {
        if (typeof stock !== 'number' || stock < 0) {
            return res.status(400).json({ message: "invalid stock feild musst be < 0 number" })
        }
    }
    if (description !== undefined) {
        if (typeof description !== 'string') {
            return res.status(400).json({ message: "invalid description must be a string" })
        }
    }
    if (name === undefined && price === undefined && stock === undefined && description === undefined) {
        return res.status(400).json({ message: "invalid it should be at least one" })

    }
    next();

}

module.exports = {
    validateCreateProduct,
    validId,
    validUpdateProduct
}