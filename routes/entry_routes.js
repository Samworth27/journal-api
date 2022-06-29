const express = require("express");
const router = express.Router();

// import models
const { EntryModel } = require("./../db/models.js");

router.get("/", async (req, res) => {
  res.send(await EntryModel.find());
});

router.get("/:id", (req, res) => {
  EntryModel.findById(req.params.id, (err, doc) => {
    if (err) {
      switch (err.name) {
        case "CastError":
          res.status(404).send(`The entry ${req.params.id} could not be found`);
          break;
        default:
          res.status(500).send("Something went wrong on our end");
      }
    } else {
      res.send(doc);
    }
  });
});

router.post("/", (req, res) => {
  EntryModel.create(req.body, (err, doc) => {
    if (err) {
      switch (err.name) {
        case "CastError":
          res.status(404).send(`The entry ${req.params.id} could not be found`);
          break;
        default:
          res.status(500).send("Something went wrong on our end");
      }
    } else {
      res.send(doc);
    }
  });
});

router.put("/:id", async (req, res) => {
  console.log(req.body);
  res.send(
    await EntryModel.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    })
  );
});

router.delete("/:id", async (req, res) => {
  EntryModel.findByIdAndDelete(req.params.id, (error) => {
    res.sendStatus(204);
  });
});

module.exports = router