const Mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const { Schema } = Mongoose;

const options = {
  separator: "-",
  lang: "en",
  truncate: 120,
};

Mongoose.plugin(slug, options);

// Product Schema
const ProductSchema = new Schema({
  whatsapp: {
    type: String,
  },
  name: {
    type: String,
    trim: true,
  },
  slug: {
    type: String,
    slug: "name",
    unique: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    trim: true,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  taxable: {
    type: Boolean,
    default: false,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model("Product", ProductSchema);
