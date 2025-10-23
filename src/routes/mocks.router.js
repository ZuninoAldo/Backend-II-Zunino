import { Router } from 'express';
import { generateUser, generatePet } from '../utils/mocks.js';
import { usersService, petsService } from '../services/index.js';

const router = Router();

// Endpoint migrado para generar 100 mascotas falsas y devolverlas.
router.get('/mockingpets', (req, res) => {
    const pets = [];
    for (let i = 0; i < 100; i++) {
        pets.push(generatePet());
    }
    res.send({ status: 'success', payload: pets });
});

// Endpoint para generar 50 usuarios falsos y devolverlos.
router.get('/mockingusers', (req, res) => {
    const users = [];
    for (let i = 0; i < 50; i++) {
        users.push(generateUser());
    }
    res.send({ status: 'success', payload: users });
});

// Endpoint para generar datos E INSERTARLOS en la base de datos.
router.post('/generateData', async (req, res) => {
    const { users: userCount = 10, pets: petCount = 10 } = req.body;

    try {
        const users = [];
        for (let i = 0; i < userCount; i++) {
            users.push(generateUser());
        }
        await usersService.createMany(users);

        const pets = [];
        for (let i = 0; i < petCount; i++) {
            pets.push(generatePet());
        }
        await petsService.createMany(pets);

        res.send({ status: 'success', message: `${userCount} usuarios y ${petCount} mascotas generados e insertados.` });
    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message });
    }
});

export default router;