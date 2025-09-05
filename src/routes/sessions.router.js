import { Router } from 'express';
import passport from 'passport';
import sessionsController from '../controllers/sessions.controller.js';

const router = Router();

router.post('/register', passport.authenticate('register', { session: false, failureRedirect: '/failregister' }), sessionsController.register);

router.post('/login', passport.authenticate('login', { session: false, failureRedirect: '/faillogin' }), sessionsController.login);

router.get('/current', passport.authenticate('jwt', { session: false }), sessionsController.current);

router.get('/failregister', (req, res) => res.status(400).send({ status: "error", error: "Register failed" }));
router.get('/faillogin', (req, res) => res.status(400).send({ status: "error", error: "Login failed" }));


export default router;