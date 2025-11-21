import GenericRepository from "./GenericRepository.js";
import adoptionModel from "../dao/models/Adoption.js";

export default class AdoptionRepository extends GenericRepository {
    constructor() {
        super(adoptionModel);
    }
}