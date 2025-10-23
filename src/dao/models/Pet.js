import mongoose from 'mongoose';

const collection = 'Pets';

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    specie: { type: String, required: true },
    birthDate: { type: Date, required: true }
});

const petModel = mongoose.model(collection, schema);

export default petModel;