const { createOrderService, getAllOrderService, getOrderByIdService,
    deleteOrderByIdService,
    updateOrderByIdService
} = require('../services/order.service');
const { getProductByIdervice } = require('../services/person.service');
const { getProductByIdservice,
} = require('../services/product.service');

const createOrderController = async (req, res) => {
    try {
        const data = req.body;

        const existingPerson = await getPersonByIdService(data.client);
        if (!existingPerson) {
            return res.status(404).json({ message: " person not found " })
        }
        // Check Existing ALL products in TAB PRODUCTS
        for (const element of data.products) {
            const existingProduct = await getProductByIdService(element.product);

            if (!existingProduct) {
                return res.status(404).json({ message: " Product Not Found not found " })
                break;
            }
        }

        // Calcul Total price 
        let totalPrice = 0;
        for (const element of data.products) {
            const product = await getProductByIdService(element.product);

            totalPrice += product.price * element.quantity;
        }
        data.total = totalPrice;

        const newOrder = await createOrderService(data)
        return res.status(201).json(newOrder);
    } catch (error) {
        return res.status(500).json({ error: `failed to create order ${error.message}` })
    }
};

const getAllOrderController = async (req, res) => {
    try {
        const Order = await getAllOrderService();
        return res.status(200).json(Order);
    } catch (error) {
        return res.status(500).json({ message: `failed to get all products:${error.message}` });
    }
};

const getOrderByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await getOrderByIdService(id);
        if (!order) {
            return res.status(204).json({ message: 'no order found with this' })
        }
        return res.status(200).json(order);
    } catch (error) {
        return res.status(500).json({ message: `failed to get order${error.message}` })
    }
};

const updateOrderByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        // Check Existing ALL products in TAB PRODUCTS
        for (const element of data.products) {
            const existingProduct = await getProductByIdService(element.product);

            if (!existingProduct) {
                return res.status(404).json({ message: " Product Not Found not found " })
                break;
            }
        }

        // Calcul Total price 
        let totalPrice = 0;
        for (const element of data.products) {
            const product = await getProductByIdService(element.product);

            totalPrice += product.price * element.quantity;
        }
        data.total = totalPrice;

        const UpdateOrder = await updateOrderByIdService(id, data);

        if (!UpdateOrder) {
            return res.status(204).json({ message: 'no Order found with the given id to update' })
        }
        return res.status(200).json(UpdateOrder);
    } catch (error) {
        return res.status(500).json({ message: `failed to update Order:${error.message}` });
    }
}

const deleteOrderByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await getOrderByIdService(id)
        if (!order) {
            return res.status(404).json({ message: "order not found" })

        }
        if (order.status !== "CANCELED") {
            return res.status(409).json({ message: "Cannot delete order in this status" })
        }
        await deleteOrderByIdService(id);
        return res.status(200).json({ message: 'order is deleted' });
    } catch (error) {
        return res.status(500).json({ message: `failed to delete order:${error.message}` })
    }
}

module.exports = {
    createOrderController,
    getAllOrderController,
    getOrderByIdController,
    deleteOrderByIdController,
    updateOrderByIdController
}