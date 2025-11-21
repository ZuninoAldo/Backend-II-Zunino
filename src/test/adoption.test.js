import mongoose from 'mongoose';
import supertest from 'supertest';
import { expect } from 'chai';
import { usersService, petsService } from '../src/services/index.js';

const requester = supertest('http://localhost:8080');

describe('Test funcional de Adopciones', () => {
    let userId;
    let petId;

    before(async function () {
        const user = await usersService.create({
            first_name: "Test",
            last_name: "User",
            email: "testadoption@mail.com",
            password: "PasswordForTest22",
            age: 20
        });
        userId = user._id;

        const pet = await petsService.create({
            name: "TestDog",
            specie: "Dog",
            birthDate: new Date(),
            adopted: false
        });
        petId = pet._id;
    });


    after(async function () {
        await mongoose.connection.collection('users').deleteOne({ _id: userId });
        await mongoose.connection.collection('pets').deleteOne({ _id: petId });
    });

    it('GET /api/adoptions debe devolver todas las adopciones (status 200) y un array', async () => {
        const { statusCode, body } = await requester.get('/api/adoptions');

        expect(statusCode).to.be.equal(200);
        expect(body.payload).to.be.an('array');
    });

    it('GET /api/adoptions/:aid debe devolver 404 si la adopción no existe', async () => {
        const nonExistentId = '64c2f2a2d9f9f1a2b3c4d5e6';
        const { statusCode } = await requester.get(`/api/adoptions/${nonExistentId}`);

        expect(statusCode).to.be.equal(404);
    });

    it('POST /api/adoptions/:uid/:pid debe crear una adopción correctamente', async () => {
        const { statusCode, body } = await requester.post(`/api/adoptions/${userId}/${petId}`);

        expect(statusCode).to.be.equal(200);
        expect(body.payload).to.have.property('_id');
        expect(body.payload.owner.toString()).to.be.equal(userId.toString());
        expect(body.payload.pet.toString()).to.be.equal(petId.toString());
    });

    it('POST /api/adoptions/:uid/:pid debe fallar si la mascota ya fue adoptada', async () => {
        const { statusCode, body } = await requester.post(`/api/adoptions/${userId}/${petId}`);

        expect(statusCode).to.be.equal(400);
        expect(body.error).to.include('adoptada');
    });
});