const express = require("express");
const app = express();
const port = 4000;

function uuid() {
  let uuid = "";
  for (let i = 0; i < 16; i++) {
    let digit = Math.floor(Math.random() * 256);
    if (i == 4 || i == 6 || i == 8) {
      uuid += "-";
    }
    uuid += digit.toString(16).padStart(2, "0");
  }
  return uuid;
}

const categories = ["food", "health", "tech", "software"];

const entries = [
  {id: uuid(), category: "food", entry: "yum i liek food"},
  {id: uuid(), category: "health", entry: "monster and a durry = helth"},
  {id: uuid(), category: "tech", entry: "computer go beep boop"},
  {id: uuid(), category: "software", entry: "my type words for my computer go beep boop"},
]

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ name: "Journal API", endpoints: ["/categories","/entries"] });
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/entries", (req, res) => {
  res.send(entries);
});

app.post("/entries", (req, res)=>{
  const entry = {id:uuid()}
  entry.category = req.body.category;
  entry.entry = req.body.entry
  entries.push(entry);
  res.send(entry);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
