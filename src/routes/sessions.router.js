import { Router } from 'express';
import passport from 'passport';
import sessionsController from '../controllers/sessions.controller.js';

const router = Router();

router.post('/register', passport.authenticate('register', { session: false, failureRedirect: '/failregister' }), sessionsController.register);

router.post('/login', passport.authenticate('login', { session: false, failureRedirect: '/faillogin' }), sessionsController.login);

router.post('/forgot-password', sessionsController.forgotPassword);

// RUTA PARA RENDERIZAR LA VISTA DE RESETEO 
router.get('/reset-password-view/:token', sessionsController.resetPasswordView);
// RUTA PARA PROCESAR LA NUEVA CONTRASEÑA
router.post('/reset-password/:token', sessionsController.resetPassword);

router.get('/current', passport.authenticate('jwt', { session: false }), sessionsController.current);

router.get('/failregister', (req, res) => res.status(400).send({ status: "error", error: "El intento de registro falló" }));

router.get('/faillogin', (req, res) => res.status(400).send({ status: "error", error: "El intento de ingresar falló" }));


export default router;