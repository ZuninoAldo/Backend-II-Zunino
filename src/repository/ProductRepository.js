import GenericRepository from "./GenericRepository";
import productModel from "../dao/models/Product";

export default class ProductsRepository extends GenericRepository {
    constructor() {
        super(productModel);
    }
}