// Repository's
import UsersRepository from "../repository/UserRepository.js";
import CartsRepository from "../repository/CartsRepository.js";
import ProductsRepository from "../repository/ProductRepository.js";
import TicketsRepository from '../repository/TicketsRepository.js';

// Services
import UsersService from "./UsersService.js";
import CartsService from "./CartsService.js";
import ProductsService from "./ProductsService.js";
import TicketsService from "./TicketsService.js";

//Models
import userModel from '../dao/models/User.js';
import cartModel from '../dao/models/Cart.js';
import productModel from "../dao/models/Product.js";
import ticketModel from '../dao/models/Ticket.js';

// Instancias
export const usersService = new UsersService(new UsersRepository(userModel));
export const cartsService = new CartsService(new CartsRepository(cartModel));
export const productsService = new ProductsService(new ProductsRepository(productModel));
export const ticketsService = new TicketsService(new TicketsRepository(ticketModel));