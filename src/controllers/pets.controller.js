import { petsService } from '../services/index.js';

const getAllPets = async (req, res) => {
    const pets = await petsService.getPets();
    res.send({ status: 'success', payload: pets });
};

export default { getAllPets };