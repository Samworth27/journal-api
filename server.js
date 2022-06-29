// setup .env
const dotenv = require("dotenv");
dotenv.config();

// setup express
const express = require("express");
const app = express();

// get routes
const v1_routes = require("./routes");

// express app
app.use(express.json());

app.use("/api/v1", v1_routes);

const port = 4000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
