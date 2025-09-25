export default class ProductsService {
    constructor(repository) {
        this.repository = repository;
    }

    getProducts = (params) => this.repository.getAll(params);

    getProductById = (id) => this.repository.getBy({ _id: id });

    createProduct = (product) => this.repository.create(product);

    updateProduct = (id, product) => this.repository.update(id, product);

    deleteProduct = (id) => this.repository.delete(id);
}