import mongoose from 'mongoose';

const collection = 'Tickets';

const schema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    purchase_datetime: { type: Date, default: Date.now },
    amount: { type: Number, required: true },
    purchaser: { type: String, required: true }
});

const ticketModel = mongoose.model(collection, schema);

export default ticketModel;