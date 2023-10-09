import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  sku: {
    type: String,
    required: true,
  },
  image: String,
  tags: [String],
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  change_log: [
    {
      price: {
        type: Number,
      },
      stock: {
        type: Number,
      },
      timestamp: { type: Date }
    }
  ]
}, {
  timestamps: true
});

export default model('products', productSchema);
