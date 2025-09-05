import mongoose from 'mongoose';

const MONGO_URL = process.env.URI_MONGODB; 

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Base de datos conectada exitosamente');
    } catch (error) {
        console.error('Error conectando a la base de datos:', error.message);
        process.exit(1);
    }
};

export default connectDB;