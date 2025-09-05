import GenericRepository from './GenericRepository.js';
import cartModel from '../dao/models/Cart.js';

export default class CartsRepository extends GenericRepository {
    constructor() {
        super(cartModel);
    }

    getCartWithProducts = (id) => {
        return this.dao.findById(id).populate('products.product').lean();
    }

    addProductToCart = async (cid, pid) => {
        const cart = await this.dao.findById(cid);
        const productIndex = cart.products.findIndex(p => p.product.toString() === pid);

        if (productIndex === -1) {
            cart.products.push({ product: pid, quantity: 1 });
        } else {
            cart.products[productIndex].quantity++;
        }
        return await cart.save();
    }
    

    removeProductFromCart = (cid, pid) => {
        return this.dao.updateOne(
            { _id: cid },
            { $pull: { products: { product: pid } } }
        );
    }

    clearCart = (cid) => {
        return this.dao.updateOne(
            { _id: cid },
            { $set: { products: [] } }
        );
    }
}