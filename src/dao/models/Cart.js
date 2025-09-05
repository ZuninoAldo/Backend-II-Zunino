import mongoose from 'mongoose';

const collection = 'Carts';

const schema = new mongoose.Schema({
    products: {
        type: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Products' 
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ],
        default: []
    }
});

const cartModel = mongoose.model(collection, schema);

export default cartModel;