import { productsService, ticketsService } from "./index.js";
import { v4 as uuidv4 } from 'uuid';

export default class CartsService {
    constructor(repository) {
        this.repository = repository;
    }

        createCart = () => {
        return this.repository.create({});
    }

    getCartById = (id) => {
        return this.repository.getById(id);
    }

    /**
     * Lógica para finalizar la compra de un carrito.
     * @param {string} cartId - El ID del carrito a procesar.
     * @param {string} purchaserEmail - El email del usuario que realiza la compra.
     */
    purchaseCart = async (cartId, purchaserEmail) => {
        const cart = await this.repository.getCartWithProducts(cartId);
        if (!cart) throw new Error("Cart not found");

        const failedProducts = [];
        const purchasedProducts = [];
        let totalAmount = 0;

        for (const item of cart.products) {
            const product = item.product;
            const quantity = item.quantity;

            // 1. Verifica el stock
            if (product.stock >= quantity) {
                // 2. Si hay stock, actualiza el producto y lo agrega a la lista de comprados
                product.stock -= quantity;
                await productsService.updateProduct(product._id, { stock: product.stock });
                purchasedProducts.push(item);
                totalAmount += product.price * quantity;
            } else {
                // 3. Si no hay stock, lo agrega a la lista de fallidos
                failedProducts.push(item);
            }
        }

        let newTicket = null;
        // 4. Si se compró al menos un producto, genera el ticket
        if (purchasedProducts.length > 0) {
            newTicket = await ticketsService.createTicket({
                code: uuidv4(),
                amount: totalAmount,
                purchaser: purchaserEmail,
            });
        }

        // 5. Actualiza el carrito en la DB para que solo contenga los productos que no se pudieron comprar
        await this.repository.dao.updateOne({ _id: cartId }, { $set: { products: failedProducts } });

        return { ticket: newTicket, failedProducts: failedProducts.map(item => item.product._id) };
    }
};