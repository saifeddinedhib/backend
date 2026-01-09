const mongoose = require('mongoose')

const validateCreatePerson = (req, res, next) => {
    const {
        name,
        age,
        email,
        password,
        phone,
        deliveryAddress,
        image,
        role, favoritefoods } = req.body;

    if (!name || !age || !email || !password || !phone || !deliveryAddress)
        return res.status(400).json({ error: "name,age,email,password,phone,deliveryAdress" }); {
    }
    if (typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: "invalid name" })
    }
    if (typeof age !== 'number' || age < 0) {
        return res.status(400).json({ error: "age invalid" })
    }
    if (typeof password !== 'string' || password.length < 6) {
        return res.status(400).json({ error: "invalid password" })
    }

    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if (typeof phone !== 'string' || phone.trim() == '' || !phoneRegex.test(phone)) {
        return res.status(400).json({ error: "invalid phone number" })
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (typeof email !== 'string' || email.trim() == '' || !emailRegex.test(email)) {
        return res.status(400).json({ error: "invalid email" })
    }
    if (typeof deliveryAddress !== 'string' || deliveryAddress.trim() === '') {
        return res.status(400).json({ error: "invalid deliveryaddress" })
    }
    if (image !== undefined && (typeof image !== 'string' || image.trim() === '')) {
        return res.status(400).json({ error: "invalid image" })
    }
    if (role !== undefined && !['CUSTOMER', 'ADMIN'].includes(role)) {
        return res.status(400).json({ error: "invalid role" })
    }
    if (favoritefoods !== undefined) {
        if (!Array.isArray(favoritefoods) ||
            !favoritefoods.every(food => typeof food === 'string'))
            return res.status(400).json({ error: "invalid favoritefooods" })

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

module.exports = {
    validateCreatePerson,
    validId
}