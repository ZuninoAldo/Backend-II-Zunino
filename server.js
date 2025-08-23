import dotenv from 'dotenv';
import express from 'express';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor iniciado correctamente en el puerto ${PORT}`);
});