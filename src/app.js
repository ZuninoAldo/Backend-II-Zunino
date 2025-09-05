import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import passport from 'passport';
import initializatePassport from './config/passport.config.js';

import connectDB from './config/database.js';
import usersRouter from './routes/users.router.js';
import sessionsRouter from './routes/sessions.router.js';

dotenv.config();
connectDB();
initializatePassport();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use('/api/users',usersRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))