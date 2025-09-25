import { cartsService } from "../services/index.js";

const addProductToCart = async (req, res) => {
    try {
        const { cid, pid } = req.params;
        
        // --- INICIO DE LA VALIDACIÓN ---
        // Obtiene el ID del carrito del usuario desde el token JWT (req.user)
        const userCartId = req.user.cart;

        // Compara si el carrito de la URL es el mismo que el del usuario.
        if (cid !== userCartId) {
            return res.status(403).send({ status: 'error', error: 'No permitido: No puedes agregar productos a este carrito.' });
        }
        // --- FIN DE LA VALIDACIÓN ---

        const updatedCart = await cartsService.addProductToCart(cid, pid);
        res.send({ status: 'success', payload: updatedCart });
    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message });
    }
};

const purchaseCart = async (req, res) => {
    try {
        const { cid } = req.params;
        const purchaserEmail = req.user.email; // Obtiene el email del usuario logueado

        // Se valida que el usuario solo pueda comprar su propio carrito
        if (cid !== req.user.cart) {
            return res.status(403).send({ status: 'error', error: 'No Permitido: Solo puedes comprar tu propio carrito.' });
        }

        const result = await cartsService.purchaseCart(cid, purchaserEmail);
        res.send({ status: 'success', payload: result });
    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message });
    }
};

export default {
    addProductToCart,
    purchaseCart
};