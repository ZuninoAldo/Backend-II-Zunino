import jwt from 'jsonwebtoken';
import UserDTO from '../dto/User.dto.js';

const register = async (req, res) => {
    res.send({ status: "success", message: "User registered" });
}

const login = async (req, res) => {
    const user = req.user;
    
    const userDto = UserDTO.getUserTokenFrom(user);
    const token = jwt.sign(userDto, 'tokenSecretJWT', { expiresIn: "1h" });
    
    res.cookie('coderCookie', token, { maxAge: 3600000 }).send({ status: "success", message: "Logged in" });
}

const current = async (req, res) => {
    res.send({ status: "success", payload: req.user });
}

export default {
    register,
    login,
    current,
}