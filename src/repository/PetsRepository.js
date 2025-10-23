import GenericRepository from './GenericRepository.js';
import petModel from '../dao/models/Pet.js';

export default class PetsRepository extends GenericRepository {
    constructor() {
        super(petModel);
    }
}