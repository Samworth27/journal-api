const express = require("express");
const router = express.Router();

// get routes
const entryRoutes = require("./entry_routes.js");

router.get("/", function(req, res, next) {
  console.log("hit")
  next();
});

router.get("/", (req, res) => {
  res.send({ name: "Journal API", endpoints: `${req.baseUrl}/endpoints`});
});

router.get("/endpoints", (req, res) => {
  res.send([`${req.baseUrl}/`,`${req.baseUrl}/entries`,`${req.baseUrl}/categories`])
  // res.send([Object.keys(req), req.baseUrl])
})

router.get("/categories", (req, res) => {
  res.send(categories);
});

router.use("/entries", entryRoutes);

module.exports = router;