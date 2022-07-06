const express = require("express");
const router = express.Router();

// import models
const { CategoryModel } = require("./../db/models.js");

router.get("/", async (req, res) => {
  console.log( CategoryModel.find())
  res.send(await CategoryModel.find());
});

router.get("/:id", (req, res) => {
  CategoryModel.findById(req.params.id, (err, doc) => {
    if (err) {
      switch (err.name) {
        case "CastError":
          res
            .status(404)
            .send(`The category ${req.params.id} could not be found`);
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
  CategoryModel.create(req.body, (err, doc) => {
    if (err) {
      switch (err.name) {
        case "CastError":
          res
            .status(404)
            .send(`The category ${req.params.id} could not be found`);
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
  CategoryModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err, doc) => {
      if (err) {
        switch (err.name) {
          case "CastError":
            res
              .status(404)
              .send(`The category ${req.params.id} could not be found`);
            break;
          default:
            res.status(500).send("Something went wrong on our end");
        }
      } else {
        res.send(doc);
      }
    },
    { returnDocument: "after" }
  );

  // res.send(
  //   await CategoryModel.findByIdAndUpdate(req.params.id, req.body, {
  //     returnDocument: "after",
  //   })
  // );
});

router.delete("/:id", async (req, res) => {
  CategoryModel.findByIdAndDelete(req.params.id, (error) => {
    res.sendStatus(204);
  });
});

module.exports = router;
