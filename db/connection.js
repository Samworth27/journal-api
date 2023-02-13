// setup mongoose
const mongoose = require("mongoose");
// const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.cdcgg.mongodb.net/?retryWrites=true&w=majority`;
const MONGODB_URI = `mongodb+srv://xxvii:${process.env.MONGODB_PASS}@cluster0.cdcgg.mongodb.net/journal?retryWrites=true&w=majority`;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    let state = mongoose.connection.states[mongoose.connection.readyState];
    console.log(`Mongoose: ${state}`);
  })
  .catch((error) => console.log(error));

module.exports = { mongoose };
