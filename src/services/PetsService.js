export default class PetsService {

    constructor(repository) {
        this.repository = repository;
    }

    createMany = (pets) => this.repository.createMany(pets);
    create = (pet) => this.repository.create(pet);
    getPets = () => this.repository.getAll();

}