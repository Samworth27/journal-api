const express = require("express");
const app = express();
const port = 4000;

const categories = ["food", "health", "tech", "software"];
app.get("/", (req, res) => {
  res.send({ name: "Journal API", endpoints: ["/categories"] });
});
app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
