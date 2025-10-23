import { faker } from '@faker-js/faker';

/**
 * Genera un usuario falso con datos aleatorios.
 */
export const generateUser = () => {
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        // La consigna pide 'coder123' encriptada. 
        // Paso el string plano porque mi modelo User ya tiene un hook 'pre-save' que se encarga de encriptarlo automáticamente.
        password: 'coder123',
        role: faker.helpers.arrayElement(['user', 'admin']),
        pets: [],
    };
};

/**
 * Genera una mascota falsa con datos aleatorios.
 */
export const generatePet = () => {
    return {
        name: faker.animal.dog(),
        specie: faker.helpers.arrayElement(['Dog', 'Cat', 'Bird']),
        birthDate: faker.date.birthdate(),
    };
};