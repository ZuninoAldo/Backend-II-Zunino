export default class CartsService {
    constructor(repository) {
        this.repository = repository;
    }

    createCart = () => {
        return this.repository.create({});
    }

    getCartById = (id) => {
        return this.repository.getById(id);
    }
}