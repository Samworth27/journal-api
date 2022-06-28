
// setup .env
const dotenv = require("dotenv");
dotenv.config();

// setup express
const express = require("express");
const app = express();

// import models
const {EntryModel} = require("./db/models.js");


// express app
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ name: "Journal API", endpoints: ["/categories", "/entries"] });
});

app.get("/categories", (req, res) => {
  res.send(categories);
});



app.get("/entries", async(req, res) => {
  const entries = await EntryModel.find();
  res.send(entries);
});

app.get("/entries/:id", async (req, res) => {
  const entry = await EntryModel.find({ _id: req.params.id });
  res.send(entry);
});

app.post("/entries", async (req, res) => {
  const entry = { category: req.body.category, entry: req.body.entry };
  const newEntry = await EntryModel.create(entry);
  entries.push(entry);
  res.send(newEntry);
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
