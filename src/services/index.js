import UsersRepository from "../repository/UserRepository.js";
import CartsRepository from "../repository/CartsRepository.js";

import UsersService from "./UsersService.js";
import CartsService from "./CartsService.js";

import userModel from '../dao/models/User.js';
import cartModel from '../dao/models/Cart.js';

export const usersService = new UsersService(new UsersRepository(userModel));
export const cartsService = new CartsService(new CartsRepository(cartModel));