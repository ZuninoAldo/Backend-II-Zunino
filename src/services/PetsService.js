export default class PetsService {

    constructor(repository) {
        this.repository = repository;
    }

    createMany = (pets) => this.repository.createMany(pets);
    getPets = () => this.repository.getAll();

}