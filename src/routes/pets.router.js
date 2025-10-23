import { Router } from 'express';
import petsController from '../controllers/pets.controller.js';

const router = Router();

router.get('/', petsController.getAllPets);


export default router;