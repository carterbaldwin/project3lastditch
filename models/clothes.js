const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clothesSchema = new Schema({
  type: { type: String, required: false },
  name: { type: String, required: false },
  link: String,
  date: { type: Date, default: Date.now, required: false }
});

const Clothes = mongoose.model("Clothes", clothesSchema);

module.exports = Clothes;
