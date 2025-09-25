import { productsService } from '../services/index.js';

const getAllProducts = async (req, res) => {
    try {
        const products = await productsService.getProducts();
        res.send({ status: 'success', payload: products });
    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const productId = req.params.pid;
        const product = await productsService.getProductById(productId);
        if (!product) {
            return res.status(404).send({ status: 'error', error: 'Producto no encontrado.' });
        }
        res.send({ status: 'success', payload: product });
    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const product = req.body;
        const newProduct = await productsService.createProduct(product);
        res.status(201).send({ status: 'success', payload: newProduct });
    } catch (error) {
        res.status(400).send({ status: 'error', error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.pid;
        const productData = req.body;
        const updatedProduct = await productsService.updateProduct(productId, productData);
        res.send({ status: 'success', payload: updatedProduct });
    } catch (error) {
        res.status(400).send({ status: 'error', error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.pid;
        await productsService.deleteProduct(productId);
        res.send({ status: 'success', message: 'El Producto ha sido eliminado.' });
    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message });
    }
};

export default {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};