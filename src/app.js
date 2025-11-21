import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import passport from 'passport';
import initializatePassport from './config/passport.config.js';

import connectDB from './config/database.js';
import usersRouter from './routes/users.router.js';
import sessionsRouter from './routes/sessions.router.js';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import mocksRouter from './routes/mocks.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from "./routes/adoption.router.js";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

dotenv.config();
connectDB();
initializatePassport();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT;

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación de API E-commerce',
            description: 'API para la gestión de usuarios, productos, carritos y adopciones.'
        }
    },
    apis: [path.join(__dirname, 'docs', '**', '*.yaml')]
};

const specs = swaggerJSDoc(swaggerOptions);
app.use('/apidocs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use('/api/users',usersRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/api/mocks', mocksRouter);
app.use('/api/pets', petsRouter);
app.use("/api/adoptions", adoptionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))