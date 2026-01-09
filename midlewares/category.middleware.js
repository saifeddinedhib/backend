const mongoose = require('mongoose')

const validateCreateCategory = (req, res, next) => {
    const { name } = req.body;
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ message: 'missing required category fields name' })
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


const validateUpdateCategory = (req, res, next) => {
    const { name, description } = req.body;
    if (!name && !description) {
        return res.status(400).json({ message: 'cannot send empty json' })

    }

    if (name && (typeof name !== 'string' || name.trim() === '')) {
        return res.status(400).json({ message: 'invalid fields name' })
    }

    if (description && (typeof description !== 'string' || description.trim() === '')) {
        return res.status(400).json({ message: 'invalid fields description' })
    }
    next();
}


module.exports = {
    validateCreateCategory,
    validId,
    validateUpdateCategory
}