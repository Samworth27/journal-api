const {mongoose} = require("./connection.js");

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

module.exports = { EntryModel };
