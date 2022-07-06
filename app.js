// setup .env
const dotenv = require("dotenv");
dotenv.config();

// setup express
const express = require("express");
const cors = require("cors");

const app = express();


// get routes
const v1_routes = require("./routes");

// express app
app.use(express.json());
app.use(cors());
// app.use(allowCrossDomain);

app.use("/api/v1", v1_routes);

module.exports = app