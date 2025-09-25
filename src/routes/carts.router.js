import { Router } from 'express';
import cartsController from '../controllers/carts.controller.js';
import passport from 'passport';
import authorization from '../utils/authorization.js';

const router = Router();

router.post('/:cid/product/:pid',
    passport.authenticate('jwt', { session: false }),
    authorization(['user']),
    cartsController.addProductToCart
);

router.post('/:cid/purchase',
    passport.authenticate('jwt', { session: false }),
    cartsController.purchaseCart
);

export default router;