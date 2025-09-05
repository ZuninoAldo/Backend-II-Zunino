import passport from 'passport';
import jwt from 'passport-jwt';
import local from 'passport-local';
import { usersService, cartsService } from '../services/index.js';
import { passwordValidation } from '../utils/index.js';

const LocalStrategy = local.Strategy;
const JWTStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;

const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['coderCookie'];
    }
    return token;
};

const initializePassport = () => {

    passport.use('register', new LocalStrategy(
        { passReqToCallback: true, usernameField: 'email' },
        async (req, email, password, done) => {
            try {
                const { first_name, last_name, age } = req.body;
                if (!first_name || !last_name || !email || !password || !age) {
                    return done(null, false, { message: "Incomplete values" });
                }
                const exists = await usersService.getUserByEmail(email);
                if (exists) {
                    return done(null, false, { message: "User already exists" });
                }

                const newCart = await cartsService.createCart();

                const newUser = await usersService.create({
                    first_name,
                    last_name,
                    email,
                    age,
                    password,
                    cart: newCart._id,
                });

                return done(null, newUser);
            } catch (error) {
                return done(error);
            }
        }
    ));


    passport.use('login', new LocalStrategy(
        { usernameField: 'email' },
        async (email, password, done) => {
            try {
                if (!email || !password) {
                    return done(null, false, { message: "Incomplete values" });
                }
                const user = await usersService.getUserByEmail(email);
                if (!user) {
                    return done(null, false, { message: "User not found" });
                }
                const isValidPassword = await passwordValidation(user, password);
                if (!isValidPassword) {
                    return done(null, false, { message: "Incorrect password" });
                }
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    ));


    passport.use('jwt', new JWTStrategy(
        {
            jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
            secretOrKey: process.env.JWT_SECRET,
        },
        async (jwt_payload, done) => {
            try {
                return done(null, jwt_payload);
            } catch (error) {
                return done(error);
            }
        }
    ));
};

export default initializePassport;