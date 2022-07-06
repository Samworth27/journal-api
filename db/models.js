const { mongoose } = require("./connection.js");

const EntryModel = mongoose.model(
  "Entry",
  new mongoose.Schema({
    category: {
      type: String,
      required: true,
    },
    entry: {
      type: String,
      required: true,
    },
  })
);

const CategoryModel = mongoose.model(
  "Category",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
  })
);

module.exports = { EntryModel, CategoryModel };
