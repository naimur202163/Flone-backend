const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  sku: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: [true, "Please Enter the Name"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Please Enter the price"],
  },
  discount: {
    type: Number,
  },
  offerEnd: {
    type: String,
  },
  new: {
    type: Boolean,
  },
  rating: {
    type: Number,
    required: true,
  },
  saleCount: {
    type: Number,
    required: [true, "Please Enter the Sell count"],
  },
  category: [
    {
      type: String,
      required: true,
    },
  ],
  tag: [
    {
      type: String,
      required: [true, "Please Enter the Tag"],
    },
  ],
  variation: [
    {
      color: String,
      image: String,
      size: [
        {
          name: String,
          stock: Number,
        },
      ],
     
    },
  ],
  images: [
    {
      type: String,
    },
  ],
  shortDescription: {
    type: String,
    required:true,
  },
  fullDescription: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
