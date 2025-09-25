import { Router } from 'express';
import productsController from '../controllers/products.controller.js';
import passport from 'passport';
import authorization from '../utils/authorization.js';

const router = Router();

// Las rutas GET pueden ser accedidas por cualquier usuario logueado
router.get('/',
    passport.authenticate('jwt', { session: false }),
    productsController.getAllProducts
);

router.get('/:pid',
    passport.authenticate('jwt', { session: false }),
    productsController.getProductById
);

// Las rutas de creación, actualización y borrado solo para ADMINS
router.post('/',
    passport.authenticate('jwt', { session: false }),
    authorization(['admin']), // Solo usuarios con rol 'admin'
    productsController.createProduct
);

router.put('/:pid',
    passport.authenticate('jwt', { session: false }),
    authorization(['admin']), // Solo usuarios con rol 'admin'
    productsController.updateProduct
);

router.delete('/:pid',
    passport.authenticate('jwt', { session: false }),
    authorization(['admin']), // Solo usuarios con rol 'admin'
    productsController.deleteProduct
);

export default router;