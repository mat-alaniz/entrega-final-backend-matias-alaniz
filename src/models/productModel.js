const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    code: { type: String, required: true },
    stock: { type: Number, required: true },
});

productSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Product", productSchema);