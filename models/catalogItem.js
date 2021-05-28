import mongoose from 'mongoose';

const catalogItemSchema = new mongoose.Schema({
    title: String,
    year: Number,
    type: {
        type: String,
        enum : ['serie','pelicula']
    },
    likes: Number
});

export default mongoose.model('CatalogItem', catalogItemSchema, 'catalogItems');