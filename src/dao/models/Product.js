import mongoose from 'mongoose';

const collection = 'Products';

const schema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    code: { type: String, required: true, unique: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    status: { type: Boolean, default: true },
    thumbnails: { type: [String], default: [] }
});

const productModel = mongoose.model(collection, schema);

export default productModel;