const mongoose = require('mongoose')

const validateCreateCategory = (req, res, next) => {
    const { name} = req.body;
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'missing required product fields name' })
    }
    next();
}

const validId = (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'invalid ID format' });
    }
    next();
}




module.exports={
validateCreateCategory,
validId
}