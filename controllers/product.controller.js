const {
    createProductService,
    getProductByIdservice,
    getAllProductservice,
    updateProductByIdService,
    deleteProductByIdservice
} = require('../services/product.service');

const createProductController = async (req, res) => {
    try {
        const data = req.body;
        const newProduct = await createProductService(data);
        return res.status(201).json(newProduct);
    } catch (error) {
        return res.status(500).json({ message: `failed to create product:${error.message}` });
    }
};

const getproductByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await getProductByIdservice(id);
        if (!product) {
            return res.status(204).json({ message: 'no product found with this' })
        }
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: `failed to get product${error.message}` })
    }
}

const getAllProductController = async (req, res) => {
    try {
        const Product = await getAllProductservice();
        return res.status(200).json(Product);
    } catch (error) {
        return res.status(500).json({ message: `failed to get product:${error.message}` });
    }
}

const updateProductByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const UpdateProduct = await updateProductByIdService(id, data);

        if (!UpdateProduct) {
            return res.status(204).json({ message: 'no product found with the given id to update' })
        }
        return res.status(200).json(UpdateProduct);
    } catch (error) {
        return res.status(500).json({ message: `failed to update product:${error.message}` });
    }
}

const deleteProductByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteProductByIdservice(id);
        return res.status(200).json({ message: 'product is deleted' });
    } catch (error) {
        return res.status(500).json({ message: `failed to delete product:${error.message}` })
    }
}

module.exports = {
    createProductController,
    getproductByIdController,
    getAllProductController,
    updateProductByIdController,
    deleteProductByIdController

}