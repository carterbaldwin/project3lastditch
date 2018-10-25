const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clothesSchema = new Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  link: String,
  date: { type: Date, default: Date.now }
});

const Clothes = mongoose.model("Clothes", clothesSchema);

module.exports = Clothes;
